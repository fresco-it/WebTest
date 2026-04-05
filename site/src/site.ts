/** Logo oficial en `public/images/` (origen: LogoGrande.png del estudio). */
export const logo = {
  src: '/images/LogoGrande.png',
  width: 300,
  height: 68,
  alt: 'BATTE Interioristas',
} as const;

/**
 * URLs de redes: comprobar que coinciden con los perfiles reales antes de producción.
 * Dominio batteinterioristas.com → @batteinterioristas en Instagram es el patrón habitual.
 */
export const social = {
  instagram: 'https://www.instagram.com/batteinterioristas/',
  youtube: 'https://www.youtube.com/@batteinterioristas',
} as const;
