<template>
    <div class="good_info" v-if="goodsInfo">
        <h3 class="good_title">{{goodsInfo.title}}</h3>
        <div class="good_price">
            <span class="good_newPrice">{{goodsInfo.newPrice}}</span>
            <span class="good_oldPrice">{{goodsInfo.oldPrice}}</span>
            <span v-if="goodsInfo.discount" class="good_discount" :style="discountBgc">{{goodsInfo.discount}}</span>
        </div>

        <div class="info_other">
            <span>{{goodsInfo.columns[0]}}</span>
            <span>{{goodsInfo.columns[1]}}</span>
            <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
        </div>

        <div class="info_services">
            <span v-for="index in goodsInfo.services.length-1" :key="index">

                <img :src="goodsInfo.services[index-1].icon">
                <span>{{goodsInfo.services[index-1].name}}</span>
            </span>

        </div>
    </div>
</template>

<script>
export default {
    name: "detailBaseInfo",
    props: {
        goodsInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        discountBgc() {
            return "background-color:" + this.goodsInfo.discountBgColor
        }
    }
}
</script>

<style lang="less" scoped>
.good_info {
    padding: 15px 8px 0;
}

.good_title {
    font-weight: 400;
    font-size: 16px;
}

.good_price {
    margin: 12px 0;
}

.good_newPrice {
    color: var(--color-high-text);
    font-size: 18px;
}

.good_oldPrice {
    margin: 0 5px;
    color: #999;
    font-size: 12px;
    text-decoration: line-through;
}

.good_discount {
    padding: 2px 5px;
    color: #fff;
    font-size: 13px;
    border-radius: 10px;
    vertical-align: top;
}

.info_other {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #999;
}

.info_services {
    display: flex;
    justify-content: space-between;

    margin-top: 6px;
    padding: 13px 0;
    border-top: 1px solid #ddd;
    font-size: 12px;
    color: #000;

    img {
        width: 12px;
        vertical-align: middle;
    }
}
</style>