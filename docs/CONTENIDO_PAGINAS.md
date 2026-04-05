# Contenido por página

Duplica y rellena un bloque por cada ruta activa en [`MAPA_SITIO.md`](./MAPA_SITIO.md).

---

## `/` — Inicio


- **H1 (texto en la web):** BATTE Interioristas  
- **Referencia web actual:** [batteinterioristas.com](https://batteinterioristas.com/)

- **Bloques** (orden):  
  1. Hero / presentación breve del estudio.  
  2. Proyectos destacados.  
  3. Enfoque del estudio.  
  4. Tipología de proyectos.  
  5. CTA a contacto.

- **Textos** (borrador):  
  - **Hero:** “Estudio de interiorismo en Barcelona especializado en viviendas, espacios comerciales y proyectos integrales con una mirada contemporánea, funcional y atemporal.”   
  - **Intro:** “BATTE Interioristas desarrolla proyectos de reforma, interiorismo y decoración cuidando la arquitectura existente, la luz, los materiales y la forma de vivir cada espacio.”   
  - **Bloque proyectos:** “Una selección de proyectos residenciales y comerciales en Barcelona, Maresme, Girona y La Cerdanya.” [batteinterioristas](https://batteinterioristas.com/)
  - **Bloque enfoque:** “Cada proyecto se trabaja de forma personalizada, combinando diseño, gestión y dirección de obra para acompañar al cliente durante todo el proceso.”   
  - **CTA:** “Si tienes un espacio que transformar, podemos ayudarte a darle forma.” 

- **Imágenes / recursos:**  
  - Portadas de proyectos ya existentes en la home, por ejemplo Dúplex en Sarrià-Sant Gervasi, Triplex en Calella de Palafrugell, Casa Sant Andreu, Oficinas Calle Tusset o Panadería Oriol Balaguer. [batteinterioristas](https://batteinterioristas.com/)
  - Idealmente, una imagen hero más limpia y luego grid de proyectos. [batteinterioristas](https://batteinterioristas.com/)

***

## `/servicios`

La web actual no tiene una página visible de servicios en la navegación principal; el contenido de servicios se deduce del texto del estudio y de los tipos de proyectos publicados. [batteinterioristas](https://batteinterioristas.com/)

- **H1:**  
  Servicios de interiorismo y reforma integral 

- **Bloques:**  
  1. Introducción de servicios.  
  2. Proyectos residenciales.  
  3. Proyectos comerciales y oficinas.  
  4. Gestión y dirección de obra.  
  5. Asesoramiento en materiales, iluminación y mobiliario.  
  6. CTA final. 

- **Textos:**  
  - **Intro:** “Ofrecemos un servicio integral de interiorismo, desde la conceptualización del espacio hasta la gestión y dirección de la obra.”   
  - **Residencial:** “Reformas integrales, redistribución, actualización de viviendas y proyectos de decoración adaptados a cada forma de vivir.”   
  - **Comercial / oficinas:** “Diseño de espacios corporativos y comerciales con atención a la funcionalidad, la identidad del lugar y la experiencia de uso.” [batteinterioristas](https://batteinterioristas.com/)
  - **Gestión:** “Nuestro trabajo no se limita al diseño: acompañamos el proyecto con coordinación, seguimiento y colaboración con otros profesionales técnicos.”   
  - **CTA:** “Cuéntanos tu proyecto y estudiaremos la mejor forma de desarrollarlo.” 

- **Imágenes:**  
  - Viviendas reformadas, detalles de materiales, oficinas y retail ya presentes en los proyectos publicados. [batteinterioristas](https://batteinterioristas.com/)
  - Recomendable mezclar 70% residencial y 30% comercial para representar mejor la cartera visible. [batteinterioristas](https://batteinterioristas.com/)

***

## `/proyectos`

> **Prioridad UX:** el portfolio es requisito central del sitio. Criterios de experiencia, imágenes, accesibilidad y gestión de contenido: `docs/SPEC.md` (apartado 2, *Prioridad web: portfolio y fichas de proyecto*; y apartado 6, *Portfolio / proyectos*).

- **H1:**  
  Proyectos [batteinterioristas](https://batteinterioristas.com/)

- **Bloques:**  
  1. Introducción corta.  
  2. Grid de proyectos.  
  3. Posible filtro por tipología o ubicación.  
  4. CTA a contacto. [batteinterioristas](https://batteinterioristas.com/)

- **Textos:**  
  - **Intro:** “Una selección de proyectos de interiorismo, reforma y decoración desarrollados por BATTE Interioristas.” [batteinterioristas](https://batteinterioristas.com/)
  - **Apoyo:** “Viviendas, oficinas y espacios comerciales en Barcelona y otros entornos próximos, resueltos desde una estética armónica, contemporánea y funcional.” [batteinterioristas](https://batteinterioristas.com/)
  - **CTA opcional:** “¿Buscas un estudio para tu reforma o proyecto de interiorismo? Hablemos.” 

- **Imágenes:**  
  - Grid con las imágenes de portada actuales de cada proyecto. [batteinterioristas](https://batteinterioristas.com/)
  - Proyectos visibles: Dúplex en Sarrià-Sant Gervasi, Triplex en Calella de Palafrugell, Apartamento C. Diputación, Casa Sant Andreu, Llacuna, Casa unifamiliar en Cabrils, Casa de montaña en La Cerdanya, Oficinas Calle Tusset, Panadería Oriol Balaguer, entre otros. [batteinterioristas](https://batteinterioristas.com/)

***

## `/proyectos/[slug]` — Ficha proyecto

Misma prioridad UX que el listado; ver nota bajo `/proyectos` y `docs/SPEC.md`.

- **Campos:**  
  título, ubicación, año, descripción, galería, antes/después (sí/no) 

- **Plantilla de contenido:**  
  - **Título:** nombre del proyecto.   
  - **Ubicación:** barrio / ciudad / zona.   
  - **Año:** campo editable, aunque en la web actual no siempre aparece visible en el texto.   
  - **Descripción corta inicial:** resumen del encargo y contexto del proyecto.   
  - **Cuerpo de texto:** problema inicial, objetivo del proyecto, intervención realizada, criterios de distribución, materiales, iluminación y resultado.   
  - **Galería:** serie amplia de imágenes; visualización ampliada con **lightbox** (ver `docs/SPEC.md`, prioridad portfolio). Las fichas actuales muestran galerías extensas en scroll; en la nueva web el recorrido principal en grande será vía lightbox.   
  - **Antes/después:** no se aprecia como bloque visible estándar en los ejemplos revisados, así que sería **opcional / no por defecto**. 

  **Borrador de plantilla:**  
  “\[Título del proyecto\] es una intervención ubicada en \[ubicación\]. El encargo consistió en \[tipo de reforma o actuación\], con el objetivo de \[mejora funcional / estética\]. El proyecto se planteó desde una mirada contemporánea y atemporal, cuidando la distribución, la luz y los materiales para conseguir un espacio más habitable, armónico y coherente con la arquitectura existente.” 

***

## `/sobre-nosotros`

Corresponde a la actual página `/estudio/`. 

- **H1:**  
  Estudio de interiorismo en Barcelona 

- **Bloques:**  
  1. Presentación del estudio.  
  2. Filosofía de trabajo.  
  3. Equipo fundador.  
  4. Equipo colaborador.  
  5. CTA a contacto. 

- **Textos:**  
  - **Presentación:** “BATTE Interioristas es un estudio creado por las interioristas Helena Llorente y Cristina Batlles.”   
  - **Filosofía:** “El estudio nace de la voluntad de poner al servicio del cliente una forma de entender el interiorismo basada en la pasión por el espacio, la buena gestión del proyecto y la atención al detalle.”   
  - **Enfoque:** “Cada proyecto se aborda como un nuevo reto, buscando espacios armónicos y contemporáneos que respondan a la particularidad de cada cliente, respetando la arquitectura del inmueble y su pasado sin perder de vista el futuro.”   
  - **Helena Llorente:** interiorista formada en ELISAVA, con experiencia en interiorismo retail para Mango y en rehabilitación de viviendas y locales comerciales, coordinando procesos completos de obra.   
  - **Cristina Batlles:** licenciada en ADE con postgrado en interiorismo en Elisava, con experiencia en gestión de empresa y obras antes de orientar su trayectoria al proceso creativo de los proyectos.   
  - **Equipo colaborador:** Helena Llorente, Cristina Batlles, Sandra López M., Clara Muñoz, Gabriel Coll y Alfonso Martínez. 

- **Imágenes:**  
  - La página actual es principalmente textual.   
  - Para mejorarla, convendría añadir 1 retrato del equipo o 1 imagen del estudio, además de 1–2 imágenes de detalles de proyectos que refuercen la filosofía de marca. 
  - **Prensa:** enlace a `/prensa` (párrafo breve + CTA).

***

## `/prensa` — Prensa y medios

Listado de **apariciones y publicaciones** donde BATTE Interioristas aparece o es protagonista, en medios **impresos / offline** y **digitales / online**. No sustituye a un blog: cada ítem es una ficha curada.

- **H1:** Prensa y medios  
- **Bloques:**  
  1. Intro breve (qué incluye la página).  
  2. Sección **Medios impresos y offline** (revistas, libros, prensa escrita).  
  3. Sección **Medios digitales y online** (artículos, entrevistas, reportajes web con enlace cuando exista).  

- **Contenido técnico (Astro):** colección `prensa` en `site/src/content/prensa/*.md`. Frontmatter obligatorio:

| Campo | Descripción |
|--------|-------------|
| `title` | Título del reportaje o pieza |
| `media` | Nombre del medio (revista, portal, etc.) |
| `channel` | `offline` o `online` |
| `year` | Año (número, para ordenación) |
| `dateNote` | Opcional: mes, número de revista, etc. |
| `url` | Opcional; URL pública si es online |

- **Cuerpo Markdown:** texto opcional (notas, contexto).  

- **Navegación:** enlace en cabecera («Prensa») y desde `/sobre-nosotros`.

***

## `/contacto`

- **H1:**  
  Contacto 

- **Datos a mostrar** (teléfono, email, mapa, horario, dirección):  
  - **Dirección:** Ramón Miquel i Planas, 17, Barcelona 08034.   
  - **Teléfono:** +34 932 098 112.   
  - **Email general:** info@batteinterioristas.com.   
  - **Email Helena Llorente:** helena@batteinterioristas.com.   
  - **Email Cristina Batlles:** cristina@batteinterioristas.com.   
  - **Instagram y YouTube:** enlaces en cabecera, pie y bloque “Redes sociales” en contacto (URLs en `site/src/site.ts` y `docs/MARCA_Y_DISENO.md`).   
  - **Houzz / ficha externa:** aparece un enlace a perfil externo relacionado con interiorismo.   
  - **Mapa:** no visible en el contenido capturado; sería recomendable incorporarlo en la nueva versión.   
  - **Horario:** no visible actualmente. 

- **Campos del formulario:**  
  Como mejora para la nueva web:  
  - Nombre  
  - Email  
  - Teléfono opcional  
  - Tipo de proyecto  
  - Mensaje  
  - Aceptación de política de privacidad 

