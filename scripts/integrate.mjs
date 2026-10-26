import { readFile, writeFile, mkdir, copyFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const target = process.argv[2];
if (!target) throw new Error('Usage: npm run integrate -- /absolute/path/to/beat-studio');
const host = path.resolve(target);
await access(path.join(host, 'app/layout.tsx'));
const source = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../site');
const route = path.join(host, 'app/pinkoctober');
const assets = path.join(host, 'public/pinkoctober');
for (const destination of [route, assets]) {
  try { await access(destination); }
  catch (error) { if (error.code === 'ENOENT') continue; throw error; }
  throw new Error(`Destination already exists; review before replacing: ${destination}`);
}
await mkdir(route, { recursive: true });
await mkdir(assets, { recursive: true });
for (const name of ['app.js', 'i18n.js', 'translations.js', 'style.css', 'logo.svg']) {
  await copyFile(path.join(source, name), path.join(assets, name));
}
const original = await readFile(path.join(source, 'index.html'), 'utf8');
// Prefix only the guide assets. A <base> would also change hash navigation and
// drop an explicit ?lang=en or ?lang=es override when the visitor changes steps.
const html = original
  .replace(/(src|href)="(app\.js|i18n\.js|translations\.js|style\.css|logo\.svg)(\?[^\"]*)?"/g, '$1="/pinkoctober/$2$3"')
  .replace('<head>', '<head><link rel="canonical" href="https://beatlab.io/pinkoctober">');
await writeFile(path.join(route, 'document.ts'), `// Standalone document: keeps the guide separate from the main website layout.\nconst html = ${JSON.stringify(html)};\nexport default html;\n`);
await writeFile(path.join(route, 'route.ts'), `import html from './document';\n\nexport function GET() {\n  return new Response(html, {\n    headers: { 'Content-Type': 'text/html; charset=utf-8' },\n  });\n}\n`);
console.log('Pink October installed at /pinkoctober. Build and publish the existing Beat site to activate it.');
