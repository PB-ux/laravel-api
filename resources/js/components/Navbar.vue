<template>
    <div class="header">
        <logo @click="$router.push('/')"></logo>
        <div class="nav">
            <div class="nav-list">
                <div class="nav-item" @click="$router.push('/')">Products</div>
                <div class="nav-item" @click="$router.push('/categories')">
                    Categories
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Logo from "./Logo.vue";
export default {
    components: {
        Logo,
    },
};
</script>
<style scoped>
.header {
    display: flex;
    align-items: center;
}
.nav-list {
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-top: 4px;
}
.nav-item {
    color: #434243;
    margin-right: 10px;
    font-size: 18px;
    cursor: pointer;
}
.nav-item:hover {
    color: #61a5fa;
}
</style>
