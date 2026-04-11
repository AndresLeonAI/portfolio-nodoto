<template>
  <section
    id="work-process-section"
    class="relative w-full bg-[#E7DBCB] py-24 sm:py-32 lg:py-40 overflow-hidden"
  >
    <div class="container mx-auto px-gutter max-w-[90rem]">
      <!-- Encabezado Masivo -->
      <div class="mb-16 lg:mb-24 flex justify-between items-end flex-wrap gap-8">
        <h2 id="process-title" class="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-[0.85] font-extrabold tracking-tighter text-[#111] uppercase will-change-transform" v-html="titleHtml"></h2>
      </div>

      <!-- Bento Grid 12 Columnas -->
      <div id="bento-container" class="grid grid-cols-12 gap-5 lg:gap-6 w-full">
        
        <!-- Celda 01: Inmersión -->
        <div class="process-card col-span-12 lg:col-span-5 lg:row-span-2 flex flex-col justify-between bg-[#E7DBCB] rounded-[2.5rem] p-10 lg:p-14 shadow-sm border border-gray-100 will-change-transform">
          <div class="flex items-center gap-4 mb-24">
            <span class="text-xs font-mono tracking-widest uppercase text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full">01. Estrategia</span>
          </div>
          <p class="text-2xl lg:text-3xl xl:text-4xl leading-tight font-medium text-[#111] text-balance" v-html="cell01Html"></p>
        </div>

        <!-- Celda 02: Arquitectura -->
        <div class="process-card col-span-12 lg:col-span-7 flex flex-col justify-between bg-[#E7DBCB] rounded-[2.5rem] p-10 lg:p-14 shadow-sm border border-gray-100 will-change-transform">
          <div class="flex items-center gap-4 mb-20">
            <span class="text-xs font-mono tracking-widest uppercase text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full">02. Psicología de Conversión</span>
          </div>
          <p class="text-2xl lg:text-3xl xl:text-[2.5rem] leading-[1.1] font-medium text-[#111] text-balance" v-html="cell02Html"></p>
        </div>

        <!-- Celda 03: Ingeniería (DARK) -->
        <div class="process-card col-span-12 lg:col-span-4 flex flex-col justify-between bg-[#0B0B0A] rounded-[2.5rem] p-10 lg:p-14 shadow-2xl border border-gray-800 will-change-transform">
          <div class="flex items-center gap-4 mb-16">
            <span class="text-xs font-mono tracking-widest uppercase text-gray-400/80 bg-gray-800 px-3 py-1.5 rounded-full">03. Alta Costura Digital</span>
          </div>
          <p class="text-xl lg:text-2xl xl:text-3xl leading-tight font-medium text-white text-balance" v-html="cell03Html"></p>
        </div>

        <!-- Celda 04: Despliegue -->
        <div class="process-card col-span-12 lg:col-span-3 flex flex-col justify-between bg-[#E7DBCB] rounded-[2.5rem] p-10 lg:p-14 shadow-sm border border-gray-100 will-change-transform">
          <div class="flex items-center gap-4 mb-16">
            <span class="text-xs font-mono tracking-widest uppercase text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full">04. Lanzamiento</span>
          </div>
          <p class="text-xl lg:text-2xl leading-tight font-medium text-[#111] text-balance" v-html="cell04Html"></p>
        </div>

      </div>

      <!-- CTA Monolítico -->
      <div class="mt-24 lg:mt-32 w-full max-w-5xl mx-auto px-4 md:px-0">
        <div 
          id="monolithic-cta"
          ref="ctaRef"
          class="relative overflow-hidden group flex items-center justify-center bg-[#E7DBCB] rounded-[3rem] py-16 md:py-20 lg:py-24 px-6 text-center cursor-pointer will-change-transform border border-gray-200/50 transition-all duration-[800ms]"
          @mouseenter="onHoverEnter"
          @mouseleave="onHoverLeaveWrapper"
          @mousemove="onCtaMouseMove"
        >
          <!-- Hover Background Overlay -->
          <div class="absolute inset-0 bg-void origin-bottom scale-y-0 transition-transform duration-[600ms] ease-out group-hover:scale-y-100 pointer-events-none"></div>
          
          <!-- Content -->
          <h3 class="relative z-10 text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-[#111] tracking-tighter leading-none transition-colors duration-[600ms] group-hover:text-white" v-html="ctaHtml"></h3>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
  import { onBeforeMount, onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import { useGsap } from '@/composables/useGsap';
  import { useMagnetic } from '@/composables/useMagnetic';
  import { textSplitterIntoChar } from '@/functions';

  gsap.registerPlugin(ScrollTrigger);

  const { ctx, initCtx } = useGsap();
  const ctaRef = ref<HTMLElement | null>(null);

  const titleHtml = ref('');
  const cell01Html = ref('');
  const cell02Html = ref('');
  const cell03Html = ref('');
  const cell04Html = ref('');
  const ctaHtml = ref('');

  onBeforeMount(() => {
    // Helper to generate spans with editorial italic + nested GSAP letters
    const highlight = (word: string, darkTheme: boolean = false) => 
      `<span class="font-editorial italic tracking-tight ${darkTheme ? 'text-white' : 'text-[#111]'}">${textSplitterIntoChar(word, false, false)}</span>`;

    titleHtml.value = textSplitterIntoChar('El Método NODOTO.', true, false);

    cell01Html.value = 
      textSplitterIntoChar("Antes de diseñar un solo píxel, diseccionamos tu modelo de negocio. Definimos una arquitectura visual con un único objetivo: la ", false, false) + 
      highlight("dominación absoluta") + 
      textSplitterIntoChar(" de tu mercado.", false, false);

    cell02Html.value = 
      textSplitterIntoChar("No hacemos páginas estáticas. Construimos embudos persuasivos. Cada espacio y cada interacción se calcula para transformar visitantes en ", false, false) + 
      highlight("clientes de alto valor");

    cell03Html.value = 
      textSplitterIntoChar("Desarrollo a medida. Animaciones fluidas y rendimiento extremo que proyectan una imagen de ", false, false) + 
      highlight("lujo innegable", true);

    cell04Html.value = 
      textSplitterIntoChar("Desplegamos tu ecosistema. Tu marca deja de competir por precio y empieza a cobrar por ", false, false) + 
      highlight("autoridad");

    ctaHtml.value = 
      textSplitterIntoChar("Inicia tu ", false, false) + 
      `<span class="font-editorial italic tracking-tight">${textSplitterIntoChar('evolución', false, false)}</span>` + 
      textSplitterIntoChar(" hoy.", false, false);
  });

  onMounted(() => {
    initCtx(ref(document.querySelector('#work-process-section') as HTMLElement));
    
    ctx.value!.add(() => {
      // 1. Título General
      const titleLetters = document.querySelectorAll('#process-title .letters');
      gsap.set(titleLetters, { y: '120%', rotateX: -20, opacity: 0, willChange: 'transform, opacity' });
      gsap.to(titleLetters, {
        y: '0%',
        rotateX: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1.4,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '#process-title',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      });

      // 2. Bento Grid Cards Entrance (Cascada Stagger)
      const bentoCards = gsap.utils.toArray('.process-card');
      gsap.from(bentoCards, {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.4,
        ease: 'power3.out',
        willChange: 'transform, opacity',
        scrollTrigger: {
          trigger: '#bento-container',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      });

      // 3. SOTD Kinetic Text Reveal en las tarjetas
      bentoCards.forEach((card: any) => {
        const letters = card.querySelectorAll('p .letters');
        if (letters && letters.length) {
          gsap.set(letters, { y: '120%', rotateX: -20, opacity: 0, willChange: 'transform, opacity' });
          gsap.to(letters, {
            y: '0%',
            rotateX: 0,
            opacity: 1,
            stagger: 0.03,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card, // Lanza la cinética del texto cuando la tarjeta en sí entre
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            }
          });
        }
      });

      // 4. CTA Monolítico Reveal
      gsap.from('#monolithic-cta', {
        y: 80,
        opacity: 0,
        duration: 1.5,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '#monolithic-cta',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        }
      });

      const ctaLetters = document.querySelectorAll('#monolithic-cta h3 .letters');
      if (ctaLetters.length) {
        gsap.set(ctaLetters, { y: '120%', rotateX: -20, opacity: 0 });
        gsap.to(ctaLetters, {
          y: '0%',
          rotateX: 0,
          opacity: 1,
          stagger: 0.04,
          duration: 1.4,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '#monolithic-cta',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        });
      }
    });
  });

  // ─── Magnetic CTA Abstraction ──────────────────────────────────────────────
  const { onMouseMove: onCtaMouseMove, onMouseLeave: onCtaMouseLeave } = useMagnetic(ctaRef, 0.15);

  const onHoverEnter = () => {
    // Escalar un poco todo el bloque y activar el imán
    gsap.to(ctaRef.value, { scale: 1.02, duration: 0.6, ease: 'expo.out' });
  };

  const onHoverLeaveWrapper = () => {
    onCtaMouseLeave(); // Llama a la física del composable
    // Regresa a su estado base la escala con efecto muelle premium
    gsap.to(ctaRef.value, {
      scale: 1,
      duration: 1.2,
      ease: 'elastic.out(1, 0.3)',
    });
  };
</script>
