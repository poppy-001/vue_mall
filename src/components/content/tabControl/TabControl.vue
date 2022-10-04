<template>
    <div class="tab-control">
        <div class="tab-control-item" v-for="(item,index) in titles" :key="index" @click="clickTab(index)"
            :class='{active:index===currentIdx}'>
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "TabControl",
    props: {
        titles: {
            type: Array
        }
    },
    data() {
        return {
            currentIdx: 0
        }
    },
    methods: {
        clickTab(index) {
            this.currentIdx = index
            this.$emit("tabClick", index)
        }
    }
}
</script>

<style scoped lang="less">
.tab-control {
    position: sticky;
    top: 44px;
    display: flex;
    height: 44px;
    align-items: center;
    background-color: #fff;
}

.tab-control-item {
    flex: 1;
    text-align: center;


}

.active {
    color: var(--color-high-text);

    span {
        border-bottom: 2px solid var(--color-high-text);
        padding: 5px;
    }
}
</style>