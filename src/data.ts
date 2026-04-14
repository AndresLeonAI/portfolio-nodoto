// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav — High-ticket conversion links (CEO-friendly)
const navLinks = [
  {
    label: 'El Método',
    url: '#services',
  },
  {
    label: 'Resultados',
    url: '#testimonials-section',
  },
];

const navbarLinks = [
  {
    label: 'Inicio',
    url: '/',
  },
  {
    label: 'El Método',
    url: '#services',
  },
  {
    label: 'Proceso',
    url: '#work-process-section',
  },
  {
    label: 'Resultados',
    url: '#testimonials-section',
  },
  {
    label: 'Preguntas',
    url: '#faq-section',
  },
];

// Social — Instagram only. No distractions.
const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/NODOTO/',
  },
];

const heroText =
  'El internet sufre de obesidad visual. Nosotros esculpimos máquinas de conversión en blanco y negro.';

const locationPlace = `04°39'00.0"N 74°03'00.0"W`;
const locationCountry = 'Bogotá, Colombia';

// cal.com
const dataCalNamespace = '30min';
const dataCalLink = 'brhoom/30min';
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};
