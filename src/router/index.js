import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import LoginPage from '../components/UserLogin.vue';
import RegisterPage from '../components/Register.vue';
import MenuPage from '../views/Menu.vue';
import CartPage from '../views/Cart.vue';
import DeliveryStatusPage from '@/views/DeliveryStatus.vue';
import RestaurantPage from '@/views/RestaurantPage.vue';
import SettingsPage from '@/views/Settings.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/menu', component: MenuPage },
    { path: '/cart', component: CartPage },
    { path: '/menu/:id', name: 'MenuPage', component: MenuPage },
    { path: '/delivery-status', component: DeliveryStatusPage },
    {path: '/settings', component: SettingsPage},
    {path: '/RestaurantPage', component: RestaurantPage},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
