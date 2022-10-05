<template>
    <div class="cartList_item">
        <div class="left">
            <!-- <input type="checkbox" name="" id=""> -->
            <CheckBtn class="checkItem" :ischeck="itemInfo.ischeck" @click.native="checkGood(itemInfo)"></CheckBtn>
            <img :src="itemInfo.image">
        </div>
        <div class="right">
            <p class="title">{{itemInfo.title}}</p>
            <p class="desc">{{itemInfo.desc}}</p>
            <div class="other">
                <div class="price">￥{{itemInfo.price}}</div>
                <div class="cnt">x{{itemInfo.count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import CheckBtn from '../../../components/content/checkBtn/checkBtn.vue';
import { mapState } from 'vuex';
export default {
    name: "cartListItem",
    props: {
        itemInfo: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    components: { CheckBtn },
    data() {
        return {
            ischeck: null,
        }
    },
    computed: {
        ...mapState(["cartList"])
    },
    methods: {
        checkGood(itemInfo) {
            this.$store.dispatch("checkgood", itemInfo)
            //判断是否需要全选
            let flag = true
            this.cartList.forEach(item => {
                if (item.ischeck === false) {
                    flag = false
                    return
                }
            })
            this.$bus.$emit("shouldSelectAll", flag)
        }
    }
}
</script>

<style lang="less" scoped>
.cartList_item {
    display: flex;
    height: 120px;
    border-bottom: 1px solid #ccc;
    padding: 10px 5px;

    .left {
        flex: 1;
        display: flex;
        align-items: center;

        // input {
        //     width: 15px;
        //     height: 15px;
        // }

        .checkItem {
            float: left;


        }

        img {

            height: 98px;
            width: 80px;
            margin-left: 5px;
            vertical-align: middle;
            border-radius: 5px;

        }
    }


    .right {
        flex: 2;
        width: 200px;
        color: #333;
        overflow: hidden;

        p {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;

            &.desc {
                background-color: #eee;
                padding: 3px;
                margin: 15px 0 25px;
                font-size: 13px;
                border-radius: 3px;
            }
        }

        .price {
            float: left;
            font-size: 18px;
            color: #fb7237
        }

        .cnt {
            float: right;
        }
    }
}
</style>