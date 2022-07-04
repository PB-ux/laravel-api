<template>
    <div class="category-item">
        <transition-group name="category-item-list">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{ categories.title }}</h5>
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
            categories: [],
            id: this.$route.params.id,
        };
    },
    mounted() {
        axios.get(`/api/V1/categories/${this.id}`).then((response) => {
            this.categories = response.data.data;
        });
    },
};
</script>
<style scoped>
.category-item {
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
.card-body {
    display: flex;
    flex-direction: column;
}
.card-title {
    font-size: 20px;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 5px;
}
.category-item-list-enter-active,
.category-item-list-leave-active {
    transition: all 1s ease;
}
.category-item-list-enter-from,
.category-item-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>
