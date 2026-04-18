import { useHead, useSeoMeta } from '@unhead/vue';

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

const SITE_URL = 'https://nodoto.agency';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-pic.png`;
const SITE_NAME = 'NODOTO Agency';

export function useSeo(config: SeoConfig) {
  const fullTitle = `${config.title} | ${SITE_NAME}`;
  const fullUrl = `${SITE_URL}${config.path}`;
  const image = config.image ?? DEFAULT_OG_IMAGE;

  useSeoMeta({
    title: fullTitle,
    description: config.description,
    robots: config.noindex ? 'noindex, nofollow' : 'index, follow',

    ogTitle: fullTitle,
    ogDescription: config.description,
    ogImage: image,
    ogUrl: fullUrl,
    ogType: config.type ?? 'website',
    ogSiteName: SITE_NAME,
    ogLocale: 'es_ES',

    twitterCard: 'summary_large_image',
    twitterTitle: fullTitle,
    twitterDescription: config.description,
    twitterImage: image,
  });

  useHead({
    link: [{ rel: 'canonical', href: fullUrl }],
    htmlAttrs: { lang: 'es' },
  });
}

export function useJsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  const payload = Array.isArray(data) ? data : [data];
  useHead({
    script: payload.map((schema) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(schema),
    })),
  });
}

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: 'NODOTO',
  alternateName: ['NODOTO Agency', 'Nodoto Design'],
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image: DEFAULT_OG_IMAGE,
  description:
    'Agencia de Alta Costura Digital. Arquitectura de comportamiento humano y máquinas de conversión High-Ticket.',
  priceRange: '$$$$',
  areaServed: { '@type': 'Place', name: 'Worldwide' },
  serviceType: ['Diseño Web Premium', 'Neuro-Diseño', 'Optimización CRO', 'Arquitectura Digital'],
  sameAs: ['https://github.com/NODOTO'],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contacto@nodoto.agency',
    contactType: 'sales',
    availableLanguage: ['Spanish', 'English'],
  },
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'es-ES',
};

export { SITE_URL, DEFAULT_OG_IMAGE, SITE_NAME };
