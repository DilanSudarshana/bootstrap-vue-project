import Home from './components/home/Home.vue';
import Login from './components/login/Login.vue';
import Register from './components/register/Register.vue';
import Plants from './components/plants/Plants.vue';
import ShopNow from './components/shop-now/ShopNow.vue';
import ContactUs from './components/contact-us/ContactUs.vue';
import About from './components/about-us/About.vue';
import PlantDetailsView from './components/plant-details-view/Plant-view.vue';
import ShopNowView from './components/shop-now-details/ShopView.vue';
import Payment from './components/payment/payment.vue';

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
    },
    {
        name: 'Plants',
        component: Plants,
        path: '/plants'
    },
    {
        name: 'ShopNow',
        component: ShopNow,
        path: '/shop-now'
    },
    {
        name: 'ContactUs',
        component: ContactUs,
        path: '/contact-us'
    },
    {
        name: 'About',
        component: About,
        path: '/about-us'
    },
    {
        name: 'PlantDetailsView',
        component: PlantDetailsView,
        path: '/plant/:id'
    },
    {
        name: 'ShopNowView',
        component: ShopNowView,
        path: '/shop-now/:id'
    },
    {
        name: 'Payment',
        component: Payment,
        path: '/payment/:id'
    }

];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router