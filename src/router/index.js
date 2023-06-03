import { createRouter, createWebHistory } from 'vue-router'

import ReseñasPage from '../views/Reseñas.vue'

import ListadoProductoView from '@/views/ListadoProductoView.vue'

import DetalleProductoView from '@/views/DetalleProductoView.vue'

const routes = [
  {
    path: '/',
    name: 'listado',
    component: ListadoProductoView
  },
  {
    path: '/detalle/:id',
    name:'detalle',
    component: DetalleProductoView
  },
  {
    path: '/resenas/usuario/:userid',
    name: 'resenas',
    component: ReseñasPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
