import { createRouter, createWebHistory } from 'vue-router'
import ReserveView from '../views/ReserveView.vue'
import ReservationsView from '@/views/admin/ReservationsView.vue'
import LandingView from '@/views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    {
      path: '/reserve',
      name: 'reserve',
      component: ReserveView,
    },
    {
      path: '/admin/reservations',
      name: 'adminReservations',
      component: ReservationsView,
    },
  ],
})

export default router
