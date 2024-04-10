import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/styles.scss';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });

app.mount('#app');
