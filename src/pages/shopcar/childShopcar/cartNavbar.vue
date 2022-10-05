<template>
    <NavBar class="shopcar_navbar">
        <template v-slot:center>
            购物车({{cartList.length}})
        </template>
    </NavBar>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from '@/components/common/navbar/NavBar.vue';
export default {
    name: "cartNavbar",
    components: { NavBar },
    computed: {
        ...mapState(["cartList"])
    }
}
</script>

<style lang="less" scoped>
.shopcar_navbar {
    background-color: var(--color-tint);
    color: #fff;
    font-size: 16px;
}
</style>