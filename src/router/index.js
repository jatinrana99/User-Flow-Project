import { createRouter, createWebHistory } from 'vue-router'
import FunnelCanvasView from '../views/FunnelCanvasView.vue'
import FunnelCanvas2View from '../views/FunnelCanvas2View.vue'
import FunnelCanvas3View from '../views/FunnelCanvas3View.vue'

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
  },
  {
    path: '/FunnelCanvas3',
    name: 'FunnelCanvas3View',
    component: FunnelCanvas3View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
