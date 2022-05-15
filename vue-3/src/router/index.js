import { createRouter, createWebHistory } from 'vue-router'
import userView from '../views/userView.vue'
import todoView from '../views/todoView.vue'

const routes = [
  {
    path: '/users/:userId',
    component: userView,

  },
  {
    path: '/users/:userId/todos',
    component: todoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
