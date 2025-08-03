import { createRouter, createWebHistory } from 'vue-router'
// Views
import VSymbols from '@/views/v-symbols.vue'
import VHome from '@/views/v-home.vue'

export enum E_ROUTER_PAGES {
  HOME = 'HOME',
  SYMBOLS = 'SYMBOLS',
}

const ROUTER_PATHS: Record<E_ROUTER_PAGES, string> = {
  [E_ROUTER_PAGES.HOME]: '/',
  [E_ROUTER_PAGES.SYMBOLS]: 'symbols'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: E_ROUTER_PAGES.HOME,
      component: VHome,
      path: '/',
    },
    {
      name: E_ROUTER_PAGES.SYMBOLS,
      component: VSymbols,
      path: '/symbols'
    }
  ],
})

export default router
