# Batte Interioristas — web (spec + Astro)

- **`docs/`** — Especificación (SPEC, contenido por página, marca, SEO, mapa del sitio).
- **`site/`** — Proyecto **Astro 6** + Tailwind.

## Desarrollo local

```bash
cd site
npm install
npm run dev
```

Build de producción:

```bash
cd site
npm run build
```

La salida queda en `site/dist/` (no se versiona).

## Despliegue (DigitalOcean App Platform)

- **Source / root directory del componente:** `site`
- **Build command:** `npm ci && npm run build`
- **Output directory:** `dist`

Conecta el repo a GitHub y usa la rama principal. El formulario de contacto requiere endpoint aparte (ver `docs/SPEC.md`).

## GitHub

Tras clonar en otra máquina:

```bash
git clone <url-del-repo>
cd webtest
cd site && npm install && npm run dev
```
