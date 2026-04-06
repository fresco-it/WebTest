import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      location: z.string(),
      year: z.number().optional(),
      typology: z.enum(['residencial', 'comercial', 'mixto']).optional(),
      /** Ruta relativa al .md, p. ej. ../../assets/projects/mi-slug/cover.jpg */
      cover: image(),
      gallery: z.array(image()).optional(),
    }),
});

/** Apariciones en medios impresos o digitales (no es blog). */
const prensa = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/prensa' }),
  schema: z.object({
    title: z.string(),
    media: z.string(),
    channel: z.enum(['online', 'offline']),
    year: z.number(),
    /** Texto libre para mostrar junto al año, p. ej. «Marzo» o «Nº 42». */
    dateNote: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

export const collections = { proyectos, prensa };
