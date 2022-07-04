<template>
    <div class="container">
        <navbar></navbar>
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>
<script>
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
export default {
    components: {
        Logo,
        Navbar,
    },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
body {
    font-family: "Roboto", sans-serif;
}
.container {
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
