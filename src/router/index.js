import { createRouter, createWebHistory } from 'vue-router'
import FunnelCanvasView from '../views/FunnelCanvasView.vue'
import FunnelCanvas2View from '../views/FunnelCanvas2View.vue'

const routes = [
  {
    path: '/',
    name: 'FunnelCanvasView',
    component: FunnelCanvasView
  },
  {
    path: '/FunnelCanvas2',
    name: 'FunnelCanvas2View',
    component: FunnelCanvas2View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
