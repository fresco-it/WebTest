# Sitio Astro — BATTE Interioristas

Especificación y contexto del negocio: carpeta `../docs/` del monorepo.

## Comandos

| Comando | Acción |
|--------|--------|
| `npm install` | Dependencias |
| `npm run dev` | Desarrollo en `localhost:4321` |
| `npm run build` | Genera `dist/` (imágenes optimizadas en `_astro/`) |
| `npm run preview` | Vista previa de producción |

## Imágenes de proyectos

- Carpeta por slug: **`src/assets/projects/<slug>/`** (portada `cover.*` + imágenes de galería).
- Referencias en **`src/content/proyectos/<slug>.md`** con el helper `image()` (rutas relativas tipo `../../assets/projects/mi-slug/cover.jpg`).
- Listados y fichas usan **`astro:assets`** (`<Image>`). La ficha abre la galería con **PhotoSwipe** (`photoswipe`).

Las fotos de muestra actuales pueden ser sustituidas por material propio del estudio.

## Formulario de contacto (Resend)

El formulario de `src/pages/contacto.astro` envía un `POST` a `src/pages/api/contact.ts`.

1. Copia `.env.example` a `.env`.
2. Configura:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL` (dominio verificado en Resend)
   - `CONTACT_TO_EMAIL` (destino final; opcional, por defecto `info@batteinterioristas.com`)
3. En desarrollo/producción, usa salida de servidor (`astro.config.mjs` ya está en `output: 'server'` con adaptador Node).
