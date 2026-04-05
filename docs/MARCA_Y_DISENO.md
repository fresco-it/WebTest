# Marca y diseño

## Paleta

- **Primario:** Gris piedra medio (fondo de la web y menús)
- **Secundario:** Blanco limpio (fondos y bloques de contenido)
- **Fondo:** Blanco y grises muy claros, sensación luminosa y neutra
- **Texto:** Gris muy oscuro / casi negro, alta legibilidad sobre blanco
- **Acento / CTA:** Negro o gris muy oscuro; ocasionalmente tonos tierra / madera aportados por la fotografía

## Tipografías

- **Títulos:** Sans serif limpia, geometría sobria, peso medio / bold (estética contemporánea)
- **Cuerpo:** Sans serif ligera, muy legible, con bastante interlineado

## Tono de comunicación

Tono cercano pero premium, sobrio, poco estridente, centrado en el proyecto y el espacio más que en la marca.

Lenguaje descriptivo y visual, con énfasis en materiales, luz y contexto (Barcelona, Costa Brava, etc.).

## Referencias (URLs, solo inspiración)

- https://batteinterioristas.com/
- https://batteinterioristas.com/estudio/
- Ejemplo de ficha de proyecto: https://batteinterioristas.com/triplex-calella/

## Logo y materiales

**Ubicación del logo / formato:** Logo oficial de marca “BATTE Interioristas” en cabecera y pie sobre fondo neutro. Archivo raster **PNG** de alta calidad para web.

**Implementación actual (sitio Astro):**

- Archivo en repo: `site/public/images/LogoGrande.png` (300×68 px; origen: `LogoGrande.png` del estudio).
- Referencia en código: objeto `logo` en `site/src/site.ts` (ruta, dimensiones intrínsecas, texto alternativo); `BaseLayout.astro` lo usa en header y footer.

Para sustituir el logo: reemplazar el PNG en `public/images/` (manteniendo nombre y tamaños o actualizando `width` / `height` en `site.ts` si cambian las proporciones).

## Redes sociales

Enlaces oficiales (comprobar en producción; URLs centralizadas en `site/src/site.ts`):

- **Instagram:** https://www.instagram.com/batteinterioristas/
- **YouTube:** https://www.youtube.com/@batteinterioristas

**Presencia en la web:** iconos + texto en cabecera (junto al menú), bloque “Redes” en pie y sección en `/contacto`.

**Restricciones (logo):**

- No usar colores saturados o chillones que rompan la estética neutra.
- Márgenes generosos alrededor del logo y mucho espacio en blanco.
- Evitar sombras, degradados o efectos 3D; mantenerlo plano y sobrio.
