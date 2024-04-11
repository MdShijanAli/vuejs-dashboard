import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import PrimeVue from 'primevue/config';
import Sidebar from 'primevue/sidebar';

import '@/assets/styles.scss';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });

app.component('Sidebar', Sidebar);

app.mount('#app');
