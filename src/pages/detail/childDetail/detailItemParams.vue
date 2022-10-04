<template>
    <div class="item_params" v-if="itemParams">
        <table class="item_rule">
            <tr v-for="(tr,index) in itemParams.rule.tables[0]" :key="index">
                <td v-for="(item,index) in tr" :key="index">{{item}}</td>
            </tr>
        </table>

        <table class="item_info">
            <tr v-for="(item,index) in itemParams.info.set" :key="index">
                <td class="key">{{item.key}}</td>
                <td class="value">{{item.value}}</td>
            </tr>
        </table>

        <div class="info_img" v-if="itemParams.info.images">
            <img :src="itemParams.info.images[0]" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "detailItemParams",
    props: {
        itemParams: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style lang="less" scoped>
.item_params {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
}

.item_rule,
.item_info {
    width: 100%;
    border-collapse: collapse;

    tr {
        height: 42px;
    }

    td {
        border-bottom: 1px solid rgba(100, 100, 100, .1);
    }
}

.item_info .key {
    width: 95px;
}

.item_info .value {
    color: #eb4868
}

.info_img img {
    width: 100%;
}
</style>