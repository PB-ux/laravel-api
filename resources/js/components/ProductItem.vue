<template>
    <div class="product-item">
        <transition-group name="product-item-list">
            <div class="card">
                <div class="card-body">
                    <div class="card-header">
                        <h5 class="card-title">{{ products.title }}</h5>
                        <h6 class="card-price">{{ products.price }} $</h6>
                    </div>
                    <p class="card-text">
                        {{ products.descr }}
                    </p>
                </div>
            </div>
        </transition-group>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            products: [],
            id: this.$route.params.id,
        };
    },
    mounted() {
        axios.get(`/api/V1/products/${this.id}`).then((response) => {
            this.products = response.data.data;
        });
    },
};
</script>
<style scoped>
.product-item {
    display: flex;
    align-items: center;
    justify-content: center;
}
.card {
    width: 600px;
    background-color: #434243;
    border-radius: 8px;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
    color: #fff;
    padding: 20px;
    margin-top: 100px;
}
.card:first-child {
    margin-left: 0;
}
.card-body {
    display: flex;
    flex-direction: column;
}
.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.card-price {
    font-weight: 700;
    font-size: 20px;
    padding: 0;
}
.card-title {
    font-size: 20px;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 5px;
}
.card-text {
    font-size: 16px;
    margin: 0;
}
.product-item-list-enter-active,
.product-item-list-leave-active {
    transition: all 1s ease;
}
.product-item-list-enter-from,
.product-item-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>
