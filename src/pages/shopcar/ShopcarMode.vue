<template>
    <div class="shopcar">
        <CartNavbar></CartNavbar>
        <CartList></CartList>
        <CartBottomBar></CartBottomBar>
    </div>
</template>

<script>
import CartNavbar from './childShopcar/cartNavbar.vue';
import CartList from './childShopcar/cartList.vue';
import CartBottomBar from './childShopcar/cartBottomBar.vue';

export default {
    name: "ShopcarMode",
    components: { CartNavbar, CartList, CartBottomBar },
    activated() {
        this.$bus.$emit("shopcarRefresh")
    }
}
</script>

<style lang="less" scoped>
.shopcar {
    height: 100vh;
    padding: 44px 0 60px;
}
</style>