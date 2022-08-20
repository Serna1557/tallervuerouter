import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Inicio from '../views/InicioView.vue'

import dashboardAdmi from '../views/Adm/dashboardAdmi.vue'
import create from '../views/Adm/productos/create'
import index from '../views/Adm/productos/index'
import update from '../views/Adm/productos/update'

import dashboardusuario from '../views//usuario/dashboardusuario.vue'
import rol from '../views/usuario/login/rol.vue'
import iniciosesion from '../views/usuario/login/iniciosesion.vue'


import sidebar from '../component/sidebar.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Inicio',
    name: 'Inicio',
    component: Inicio
  },

  {
    path: '/dashboardAdmi',
    name: 'dashboardAdmi',
    component: dashboardAdmi
  },

  {
    path: '/create',
    name: 'create',
    component: create
  },

  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/update',
    name: 'update',
    component: update
  },
  {
    path: '/dashboardusuario',
    name: 'dashboardusuario',
    component: dashboardusuario
  },
  {
    path: '/rol',
    name: 'rol',
    component: rol
  },
  {
    path: '/iniciosesion',
    name: 'iniciosesion',
    component: iniciosesion
  },

  {
    path: '/sidebar',
    name: 'sidebar',
    component: sidebar
  },




  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
