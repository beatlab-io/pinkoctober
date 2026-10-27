# Publicar Pink October en la web de Beat

## Sitio actual

Flor confirmó la publicación en `https://beatlab.io/pink-october`, con guion, el 26 de octubre de 2026. Esta es la ruta que hay que conservar al actualizar. Subir archivos a este repositorio no publica por sí solo el sitio de Beat.

## Actualización pendiente: mobile, botón y FAQ

El repositorio incluye la nueva versión con pantallas adaptadas al alto del celular y cuatro preguntas frecuentes bilingües. Está publicada en la guía de referencia: https://dale-play-octubre-rosa-anto.mauvegoose5.chatgpt.site. La actualización en el dominio de Beat debe publicarla Flor desde su proyecto actual.

1. Sincronizá la última versión publicada del proyecto de Beat (`florpvega/beat-studio`). Conservá su archivo `.openai/hosting.json`, permisos y ruta `/pink-october`.
2. Reemplazá sólo `public/pink-october/app.js`, `style.css` y `translations.js` por los archivos correspondientes de `site/` en este repositorio.
3. En el HTML de la ruta existente, actualizá los identificadores de caché existentes a `v=button-faq-20261027` en los recursos para renovar la caché. Conservá los prefijos `/pink-october/`, la ruta y el canonical actuales. `site/index.html` contiene el documento de referencia con los nuevos identificadores de caché.
4. Comprobá la compilación y TypeScript con `npm run build` y `npx tsc --noEmit`.
5. Publicá el proyecto existente de Beat mediante su flujo habitual de ChatGPT Sites. No se necesita modificar portada, layout, permisos ni DNS.

No vuelvas a ejecutar el instalador original en esta actualización: `npm run integrate` crea la ruta alternativa `/pinkoctober` y se detiene si sus carpetas ya existen. Las instrucciones anteriores actualizan la ruta que Flor ya publicó.

## Validación de esta actualización

Fuente de la guía: `1afa40f7310ad86f4b6f8cb48fe9f2608f16393c`.

- Los pasos 0, 1, 2, 3 y 5 entran completos en los tamaños móviles probados, en español e inglés: 320 × 568, 375 × 568, 390 × 664 y 430 × 800 px.
- Las ilustraciones y los espacios se adaptan al alto disponible. Las señales de alerta conservan el scroll.
- El cierre agrega cuatro FAQ plegadas por defecto, con fuentes NHS, Mayo Clinic y NCI. Abrir respuestas habilita el scroll normal: no se recorta contenido ni se bloquea el zoom.
- Los acordeones funcionan con Enter sin cambiar de paso; sólo queda abierta una respuesta interna a la vez.
- JavaScript y revisión de diferencias sin errores.

## Comprobaciones al publicar en Beat

- `https://beatlab.io/` conserva su diseño y contenido.
- `https://beatlab.io/pink-october` carga sus estilos, ilustraciones y botones.
- `?lang=es` y `?lang=en` muestran el idioma esperado y lo conservan al navegar. Sin parámetro se utiliza el idioma principal del navegador.
- En mobile se ve el botón Continuar en los pasos principales sin bajar la pantalla. Se permite scroll al abrir las FAQ o los detalles, en señales, con texto ampliado o en pantallas especialmente bajas.
- Señales muestra doce ilustraciones y Descargar genera la imagen en el idioma correspondiente.
- Las cuatro preguntas frecuentes aparecen debajo de “How often should I have breast screening?” o “¿Cada cuánto hacer los controles?”, antes de volver a empezar.
- El botón inicial mantiene su fondo rosa completo y el texto centrado, tanto en español como en inglés, también en mobile.
