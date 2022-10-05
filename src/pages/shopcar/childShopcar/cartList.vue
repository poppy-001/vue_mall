<template>
    <div class="cartlist">
        <Scroll class="content" ref="scrollRef">
            <div v-if="cartList.length!==0">
                <CartListItem v-for="item in cartList" :key="item.iid" :itemInfo="item"></CartListItem>
            </div>
        </Scroll>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import CartListItem from './cartListItem.vue';
import Scroll from '@/components/common/scroll/Scroll.vue';
export default {
    name: "cartList",
    components: { CartListItem, Scroll },
    computed: {
        ...mapState(["cartList"])
    },
    mounted() {
        this.$bus.$on("shopcarRefresh", () => {
            this.$refs.scrollRef.refresh()
        })
    }
}
</script>

<style lang="less" scoped>
.cartlist {
    height: calc(100% - 34px);
}

.content {
    height: 100%;
}
</style>