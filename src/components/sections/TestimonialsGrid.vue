<template>
  <section id="testimonials-section" class="gpu-isolate relative pt-32 lg:pt-48 pb-section overflow-hidden bg-[#E7DBCB]">
    <div class="container relative z-10 mx-auto px-gutter">
      <div
        ref="headerRef"
        class="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-14"
      >
        <div class="flex justify-center">
          <span
            class="border border-flax-smoke-950/20 text-flax-smoke-900 py-1.5 px-5 rounded-lg text-xs font-medium tracking-[0.2em] uppercase"
          >
            Testimonios
          </span>
        </div>
        <h2
          ref="titleRef"
          class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-6 text-center text-flax-smoke-950"
          v-html="titleHtml"
        >
        </h2>
        <p class="text-center mt-5 text-flax-smoke-600 max-w-[36ch] leading-relaxed" v-html="descHtml">
        </p>
      </div>

      <div
        class="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden"
      >
        <TestimonialsColumn :testimonials="firstColumn" :duration="18" />
        <TestimonialsColumn
          :testimonials="secondColumn"
          class-name="hidden md:block"
          :duration="22"
        />
        <TestimonialsColumn
          :testimonials="thirdColumn"
          class-name="hidden lg:block"
          :duration="20"
        />
      </div>

      <!-- INJECTION: Conversion CTA (Dark Pill) -->
      <div class="mt-12 sm:mt-16 flex justify-center w-full relative z-20">
        <button
          @click="$router.push('/discovery')"
          class="group bg-[#0B0B0A] text-flax-smoke-50 rounded-full px-8 py-4 font-semibold uppercase tracking-widest text-[0.75rem] hover:scale-[1.02] transition-all duration-500 shadow-2xl border border-flax-smoke-900/20 hover:border-flax-smoke-500/30 flex items-center gap-3"
        >
          <span>Únete al Círculo Privado</span>
          <span class="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, onBeforeMount, onMounted } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import TestimonialsColumn from '@/components/ui/TestimonialsColumn.vue';
  import { useGsap } from '@/composables/useGsap';
  import { textSplitterIntoChar } from '@/functions';

  gsap.registerPlugin(ScrollTrigger);

  const headerRef = ref<HTMLElement | null>(null);
  const titleHtml = ref('');
  const descHtml = ref('');
  const { ctx, initCtx } = useGsap();

  onBeforeMount(() => {
    titleHtml.value = textSplitterIntoChar('Lo que dicen nuestros clientes', true, false);
    descHtml.value = textSplitterIntoChar('Negocios reales de Bogotá que ya convierten más clientes con Nodoto.', true, false);
  });

  const testimonials = [
    {
      text: 'Teníamos el mejor bandeja paisa de Bogotá pero nadie nos encontraba en internet. Nodoto nos hizo un sitio que ahora aparece primero en Google y las reservas no paran. En La Puerta Falsa llevamos 100 años de tradición, y por fin el mundo digital nos hace justicia.',
      image: 'https://randomuser.me/api/portraits/men/41.jpg',
      name: 'Carlos Martínez',
      role: 'Administrador, La Puerta Falsa',
    },
    {
      text: 'En Caravaggio manejamos un volumen alto de clientes y necesitábamos que el sitio web transmitiera la misma elegancia del restaurante. Nodoto lo logró perfecto. Las reservas por la web subieron un 70% desde el lanzamiento.',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      name: 'Adriana Forero',
      role: 'Gerente, Restaurante Caravaggio',
    },
    {
      text: 'Nosotros en Criterión somos exigentes con cada detalle, desde el menú hasta la experiencia del cliente. Nodoto entendió eso y entregó un sitio web que está a la altura de nuestra propuesta gastronómica. Excelente trabajo.',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      name: 'Jorge Rausch',
      role: 'Chef Propietario, Criterión',
    },
    {
      text: 'Como firma de abogados en Bogotá, la credibilidad lo es todo. Nodoto nos construyó una presencia digital seria y profesional que nos ha traído clientes de alto perfil que antes no llegaban por referido sino por Google.',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      name: 'Hernando Parra',
      role: 'Socio Principal, Parra & Asociados',
    },
    {
      text: 'Tenía dudas de invertir en un sitio web para mi consultorio jurídico, pero Nodoto me mostró con números cómo se traducía en clientes. Hoy el 40% de mis casos nuevos llegan por la página. Fue la mejor decisión.',
      image: 'https://randomuser.me/api/portraits/women/48.jpg',
      name: 'Dra. Marcela Suárez',
      role: 'Abogada Penalista, Consultorio Suárez',
    },
    {
      text: 'En nuestro estudio de arquitectura el portafolio es todo. Nodoto diseñó un sitio que presenta nuestros proyectos de una forma impresionante. Hemos cerrado tres contratos grandes directamente por clientes que llegaron desde la web.',
      image: 'https://randomuser.me/api/portraits/men/58.jpg',
      name: 'Felipe Uribe',
      role: 'Director, Uribe Arquitectos',
    },
    {
      text: 'Llevamos 15 años haciendo proyectos en Bogotá y siempre conseguimos clientes por voz a voz. Nodoto nos abrió un canal nuevo completamente. Ahora recibimos solicitudes de empresas que nos encontraron en internet y nunca habríamos alcanzado de otra forma.',
      image: 'https://randomuser.me/api/portraits/women/61.jpg',
      name: 'Sandra Ospina',
      role: 'Socia, Ospina & Rincón Arquitectura',
    },
    {
      text: 'Como asesor financiero independiente en Bogotá, competir con los bancos grandes parecía imposible. Nodoto me creó un sitio que transmite confianza y expertise. Mis agendamientos de consulta gratuita se triplicaron en el primer mes.',
      image: 'https://randomuser.me/api/portraits/men/35.jpg',
      name: 'Mauricio Leal',
      role: 'Asesor Financiero, ML Inversiones',
    },
    {
      text: 'En Skandia sabemos que la educación financiera mueve a los clientes a tomar decisiones. Nodoto nos ayudó a construir una landing que convierte ese interés en citas reales. Los resultados superaron nuestras métricas internas.',
      image: 'https://randomuser.me/api/portraits/women/19.jpg',
      name: 'Paola Jiménez',
      role: 'Directora Comercial, Skandia Bogotá',
    },
    {
      text: 'Mi clínica dental en el norte de Bogotá tenía pacientes de referido pero el sitio web era casi invisible. Nodoto lo transformó completamente. Hoy agendamos entre 15 y 20 pacientes nuevos por semana solo por búsquedas en Google.',
      image: 'https://randomuser.me/api/portraits/men/77.jpg',
      name: 'Dr. Camilo Torres',
      role: 'Odontólogo Propietario, Sonrisa Norte',
    },
    {
      text: 'En nuestra clínica ofrecemos servicios de ortodoncia e implantes de alta gama. Necesitábamos un sitio que proyectara esa categoría. Nodoto lo entendió desde el primer brief y entregó algo que realmente nos enorgullece mostrar.',
      image: 'https://randomuser.me/api/portraits/women/82.jpg',
      name: 'Dra. Luciana Ríos',
      role: 'Directora, Clínica Dental Ríos',
    },
    {
      text: 'El centro estético que manejo en Chapinero competía con muchísimas opciones. Gracias a Nodoto, nuestro sitio web ahora destaca, transmite lujo y genera citas desde el primer día. Recuperamos la inversión en tres semanas.',
      image: 'https://randomuser.me/api/portraits/women/90.jpg',
      name: 'Valentina Moreno',
      role: 'Propietaria, Éclat Centro Estético',
    },
  ];

  const firstColumn = testimonials.slice(0, 4);
  const secondColumn = testimonials.slice(4, 8);
  const thirdColumn = testimonials.slice(8, 12);

  onMounted(() => {
    if (!headerRef.value) return;
    
    initCtx(ref(headerRef.value));

    ctx.value!.add(() => {
      // 1. Label tag animation
      const labelTag = headerRef.value!.querySelector('span.border');
      if (labelTag) {
        gsap.from(labelTag, {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: headerRef.value,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // 2. Title and desc text animation
      const textElements = headerRef.value!.querySelectorAll('.letters');
      if (textElements.length > 0) {
        gsap.set(textElements, { y: '120%', rotateX: -20, opacity: 0, willChange: 'transform, opacity' });
        gsap.to(textElements, {
          y: '0%',
          rotateX: 0,
          opacity: 1,
          stagger: 0.012,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: headerRef.value,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        });
      }
    });
  });
</script>
