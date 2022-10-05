<template>
    <div class="goods_desc" v-if="goodDesc">
        <div class="info_desc">
            <div class="desc_start"></div>
            <div class="desc">{{goodDesc.desc}}</div>
            <div class="desc_end"></div>
        </div>

        <div v-for="(item,index) in goodDesc.detailImage" :key="index">
            <div class="info_key">{{item.key}}</div>
            <div class="info_list">
                <img v-for="(item1,index) in item.list" :key="index" v-lazy="item1"
                    @load="imgLoad(index,item.list.length)">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "detailGoodsDesc",
    props: {
        goodDesc: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        imgLoad(index, len) {
            if (index === len - 1) {
                this.$bus.$emit("refresh")
            }
        }
    }
}
</script>

<style lang="less" scoped>
.goods_desc {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
}

.info_desc {
    padding: 0 15px;

    .desc {
        padding: 15px 0;
        font-size: 14px;
    }
}

.desc_start,
.desc_end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
}

.desc_start {
    float: left;
}

.desc_end {
    float: right;
}

.desc_start::before,
.desc_end::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
}

.desc_end::after {
    right: 0
}


.info_key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
}

.info_list img {
    width: 100%;
}
</style>