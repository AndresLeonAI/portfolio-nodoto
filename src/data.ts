// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Metodología',
    url: '#services',
  },
  {
    label: 'Ingeniería',
    url: '#works',
  },
  {
    label: 'Manifiesto',
    url: '#about-me-section',
  },
  {
    label: 'Casos',
    url: '#testimonials-section',
  },
  {
    label: 'Contacto',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Inicio',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'X',
    url: 'https://x.com/NODOTO',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/NODOTO/',
  },
  {
    label: 'Github',
    url: 'https://github.com/NODOTO',
  },
  {
    label: 'Linkedin',
    url: 'https://www.linkedin.com/in/NODOTO/',
  },
];

const resourceLinks = [
  {
    label: 'Pillarstack',
    url: 'https://www.pillarstack.com',
  },
  {
    label: 'Figma Template',
    url: 'https://www.figma.com/community/file/1328038510191576951/project-starter-template',
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
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};
