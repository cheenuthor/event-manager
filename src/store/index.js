import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';
import RequestModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: RequestModule,
    auth: authModule
  },


});

export default store;
