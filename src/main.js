import { createApp } from 'vue'
import './style/general.scss'
import App from './App.vue'
import { router } from "./router.js"

import "bootstrap/dist/css/bootstrap.css";

createApp(App).use(router).mount('#app');

import "bootstrap/dist/js/bootstrap.js";
