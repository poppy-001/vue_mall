<template>
    <div class="tab_bar_item" @click="handleActive(path)">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :style="isActive?{color:activeColor}:{}">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "TabBarItem",
    props: {
        path: String,
        activeColor: {
            type: String,
            default: "#ff5777"
        }
    },
    methods: {
        handleActive(path) {
            this.$router.replace(path).catch(err => err)
        }
    },
    computed: {
        isActive() {
            return this.$route.path === this.path
        }
    }
}
</script>

<style lang="less" scoped>
.tab_bar_item {
    flex: 1;
    text-align: center;

    img {
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
}
</style>