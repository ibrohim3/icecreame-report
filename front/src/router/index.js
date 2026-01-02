import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Products from "../pages/product/Products.vue";

const routes = [
    { path: "/", component: Dashboard },
    { path: "/products", component: Products }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router