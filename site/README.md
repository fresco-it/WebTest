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
