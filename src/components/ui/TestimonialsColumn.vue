<template>
  <div :class="className" class="overflow-hidden">
    <div ref="columnRef" class="flex flex-col gap-6 pb-6">
      <div
        v-for="(testimonial, i) in duplicatedTestimonials"
        :key="i"
        class="testimonial-card border-flax-smoke-300/50 bg-white/90 p-10 rounded-3xl border shadow-lg shadow-flax-smoke-950/5 max-w-xs w-full backdrop-blur-md"
      >
        <p class="text-flax-smoke-950/85 leading-relaxed text-base tracking-tight">{{ testimonial.text }}</p>
        <div class="flex items-center gap-3 mt-5">
          <img
            :src="testimonial.image"
            :alt="testimonial.name"
            width="40"
            height="40"
            class="h-10 w-10 rounded-full object-cover grayscale brightness-100 contrast-[1.1]"
            loading="lazy"
          />
          <div class="flex flex-col">
            <span class="font-medium tracking-tight leading-5 text-flax-smoke-950 text-sm">{{ testimonial.name }}</span>
            <span class="leading-5 text-flax-smoke-500 tracking-tight text-xs">{{ testimonial.role }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import gsap from 'gsap';

  interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
  }

  const props = withDefaults(
    defineProps<{
      className?: string;
      testimonials: Testimonial[];
      duration?: number;
    }>(),
    {
      className: '',
      duration: 10,
    },
  );

  const columnRef = ref<HTMLElement | null>(null);
  let tweenInstance: gsap.core.Tween | null = null;

  const duplicatedTestimonials = computed(() => [
    ...props.testimonials,
    ...props.testimonials,
  ]);

  onMounted(() => {
    if (!columnRef.value) return;

    tweenInstance = gsap.to(columnRef.value, {
      yPercent: -50,
      duration: props.duration,
      repeat: -1,
      ease: 'none',
    });
  });

  onUnmounted(() => {
    tweenInstance?.kill();
  });
</script>
