import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue') //usar esta declaracao somente para paginas que nao sao exportadas/importadas
        },
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})
