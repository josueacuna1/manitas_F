import CameraView from '@/views/CameraView.vue'
import LessonView from '@/views/LessonView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/lesson/:id',
    name: 'lesson',
    component: LessonView
  },
  {
    path: '/camera',
    name: 'camera',
    component: CameraView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
