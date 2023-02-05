import { createApp } from 'vue';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

createApp(App)
.use(store)
.use(router)
.use(VueScrollTo, {
    duration: 800,
    easing: 'ease-in-out',
    force: true,
})
.mount('#app');
