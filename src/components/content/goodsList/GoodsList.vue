<template>
    <div class="goods">
        <GoodsListItem v-for="(good,index) in goods" :key="index" :goodsItem="good"></GoodsListItem>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue';

export default {
    name: "GoodsList",
    props: {
        goods: {
            type: Array,
            default() {
                return [];
            }
        }
    },

    components: { GoodsListItem },

}
</script>

<style scoped lang="less">
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100vw;
}
</style>