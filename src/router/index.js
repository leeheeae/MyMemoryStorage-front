import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: () => import('../views/SignupPage.vue'),
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/main',
    name: 'MainPage',
    component: () => import('@/views/MainPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: () => import('@/views/NotFoundPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
