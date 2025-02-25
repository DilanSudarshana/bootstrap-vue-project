import Home from './components/home/Home.vue';
import Login from './components/login/Login.vue';
import Register from './components/register/Register.vue';

import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
    {
        name: 'Register',
        component: Register,
        path: '/sign-up'
    }

];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router