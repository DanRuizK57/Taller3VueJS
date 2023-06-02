import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListadoProductoView from '@/views/ListadoProductoView.vue'
// import DetalleProductoView from 'src/views/DetalleProductoView.vue'
import DetalleProductoView from '@/views/DetalleProductoView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
  ,{
    path: '/listaProductos',
    name: 'listado',
    component: ListadoProductoView
  },
  {
    path: '/detalle:id',
    name:'detalle',
    component: DetalleProductoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
