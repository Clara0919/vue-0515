import { createRouter, createWebHistory } from 'vue-router'
import userView from '../views/userView.vue'

const routes = [
  {
    path: '/users/:userId',
    component: userView,
    children
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
