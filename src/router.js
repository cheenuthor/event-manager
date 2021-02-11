import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/events/EventList.vue';
import ContactCoach from './pages/participants/RegisterEvent.vue';
import RequestsReceived from './pages/participants/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';
import intro from './pages/introduction/Introduction.vue';
import event from './pages/events/addEvents.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: intro },
    { path: '/events', component: CoachesList },
    {
      path: '/events/:name',
      //* here we dynamicaly import component like this.....
      component: () => import('./pages/events/EventDetail.vue'),
      props: true,
      children: [
        { path: 'contact', component: ContactCoach } // /coaches/c1/contact
      ]
    },
    // {
    //   path: '/register',
    //   //* here we dynamicaly import component like this.....
    //   component: () => import('./pages/coaches/CoachRegistration.vue'),
    //   meta: { requiresAuth: true }
    // },
    {
      path: '/requests',
      component: RequestsReceived,
      meta: { requiresAuth: true }
    },
    {
      path: '/addevent',
      component: event,
      meta: { requiresAuth: true }
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach(function(to, from, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;
