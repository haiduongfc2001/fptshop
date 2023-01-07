import { createRouter, createWebHistory } from 'vue-router'
import userHeader from './components/layouts/header/userHeader.vue'
import Footer from './components/layouts/footer/Footer.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: userHeader, Footer
        }
    ]
})
