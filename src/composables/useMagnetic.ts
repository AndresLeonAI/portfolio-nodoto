import gsap from 'gsap';

export const useMagnetic = (el: import('vue').Ref<HTMLElement | null>, strength = 0.3) => {
  const onMouseMove = (e: MouseEvent) => {
    if (!el.value) return;
    const rect = el.value.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    gsap.to(el.value, { x, y, duration: 0.4, ease: 'power2.out' });
  };

  const onMouseLeave = () => {
    if (!el.value) return;
    gsap.to(el.value, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
  };

  return { onMouseMove, onMouseLeave };
};
