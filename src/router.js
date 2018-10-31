import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      name: 'exibirRelatorios',
      path: '/',
      component:  () => import( './views/exibirRelatorio.vue')
  },
  {
      name: 'create_relatorio',
      path: '/create_relatorio',
      component:  () => import( './views/create_relatorio.vue')
  },
  {
      name: 'edit_relatorio',
      path: '/relatorios/edit/:id',
      component:  () => import( './views/edit_relatorio.vue')
  },
  {
      name: 'delete_relatorio',
      path: '/relatorios/delete/:id',
      component:  () => import( './views/delete_relatorio.vue')
  }
  ]
})
