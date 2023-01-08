import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: 'homepage',
            component: () => import('@/components/layouts/Layout.vue'),
            children: [
                // Components
                {
                    name: 'HomePage',
                    path: '/homepage',
                    component: () => import('@/components/homepage/HomePage.vue'),
                },
                // {
                //     name: 'UserHeader',
                //     path: '/userheader',
                //     component: () => import('@/components/layouts/header/userHeader.vue'),
                // },
                // {
                //     name: 'UserFooter',
                //     path: '/userfooter',
                //     component: () => import('@/components/layouts/footer/Footer.vue'),
                // }
            ],
        },
    ],
})