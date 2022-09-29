<template>
    <div id="home">
        <NavBar class="home_navbar">
            <div slot="center">购物街</div>
        </NavBar>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
export default {
    name: "HomeMode",
    components: { NavBar }
}
</script>

<style scoped lang="less">
.home_navbar {
    background-color: var(--color-tint);
    color: #fff;
}
</style>