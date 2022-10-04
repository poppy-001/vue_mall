<template>
    <div class="good_item" @click="clickItem">
        <img :src="image" @load="imgLoad">
        <div class="good_info">
            <p class="item_title">{{goodsItem.title}}</p>
            <span class="item_price">￥{{goodsItem.price}}</span>
            <span class="item_cfav">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsListItem',
    props: {
        goodsItem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        image() {
            return this.goodsItem.image || this.goodsItem.show.img
        },
        id() {
            return this.goodsItem.item_id || this.goodsItem.iid
        }
    },
    methods: {
        imgLoad() {
            this.$bus.$emit("refresh")
        },
        clickItem() {
            this.$router.push('/detail/' + this.id)
        }
    }
}
</script>

<style scoped lang="less">
.good_item {
    width: 47%;
    margin-bottom: 10px;
}

.good_item img {
    width: 100%;
    border-radius: 5px;
}

.good_info {
    font-size: 12px;
    text-align: center;

    .item_title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 3px;
    }

    .item_price {
        color: var(--color-high-text);
        margin-right: 20px;
    }

    .item_cfav {
        position: relative;
    }

    .item_cfav::before {
        content: "";
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url(../../../assets/img/detail/detail_bottom.png);
        background-size: 100%;
    }
}
</style>