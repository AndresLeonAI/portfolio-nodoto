<template>
  <main class="relative min-h-full">
    <Hero />
    <div class="relative w-full z-10 bg-[#0B0B0A] rounded-b-3xl">
      <div class="sticky bottom-0 w-full overflow-hidden">
        <div id="authority-scale-target" class="w-full relative origin-bottom rounded-[2.5rem] border-[0.5px] border-white/10 overflow-hidden will-change-transform">
          <AuthorityBridge />
          <!-- SOTD Dark Overlay (Performance Safe) -->
          <div id="authority-dark-overlay" class="absolute inset-0 bg-[#0B0B0A] opacity-0 pointer-events-none z-50"></div>
        </div>
      </div>
      <TheDiagnosis />
    </div>

    <div
      class="text-flax-smoke-200 relative rounded-t-3xl bg-[#0B0B0A] py-[5%]"
    >
      <Services />
      <Marquee />
      <CinematicHero />
      <Works />
    </div>

    <aboutMe />
    <TestimonialsGrid />
    <FAQS />
    <Contact />
  </main>

  <Footer />
</template>

<script setup lang="ts">
  import { onMounted, nextTick } from 'vue';
  import {
    Hero,
    Services,
    Works,
    aboutMe,
    Contact,
    TestimonialsGrid,
    AuthorityBridge,
    TheDiagnosis,
    FAQS,
  } from '@/components/sections';
  import CinematicHero from '@/components/ui/CinematicPhoneSection.vue';
  import {
    Marquee,
    Footer,
  } from '@/components/design';
  import { animateHeroNav, isFirstLoad } from '@/animations';
  import {
    useSeo,
    useJsonLd,
    ORGANIZATION_SCHEMA,
    WEBSITE_SCHEMA,
    SITE_URL,
  } from '@/composables/useSeo';

  useSeo({
    title: 'Alta Costura Digital — Diseño Web Premium para Marcas High-Ticket',
    description:
      'NODOTO Agency: arquitectura digital y máquinas de conversión para marcas premium. Neuro-diseño + ingeniería CRO con estética luxury y fricción cero.',
    path: '/',
  });

  const FAQ_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Usan plantillas pre-diseñadas para acelerar el desarrollo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutamente no. Cada ecosistema se forja desde cero. Construimos arquitecturas ultra-personalizadas basadas en la psicología de tu cliente. Las plantillas son para aficionados; nosotros hacemos Alta Costura Digital.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo garantizan que un diseño tan estético realmente genere ventas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El diseño sin estrategia es solo decoración. Nuestra metodología fusiona una estética premium con verdadera ingeniería de conversión. Diseccionamos tu nicho para crear embudos que guían al usuario hacia la compra sin ningún tipo de fricción.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Las animaciones complejas afectarán la velocidad de carga de mi web?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Todo lo contrario. Nuestro stack tecnológico de élite está optimizado para un rendimiento implacable. Obtienes animaciones fluidas a 120 FPS sin sacrificar milisegundos de carga. Google y tus usuarios lo amarán por igual.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo es la dinámica de trabajo con ustedes frente a otras agencias?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No actuamos como simples proveedores, operamos como tu socio estratégico. Mantenemos una comunicación directa y sin intermediarios, asegurando que nuestra visión técnica se alinee perfectamente con tus objetivos de facturación.',
        },
      },
    ],
  };

  const SERVICE_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Diseño Web Premium High-Ticket',
    provider: { '@id': `${SITE_URL}/#organization` },
    serviceType: 'Web Design & Conversion Engineering',
    areaServed: 'Worldwide',
    description:
      'Sistemas web Alta Costura Digital: estética premium + ingeniería CRO. Neuro-diseño y arquitectura de comportamiento humano para marcas High-Ticket.',
  };

  useJsonLd([ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, SERVICE_SCHEMA, FAQ_SCHEMA]);

  onMounted(async () => {
    // On first load, LoadingScreen.vue handles the hero entrance animation.
    // On subsequent route transitions (e.g., /discovery → /), we must
    // trigger animateHeroNav() ourselves since LoadingScreen won't re-run.
    if (!isFirstLoad.value) {
      await nextTick();
      animateHeroNav();
    }
  });
</script>
