import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/kanban',
    component: () => import('../views/kanban'),
    children: [
      {
        path: '',
        name: 'chooseProfile',
        component: () => import('../views/profile')
      },
      {
        path: ':id',
        name: 'Kanban',
        component: () => import('../views/kanban/components/Kanban.vue')
      }
    ]
  },
  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: () => import('../views/profile')
  // },
  {
    path: '/*',
    name: 'Not Found',
    component: () => import('../views/PageNotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
