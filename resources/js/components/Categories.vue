<template>
    <div class="category">
        <input
            class="category__search"
            type="text"
            v-model="SearchQuery"
            placeholder="Search"
        />
        <h1 class="category__title">Categories</h1>
        <div class="category__list">
            <transition-group name="category-list">
                <div
                    class="card"
                    style="width: 18rem"
                    v-for="category of searchCategory"
                    :key="category.id"
                >
                    <div class="card-body">
                        <h5 class="card-title">{{ category.title }}</h5>
                        <button
                            class="card-link"
                            @click="$router.push(`/categories/${category.id}`)"
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
            categories: [],
            SearchQuery: "",
        };
    },
    computed: {
        searchCategory() {
            return this.categories.filter((category) =>
                category.title.includes(this.SearchQuery)
            );
        },
    },
    mounted() {
        axios.get("/api/V1/categories").then((response) => {
            this.categories = response.data.data;
        });
    },
};
</script>
<style scoped>
.category__title {
    color: #434243;
}
.category__search {
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
.category__list {
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
.card-title {
    font-size: 20px;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 5px;
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
.category-list {
    display: inline-block;
    margin-right: 10px;
}
.category-list-enter-active,
.category-list-leave-active {
    transition: all 1s ease;
}
.category-list-enter-from,
.category-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>
