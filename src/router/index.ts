import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/discovery',
      name: 'Discovery',
      component: () => import('@/views/DiscoveryView.vue'),
    },
  ],
  // Lenis controls scroll — disable native scroll restoration.
  // PageTransition.vue handles scroll reset via resetScroll().
  scrollBehavior() {
    return false
  },
})

export default router
