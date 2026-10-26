# Publicar Pink October en la web de Beat

## Resultado esperado

La guía debe abrir en `https://beatlab.io/pinkoctober`, manteniendo intacta la portada de Beat. El repositorio contiene la guía completa; la ruta todavía necesita publicarse desde el proyecto que aloja `beatlab.io`.

## Para Flor

1. Abrí el proyecto actual de Beat y sincronizá su última versión publicada. La copia identificada usa Vinext y el repositorio `florpvega/beat-studio`. Conservá su archivo `.openai/hosting.json` y sus permisos actuales.
2. Descargá o cloná este repositorio, `beatlab-io/pinkoctober`.
3. Desde la carpeta de este repositorio, ejecutá:

   ```sh
   npm run integrate -- /ruta/absoluta/al/proyecto/beat-studio
   ```

4. El instalador añade únicamente `app/pinkoctober/` y `public/pinkoctober/`. Si esas carpetas ya existen, se detiene para evitar sobrescribir cambios. No modifica la portada, el layout ni los DNS.
5. En el proyecto de Beat, comprobá:

   ```sh
   npm run build
   npx tsc --noEmit
   ```

6. Revisá la guía y publicá el proyecto existente de Beat mediante su flujo habitual de ChatGPT Sites. Subir el código a GitHub por sí solo no actualiza ese dominio.

## Comprobaciones de publicación

- La portada `https://beatlab.io/` conserva su diseño y contenido.
- `https://beatlab.io/pinkoctober` abre la guía completa y carga sus estilos y logo.
- `?lang=es` muestra español y `?lang=en` muestra inglés. Sin parámetro, se usa el idioma principal del navegador.
- El idioma se conserva al avanzar, retroceder y recargar un paso.
- Señales de alerta muestra doce ilustraciones y permite descargar la imagen correspondiente al idioma.
- El cierre reúne consulta y controles en una sola pantalla.

## Validación realizada

El 26 de octubre de 2026 se probó la integración en una copia aislada del proyecto de Beat, basada en `659e57e`. Build y TypeScript pasaron. La portada, la ruta nueva y sus cinco recursos respondieron correctamente. Se comprobó la navegación de la guía en inglés sin perder el idioma en la URL.

La publicación en el dominio quedó pendiente para Flor por falta de acceso de publicación al proyecto de Beat desde la sesión que preparó esta entrega. No se modificó el DNS ni la web pública de Beat.
