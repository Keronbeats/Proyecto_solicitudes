import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Crear from '../components/Crear.vue'
import Editar from '../components/Editar.vue'
import Listar from '../components/Listar.vue'
import Login from '../components/Login.vue'
import Ingreso from '../components/ingreso-solicitud.vue'
import Estado from '../components/Estado-solicitud.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/crear',
      name: 'Crear',
      component: Crear
    },
    {
      path: '/editar',
      name: 'Editar',
      component: Editar
    },
    {
      path: '/listar',
      name: 'Listar',
      component: Listar
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Ingreso',
      name: 'Ingreso-solicitud',
      component: Ingreso
    },
    {
      path: '/Estado',
      name: 'Estado-solicitud',
      component: Estado
    }
  
  ]
})

export default router
