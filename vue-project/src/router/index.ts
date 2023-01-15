import student from '../views/student.vue'
import NotFound from '../views/NotFound.vue'
import login from '../views/login.vue'
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/student",
      name: "home",
      component:student
    },
    {
      path: "/login",
      name: "login",
      component:login
    },
    { 
      path: '/:pathMatch(.*)',
       name: 'NotFound', 
       component:NotFound  
    },
  ],
});

export default router;
