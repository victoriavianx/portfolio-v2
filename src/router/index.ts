import { createRouter, createWebHistory } from 'vue-router';
import FrontPage from '../views/front-page/FrontPage.vue';
import ProfessionalCareer from '@/views/professional-career/ProfessionalCareer.vue';
import Development from '@/views/development/Development.vue';
import Projects from '@/views/projects/Projects.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'front-page',
      component: FrontPage
    },
    {
      path: '/experiencia',
      name: 'professional-career',
      component: ProfessionalCareer
    },
    {
      path: '/desenvolvimento',
      name: 'development',
      component: Development
    },
    {
      path: '/projetos',
      name: 'projects',
      component: Projects
    }
  ]
});

export default router;
