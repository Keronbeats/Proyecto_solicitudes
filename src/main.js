import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
// sidebar nav js //
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let seachBtn = document.querySelector(".bx-search");

btn.onclick = function() {
    sidebar.classList.toggle("active");
}
seachBtn.onclick = function() {
     sidebar.classList.toggle("active");
}