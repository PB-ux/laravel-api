import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Products from "./components/Products";
import Categories from "./components/Categories";
import ProductItem from "./components/ProductItem";
import CategoryItem from "./components/CategoryItem";

const routes = [
    {
        path: "/",
        component: Products,
    },
    {
        path: "/categories",
        component: Categories,
    },
    {
        path: "/categories/:id",
        component: CategoryItem,
    },
    {
        path: "/products/:id",
        component: ProductItem,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router).mount("#app");
