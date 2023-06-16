import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomePage'
import About from '../components/AboutUs'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  }

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router