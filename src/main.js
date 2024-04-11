import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import PrimeVue from 'primevue/config';
import InputSwitch from 'primevue/inputswitch';
import SelectButton from 'primevue/selectbutton';
import Sidebar from 'primevue/sidebar';

import '@/assets/styles.scss';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });

app.component('InputSwitch', InputSwitch);
app.component('SelectButton', SelectButton);
app.component('Sidebar', Sidebar);
app.mount('#app');
