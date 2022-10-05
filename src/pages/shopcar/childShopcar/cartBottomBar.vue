<template>
    <div class="cartBottomBar">
        <div class="selectAll">
            <CheckBtn class="checkBtn" :ischeck="selectAll" @click.native="selectAllGoods" />
            <span>全选</span>
        </div>

        <div class="total">
            合计：<span>￥{{totalPrice}}</span>
        </div>

        <div class="toBuy" @click="toBuyGoods">
            去计算({{totalCount}})
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import CheckBtn from '@/components/content/checkBtn/checkBtn.vue';
export default {
    name: "cartBottomBar",
    computed: {
        ...mapState(["cartList"]),
        totalPrice() {
            return this.cartList.filter(item => item.ischeck === true).reduce((preV, item) => { return preV + item.price * item.count; }, 0).toFixed(2);
        },
        totalCount() {
            return this.cartList.filter(item => item.ischeck === true).length;
        }
    },
    components: { CheckBtn },
    //挂载是否需要勾选全选按钮
    mounted() {
        this.$bus.$on("shouldSelectAll", (value) => {
            this.selectAll = value
        })
    },
    data() {
        return {
            selectAll: false
        }
    },
    methods: {
        selectAllGoods() {
            if (this.cartList.length) {
                this.selectAll = !this.selectAll
                this.$store.commit("SELECTALL", this.selectAll)
            } else {
                this.$toast.show("请添加商品", 1500)
            }

        },
        toBuyGoods() {
            if (this.cartList.filter(item => item.ischeck).length === 0) {
                this.$toast.show("请选择商品", 1500)
            } else {
                this.$toast.show("巴拉巴拉巴拉", 1500)
            }
        }
    }
}
</script>
<style lang="less" scoped>
.cartBottomBar {
    position: fixed;
    bottom: 50px;
    left: 0;
    right: 0;
    height: 44px;
    background-color: #eee;
    box-shadow: 0 -2px 1px rgba(100, 100, 100, .2);
    font-size: 14px;


    display: flex;
    align-items: center;

    .selectAll {
        display: flex;
        width: 80px;
        text-align: center;

        // input {
        //     vertical-align: middle;
        //     width: 15px;
        //     height: 15px;
        // }
        .checkBtn {
            margin: 0 5px;
        }

        span {
            margin-top: 2px;
        }
    }

    .toBuy {
        width: 100px;
        background-color: #ff5100;
        color: #fff;
        text-align: center;
        line-height: 50px;
    }

    .total {
        flex: 1;
    }
}
</style>