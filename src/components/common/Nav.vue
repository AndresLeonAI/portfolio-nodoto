<template>
  <BurgerMenuBtn
    @click="toggleBtnClickAnimation"
    class="z-9999 scale-0 drop-shadow-lg"
    id="burger"
  />

  <div
    @click="toggleBtnClickAnimation"
    class="fixed inset-0 z-9998 size-full bg-black/60 select-none backdrop-blur-sm transition-all duration-500 ease-in-out"
    :class="isNavbarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
  ></div>

  <!-- ═══════════════════════════════════════════════════════════════ -->
  <!-- FULLSCREEN MENU PANEL — 3-Zone Protected Layout               -->
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div
    tabindex="0"
    id="navbar"
    @keydown.esc="toggleBtnClickAnimation()"
    class="fixed inset-0 top-0 left-0 z-9998 h-[100dvh] w-full translate-y-full will-change-transform select-none focus:outline-none bg-[#0B0B0A] flex flex-col overflow-hidden"
  >
    <!-- Atmospheric mesh gradient -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -left-[20%] top-[15%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(140,140,115,0.06)_0%,transparent_70%)]" />
      <div class="absolute right-[5%] bottom-[-10%] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.025)_0%,transparent_65%)]" />
    </div>

    <!-- Noise grain -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
      style="background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')"
    />

    <div class="relative z-10 w-full max-w-[100rem] mx-auto px-6 sm:px-12 flex flex-col h-full">
      <!-- ═══════════════════════════════════════════════ -->
      <!-- ZONE 1: Header (flex-shrink-0)                 -->
      <!-- ═══════════════════════════════════════════════ -->
      <div class="flex-shrink-0 pt-8 sm:pt-10 pb-4">
        <p class="font-mono text-[0.6rem] tracking-[0.35em] text-white/15 uppercase">
          Navegación
        </p>
      </div>

      <!-- ═══════════════════════════════════════════════ -->
      <!-- ZONE 2: Links (flex-1, min-h-0 for shrink)     -->
      <!-- ═══════════════════════════════════════════════ -->
      <nav class="flex-1 min-h-0 overflow-y-auto flex flex-col justify-center scrollbar-hide">
        <ul class="flex flex-col gap-1 sm:gap-2">
          <li
            v-for="l in navbarLinks"
            :key="l.label"
            class="nav-link-wrapper overflow-hidden"
          >
            <a
              :href="l.url"
              @click.prevent="gotoSection(l.url)"
              class="nav-link-item group inline-block font-fancy text-[clamp(2.8rem,8vw,5.5rem)] font-bold text-white/40 leading-[1.05] tracking-tight transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:text-white/90 hover:translate-x-4 cursor-pointer hover:font-editorial hover:italic hover:font-normal"
            >
              {{ l.label }}
            </a>
          </li>
        </ul>
      </nav>

      <!-- ═══════════════════════════════════════════════ -->
      <!-- ZONE 3: Footer (flex-shrink-0, always visible) -->
      <!-- ═══════════════════════════════════════════════ -->
      <div class="flex-shrink-0 py-8 sm:py-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-8">
        <div class="nav-bottom-item flex flex-col gap-4 sm:flex-row sm:gap-16">
          <div class="flex flex-col gap-1">
            <p class="font-mono text-[0.6rem] tracking-[0.35em] text-white/25 uppercase">
              Contacto Directo
            </p>
            <a
              href="mailto:contacto@nodoto.agency"
              class="font-fancy text-lg text-white/60 transition-colors duration-300 hover:text-white"
            >
              contacto@nodoto.agency
            </a>
          </div>
          <div class="flex flex-col gap-1">
            <p class="font-mono text-[0.6rem] tracking-[0.35em] text-white/25 uppercase">
              Time
            </p>
            <p class="font-mono text-sm text-white/60">
              {{ locationCountry }} — <span class="text-white font-bold">{{ currentTime }}</span>
            </p>
          </div>
        </div>

        <div class="nav-bottom-item">
          <!-- CTA — Conversion Critical -->
          <a
            href="/discovery"
            @click.prevent="goToDiscovery"
            class="group inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-8 py-4 backdrop-blur-md transition-all duration-500 hover:bg-white hover:text-[#0B0B0A]"
          >
            <span class="font-mono text-xs tracking-[0.2em] font-medium uppercase text-white/70 group-hover:text-[#0B0B0A]">
              {{ ctaData.label }}
            </span>
            <div class="flex items-center justify-center bg-white/10 rounded-full p-2 group-hover:bg-[#0B0B0A]/10 transition-colors">
              <svg class="size-3 text-white group-hover:text-[#0B0B0A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════════════════════════ -->
  <!-- HEADER TOP BAR — Ultra-minimal: Logo + Tagline + Burger       -->
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <header
    :class="$attrs.class"
    class="padding-x absolute inset-0 z-20 h-fit -translate-y-full pt-6 will-change-auto"
  >
    <nav class="flex items-center justify-between">
      <MagneticEffect
        :magnetoStrengthVal="20"
        :magnetoTextStrengthVal="10"
        divId="name-container"
        textId="name"
      >
        <div id="name-container" @click="$router.push('/')" class="group -m-10 h-fit cursor-pointer p-10">
          <h2
            id="name"
            class="font-fancy flex items-start text-xl font-extrabold uppercase md:text-3xl"
          >
            NODOTO
            <span
              class="font-fancy inline! origin-center! text-xl transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"
              >&copy;</span
            >
          </h2>
        </div>
      </MagneticEffect>

      <!-- Tagline — desktop only, centered -->
      <div class="flex-1 flex justify-center">
        <p
          class="heading-6 font-fancy text-flax-smoke-400 hidden font-bold uppercase tracking-widest select-none lg:block"
        >
          Expertos en arquitectura <br />
          web persuasiva.
        </p>
      </div>

      <!-- Spacer to balance logo width for true centering -->
      <div class="w-[100px] md:w-[140px]"></div>
    </nav>
  </header>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref, watch, nextTick } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import gsap from 'gsap';

  import { BurgerMenuBtn, MagneticEffect } from '..';

  import {
    animateNavbarEnter,
    animateNavbarLeave,
    navbarScale,
  } from '@/animations';
  import { navbarLinks, locationCountry } from '@/data';
  import { lenis } from '@/lib/lenis';

  const router = useRouter();
  const route = useRoute();

  // ─── CTA Data (hardcoded — conversion-critical) ─────────────────────────
  const ctaData = {
    eyebrow: '¿Listo para dominar?',
    label: 'Iniciar Evolución',
    route: '/discovery',
    description: '30 min · Sin compromiso · 100% estratégico',
  };

  // ─── Live Clock (Bogotá) ────────────────────────────────────────────────
  const currentTime = ref('');
  let clockInterval: ReturnType<typeof setInterval>;

  const updateClock = () => {
    currentTime.value = new Date().toLocaleTimeString('en-US', {
      timeZone: 'America/Bogota',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  // ─── Navigation State ──────────────────────────────────────────────────
  const isNavbarOpen = ref(false);

  const toggleBtnClickAnimation = () => {
    isNavbarOpen.value = !isNavbarOpen.value;

    // animate the X on the button
    document.getElementById('magneto')?.classList.toggle('active');

    const x = document.getElementById('navbar') as HTMLDivElement;
    if (isNavbarOpen.value) {
      animateNavbarEnter('#navbar', '.nav-link-item, .nav-bottom-item');
      x.focus();
    } else {
      animateNavbarLeave('#navbar', '.nav-link-item, .nav-bottom-item');
      x.blur();
    }
  };

  // ─── Intelligent Cross-Route Navigation ──────────────────────────────────
  const gotoSection = (url: string) => {
    const isHomeHash = url.startsWith('#');
    const isAbsoluteRoute = url.startsWith('/') && !url.startsWith('/#');
    const isOnHome = route.path === '/';

    // CASE 1: "Inicio" (url === '/') — navigate to home or scroll to top
    if (url === '/') {
      if (isOnHome) {
        // Already on home — just close menu and scroll to top
        toggleBtnClickAnimation();
        lenis.start();
        lenis.scrollTo(0, { duration: 2 });
      } else {
        // On another route — navigate to home via router (triggers PageTransition)
        toggleBtnClickAnimation();
        setTimeout(() => {
          router.push('/');
        }, 400);
      }
      return;
    }

    // CASE 2: Hash link and already on Home — smooth scroll
    if (isHomeHash && isOnHome) {
      toggleBtnClickAnimation();
      lenis.start();
      lenis.scrollTo(url, { duration: 3 });
      return;
    }

    // CASE 3: Hash link but NOT on Home — cross-route navigation
    if (isHomeHash && !isOnHome) {
      toggleBtnClickAnimation();
      // Navigate home first, then scroll to section after mount
      setTimeout(async () => {
        await router.push('/');
        // Wait for PageTransition to complete + DOM hydration
        setTimeout(() => {
          lenis.start();
          lenis.scrollTo(url, { duration: 2 });
        }, 900); // After curtain reveal (~600ms transition + 150ms delay + buffer)
      }, 400);
      return;
    }

    // CASE 4: Absolute route (e.g., '/discovery')
    if (isAbsoluteRoute) {
      toggleBtnClickAnimation();
      setTimeout(() => {
        router.push(url);
      }, 400);
      return;
    }
  };

  const goToDiscovery = () => {
    // If already on Discovery, just close the menu
    if (route.path === '/discovery') {
      toggleBtnClickAnimation();
      return;
    }
    toggleBtnClickAnimation();
    setTimeout(() => {
      router.push(ctaData.route);
    }, 400);
  };

  // ─── Burger Visibility Management ─────────────────────────────────────────
  // navbarScale uses #hero as ScrollTrigger trigger, but #hero only exists on Home.
  // On non-Home routes, we must force the burger to be visible.
  const showBurger = () => {
    const heroExists = document.getElementById('hero');
    if (heroExists) {
      // On Home: use ScrollTrigger-based reveal (trigger on #hero scroll past)
      navbarScale('#burger', '#hero');
    } else {
      // On non-Home routes: force visible immediately
      gsap.set('#burger', { scale: 1 });
    }
  };

  onMounted(() => {
    showBurger();
    updateClock();
    clockInterval = setInterval(updateClock, 1000);
  });

  onUnmounted(() => {
    if (clockInterval) clearInterval(clockInterval);
  });

  // Re-show burger after route transitions (ScrollTriggers get killed)
  watch(
    () => route.path,
    async () => {
      await nextTick();
      // Small delay to let PageTransition finish
      setTimeout(() => showBurger(), 300);
    }
  );

  const emit = defineEmits(['isLocked']);
  watch(isNavbarOpen, (newVal) => {
    emit('isLocked', newVal);
  });
</script>

<style scoped>
/* Hide scrollbar in link zone but allow overflow scroll on mobile */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
