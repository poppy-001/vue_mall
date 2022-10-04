<template>
    <div class="detail_recommend" v-if="recommendList">
        <GoodsList :goods="recommendList"></GoodsList>
    </div>
</template>

<script>

import GoodsList from '@/components/content/goodsList/GoodsList.vue'
export default {
    name: "detailRecommend",
    props: {
        recommendList: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    components: { GoodsList }
}
</script>

<style lang="less" scoped>

</style>