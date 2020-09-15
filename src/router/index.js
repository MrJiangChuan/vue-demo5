import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Item1 from '../views/Item1.vue'
import Item2 from '../views/Item2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
    // name: 'Home'
  },
  {
    path: '/about',
    component: About,
    children: [
      {
        path: '/about',
        redirect: '/about/item1'
      },
      {
        path: '/about/item1',
        component: Item1,
        props: {name: 'Tom', age: 23}
      },
      {
        path: '/about/item2',
        name: 'Item2',
        component: Item2,
        props: true
      }
    ]
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
