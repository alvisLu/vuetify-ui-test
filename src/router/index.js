import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/LoginView.vue';
import KeyinUser from '../components/KeyinUser.vue';
import keyinRegister from '../components/keyinRegister.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      children: [
        {
          path: 'keyinuser',
          name: 'KeyinUser',
          component: KeyinUser
        },
        {
          path: 'keyinregister',
          name: 'keyinRegister',
          component: keyinRegister
        }
      ]
    }
  ]
});

export default router;
