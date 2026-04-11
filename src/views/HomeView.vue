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
</script>
