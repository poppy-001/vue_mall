<template>
    <div class="shopInfo" v-if="shopInfo">
        <div class="shop_top">
            <img :src="shopInfo.logo" alt="">
            <span>{{shopInfo.name}}</span>
        </div>
        <div class="shop_middle">
            <div class="left middle_item">
                <div class="goods_sell">
                    <span>{{shopInfo.sells | sellsFilters}}</span>
                    <p>总销量</p>
                </div>
                <div class="goods_count">
                    <span>{{shopInfo.goodsCount}}</span>
                    <p>全部宝贝</p>
                </div>
            </div>

            <div class="right middle_item">
                <table>
                    <tr v-for="(item,index) in shopInfo.score" :key="index">
                        <td>{{item.name}}</td>
                        <td class="text_color score" :class="{better_text_color:item.isBetter}">{{item.score}}</td>
                        <td class="bgc_color" :class="{better_bgc_color:item.isBetter}">{{item.isBetter?"高":"低"}}</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="shop_bottom">
            <button>进店逛逛</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "detailShopInfo",
    props: {
        shopInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    filters: {
        sellsFilters(value) {
            let rst = value
            if (value > 10000) {
                rst = (value / 10000).toFixed(1) + "万"
            }
            return rst

        }
    }
}
</script>

<style lang="less" scoped>
.shopInfo {
    width: 100%;
    padding: 30px 10px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;

    .shop_top {

        img {
            width: 50px;
            border: 1px solid #ddd;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 12px;
        }
    }

    .shop_middle {
        display: flex;
        width: 100%;
        margin: 20px 0;
        color: #333;

        .middle_item {
            flex: 1;
        }

        .left {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin: 10px 0;
            border-right: 1px solid #ddd;
            text-align: center;

            span {
                font-size: 20px;
            }

            p {
                font-size: 13px;
                margin-top: 8px;
            }
        }

        .right {
            display: flex;
            justify-content: end;

            table {
                border-spacing: 12px;
                font-size: 14px;
            }


            .text_color {
                color: #5e8728;
            }

            .bgc_color {
                background-color: #5e8728;
                color: #fff
            }

            .better_text_color {
                color: #fd4d33;
            }

            .better_bgc_color {
                background-color: #fd4d33;
            }
        }
    }

    .shop_bottom {
        text-align: center;

        button {
            width: 130px;
            height: 30px;
            border: 0;
            background-color: #f2f5fa;
            color: #666;
            font-size: 14px;
            border-radius: 10px;
        }
    }

}
</style>