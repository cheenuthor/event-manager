import { createApp, defineAsyncComponent } from 'vue';

import App from './App.vue';

import store from './store/index.js';
import router from './router.js';

import BaseCard from './components/UI/baseCard.vue';
import baseButton from './components/UI/baseButton.vue';
// import baseBadge from './components/UI/baseBadge.vue';
import baseSpinner from './components/UI/baseSpinner.vue';
// import baseDialog from './components/UI/baseDialog.vue';

const baseDialog = defineAsyncComponent(() =>
  import('./components/UI/baseDialog.vue')
);

const app = createApp(App);

app.use(router);
app.use(store);
app.component('base-card', BaseCard);
app.component('base-button', baseButton);
// app.component('base-badge', baseBadge);
app.component('base-spinner', baseSpinner);
app.component('base-dialog', baseDialog);
app.mount('#app');
