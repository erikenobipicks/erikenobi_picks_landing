# Erikenobi Picks Landing

Versión standalone de la landing comercial, pensada para vivir en un repositorio separado del bot.

## Archivos

- `index.html`: página principal
- `styles.css`: diseño y responsive
- `script.js`: animaciones, contadores y formulario hacia Telegram
- `social-preview.svg`: preview social para compartir la web

## Flujo recomendado

1. Crear un nuevo repositorio en GitHub, por ejemplo `erikenobi-picks-landing`
2. Subir el contenido completo de esta carpeta como raíz del nuevo repo
3. Conectar ese repo a Railway
4. Desplegarlo como static site con cero configuración

Railway indica que el despliegue de sitios estáticos desde GitHub puede hacerse con configuración cero:
[Railway static hosting](https://docs.railway.com/guides/static-hosting)

## Qué ya incluye

- Diseño responsive
- CTA a planes y canal free
- Formulario de captación sin backend
- Apertura de Telegram con mensaje precargado
- Metadatos sociales para compartir mejor la landing

## Cómo probarla localmente

Abre `index.html` directamente en el navegador.

## Cómo publicarla en Railway

1. Entra en Railway y crea un proyecto nuevo
2. Selecciona `Deploy from GitHub repo`
3. Elige el nuevo repo de la landing
4. Railway debería desplegarla automáticamente
5. En `Settings -> Networking`, genera dominio o añade tu dominio propio

Referencias oficiales:

- [Static hosting](https://docs.railway.com/guides/static-hosting)
- [Working with domains](https://docs.railway.com/networking/domains/working-with-domains)

## Qué conviene personalizar antes de publicar

- El dominio final
- El usuario de Telegram si cambia
- Los enlaces de pago si cambian
- Analytics o pixel si quieres medir campañas
- `canonical`, `robots.txt` y `sitemap.xml` cuando tengas dominio definitivo

## Siguiente mejora recomendada

- Añadir GA4 o Meta Pixel
- Añadir testimonios o métricas reales verificadas
- Crear una versión de campaña para anuncios
