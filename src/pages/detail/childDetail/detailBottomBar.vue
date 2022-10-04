<template>
    <div class="bottom_bar">
        <div class=" left">
            <div>
                <div class="icon sevices"></div>
                <span class="text">客服</span>
            </div>
            <div>
                <div class="icon shop"></div>
                <span class="text">店铺</span>
            </div>
            <div>
                <div class="icon fav"></div>
                <span class="text">收藏</span>
            </div>
        </div>
        <div class=" right">
            <div class="cart" @click="addCart">加入购物车</div>
            <div class="buy">购买</div>
        </div>

    </div>
</template>

<script>
export default {
    name: "detailBottomBar",
    methods:{
        addCart(){
            this.$emit("addcart")
        }
    }
}
</script>
<style lang="less" scoped>
.bottom_bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    height: 60px;

    display: flex;
    text-align: center;


    .left {
        flex: 1.5;
        display: flex;

        >div {
            flex: 1;
        }

        .icon {
            width: 22px;
            height: 22px;
            margin: 10px auto 3px;
            background: url(@/assets/img/detail/detail_bottom.png);
            background-size: 22px;

            &.sevices {
                background-position: 0 -54px;
            }

            &.shop {
                background-position: 0 -98px;
            }
        }
    }




    .right {
        flex: 1.2;
        display: flex;

        font-size: 15px;
        color: #fff;
        line-height: 60px;

        >div {
            flex: 1
        }

        .cart {
            background-color: #ffe817;
            color: #333;
        }

        .buy {
            background-color: #f69;
        }
    }

}
</style>