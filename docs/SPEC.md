# Especificación del sitio web

## 1. Contexto

- **Empresa:**
  Batte Interioristas

- **Ubicación / zona de actuación:**
  Ubicada en Barcelona: Ramón Miquel i Planas, 17  
  Barcelona 08034  
  T +34 932 098 112

  Actuación: Barcelona y Catalunya, aunque también está disponible fuera de su ámbito habitual.

- **Qué ofrecéis** (interiorismo, reformas integrales, etc.):
  BATTE Interioristas es un estudio de arquitectura de interiores y decoración con sede en Barcelona, creado por Helena Llorente y Cristina Batlles. Se especializan en proyectos integrales residenciales y comerciales, combinando funcionalidad, estética y personalización para transformar espacios en ambientes únicos con un enfoque en diseño mediterráneo.

- **Público objetivo:**
  Residenciales y comerciales.

## 2. Objetivos (ordenados por prioridad)

Diseñar viviendas y locales que reflejen la personalidad y necesidades de cada cliente, siendo funcionales y duraderos, no solo estéticamente atractivos.

Ofrecer una gestión integral del proyecto (asesoramiento, diseño, dirección de obra) con alta calidad en la ejecución y en los detalles.

Lograr un equilibrio entre modernidad y tradición, respetando la arquitectura original y el carácter del inmueble mientras se actualiza.

Crear hogares prácticos, acogedores y visualmente impactantes, que funcionen para la vida real de las familias.

Utilizar el diseño como herramienta para transformar y organizar el entorno, aportando valor social y estético.

### Prioridad web: portfolio y fichas de proyecto

Las rutas `/proyectos` y `/proyectos/[slug]` son **requisitos centrales** del sitio: deben sentirse **claras, rápidas y amigables** en cualquier dispositivo.

- **Experiencia de uso:** transición obvia entre listado y ficha; **enfoque móvil primero**; jerarquía visual que destaque la fotografía sin perder legibilidad en títulos y metadatos (ubicación, tipología, etc.).
- **Imágenes:** formatos y tamaños adecuados para web, **carga progresiva** (p. ej. lazy loading donde proceda), textos **`alt` descriptivos** en portadas y en galería. Las fichas usan **lightbox** para ampliar y recorrer la galería: apertura desde miniatura o imagen en contexto, cierre con tecla Escape y controles claros; navegación entre fotos **con teclado** (flechas o equivalente) y **trampa de foco** razonable dentro del modal, alineado con accesibilidad de este documento.  
  **Librería concreta** (PhotoSwipe, GLightbox, implementación propia, etc.): **pendiente** de elegir en implementación; debe cumplir los requisitos anteriores y documentarse en el README o en `docs/` al decidir.
- **Gestión de contenido:** el flujo para **dar de alta o editar** un proyecto debe quedar definido y ser mantenible por el estudio con poca fricción (p. ej. **Content Collections** en Markdown/MDX u otro mecanismo documentado en el repo o en `docs/`).

El detalle de bloques y copy sigue en [`CONTENIDO_PAGINAS.md`](./CONTENIDO_PAGINAS.md).

- **Acción principal deseada** (formulario / WhatsApp / llamada / visita):
  Visita y formulario / WhatsApp.

## 3. Mapa del sitio (v1)

Detalle y checklist en [`MAPA_SITIO.md`](./MAPA_SITIO.md).

## 4. Stack

- **Framework:** Astro
- **Estilos:** Tailwind
- **Hosting:** DigitalOcean (sitio estático y/o App Platform según despliegue final)
- **Logo:** PNG oficial del estudio (`LogoGrande.png`) en `site/public/images/`; rutas y metadatos en `site/src/site.ts` (`logo`). Cabecera y pie del layout. Detalle en [`MARCA_Y_DISENO.md`](./MARCA_Y_DISENO.md).

- **Formulario de contacto (implementación):**  
  El front será un formulario HTML con validación en cliente. El envío debe hacerse sin exponer secretos en el navegador. Opciones aceptables en DO:
  - **A)** Sitio estático + servicio externo (Formspree, Web3Forms, Resend con dominio verificado, etc.) vía `action` o fetch a su API.
  - **B)** App Platform (o droplet ligero) con endpoint propio que envíe correo al estudio.

  **Decisión:** opción **A** (sitio estático + servicio externo).

  **Proveedor de envío:** Resend (correo transaccional).

  **Nota técnica:** la API key de Resend no puede ir en el cliente. En la práctica hace falta un **endpoint de servidor** (p. ej. ruta API de Astro en modo SSR/adaptador, o una función mínima en App Platform) que reciba el POST del formulario y llame a Resend. El front sigue siendo estático salvo esa pieza.

- **Campos del formulario:**
  - Nombre  
  - Email  
  - Teléfono (opcional)  
  - Tipo de proyecto  
  - Mensaje  
  - Aceptación de política de privacidad (obligatorio)

### Idiomas y alcance lingüístico

- **v1:** Contenido y UI en **español** únicamente.
- **Post-v1:** Catalán e inglés (rutas tipo `/ca/`, `/en/`, o equivalente; ver [`MAPA_SITIO.md`](./MAPA_SITIO.md)).

## 5. Fuera de alcance (v1)

- Área de cliente / intranet.
- Blog o noticias periódicas tipo revista del estudio (salvo que se reabra el alcance). **No aplica** al listado curado [`/prensa`](./MAPA_SITIO.md), que son fichas estáticas en Markdown.
- Multi-idioma (catalán / inglés) en la primera entrega.
- CRM integrado; el registro de leads en v1 puede ser email al estudio + seguimiento manual (p. ej. hoja de cálculo).
- Presupuestador online u otras herramientas interactivas complejas.

## 6. Criterios de hecho

**Performance / Lighthouse:**  
Objetivo móvil ≥ 85 en Performance y ≥ 90 en Best Practices (Lighthouse en modo móvil, conexión simulada “Fast 3G”).

**Accesibilidad:**  
Nivel AA de WCAG 2.1 como referencia, con objetivo ≥ 90 en el apartado Accessibility de Lighthouse (contraste, textos alternativos, foco visible, jerarquía correcta de encabezados).

**Portfolio / proyectos:**  
Cumplir la sección *Prioridad web: portfolio y fichas de proyecto* (apartado 2). En la práctica:

- Listado y fichas **no degradan** de forma relevante el objetivo global de Performance (imágenes optimizadas; evitar cargar toda la galería por encima del pliegue sin necesidad).
- **Navegación de retorno** clara desde la ficha al listado (enlace explícito, migas u patrón equivalente).
- La **galería en lightbox** mantiene **foco y teclado** utilizables, cierre accesible y `alt` coherentes en las imágenes mostradas (incluido en vista ampliada si el componente lo admite).

**Formulario / leads:**  
Formulario principal en página de contacto y, si se acuerda, en algunas fichas de proyecto:

- Envío correcto, mensaje de confirmación visible y claro.
- Validación básica (email, mensaje obligatorio; teléfono opcional).
- Entrega al estudio por email; registro complementario acordado (p. ej. hoja de cálculo / inbox etiquetado) sin CRM en v1.

## 7. Documentos relacionados

| Documento | Contenido |
|-----------|-----------|
| [`MAPA_SITIO.md`](./MAPA_SITIO.md) | Rutas, URLs, inclusiones v1 |
| [`CONTENIDO_PAGINAS.md`](./CONTENIDO_PAGINAS.md) | H1, bloques, textos, imágenes por página |
| [`MARCA_Y_DISENO.md`](./MARCA_Y_DISENO.md) | Paleta, tipografías, tono, referencias |
| [`SEO_LEGAL.md`](./SEO_LEGAL.md) | Metas, SEO local, páginas legales |
| [`CURSOR_PROMPTS.md`](./CURSOR_PROMPTS.md) | Prompts reutilizables para Cursor |
