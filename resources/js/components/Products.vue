<template>
    <div class="product">
        <input
            class="product__search"
            type="text"
            v-model="SearchQuery"
            placeholder="Search"
        />
        <h1 class="product__title">Products</h1>
        <div class="product__list">
            <transition-group name="product-list">
                <div
                    class="card"
                    style="width: 18rem"
                    v-for="product of searchProduct"
                    :key="product.id"
                >
                    <div class="card-body">
                        <h6 class="card-price">{{ product.price }} $</h6>
                        <h5 class="card-title">{{ product.title }}</h5>
                        <p class="card-text">
                            {{ product.descr }}
                        </p>
                        <button
                            class="card-link"
                            @click="$router.push(`/products/${product.id}`)"
                        >
                            View
                        </button>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            products: [],
            SearchQuery: "",
        };
    },
    computed: {
        searchProduct() {
            return this.products.filter((product) =>
                product.title.includes(this.SearchQuery)
            );
        },
    },
    mounted() {
        axios.get("/api/V1/products").then((response) => {
            this.products = response.data.data;
        });
    },
};
</script>
<style scoped>
.product__title {
    color: #434243;
}
.product__search {
    width: 466px;
    height: 36px;
    border-radius: 20px;
    background-color: #434243;
    border: none;
    outline: none;
    padding-left: 20px;
    color: #fff;
    font-family: "Roboto", sans-serif;
    margin: 30px 0px;
}
.product__list {
    display: flex;
    flex-wrap: wrap;
}
.card {
    background-color: #434243;
    border-radius: 8px;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
    color: #fff;
    padding: 34px;
    margin-bottom: 10px;
    margin-right: 30px;
}
.card:first-child {
    margin-left: 0;
}
.card-body {
    display: flex;
    flex-direction: column;
}
.card-price {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 10px;
}
.card-title {
    font-size: 20px;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 5px;
}
.card-text {
    font-size: 16px;
    flex: 1 1 auto;
}
.card-link {
    display: block;
    cursor: pointer;
    width: 276px;
    height: 45px;
    color: #fff;
    border-radius: 8px;
    background-color: #434243;
    border: 1px solid #61a5fa;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    transition: background-color 0.5s;
    margin-top: 20px;
}
.card-link:hover {
    background-color: #61a5fa;
}
.product-list {
    display: inline-block;
    margin-right: 10px;
}
.product-list-enter-active,
.product-list-leave-active {
    transition: all 1s ease;
}
.product-list-enter-from,
.product-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>
