<template>
    <div :class="{active:ischeck}">
        <img src="@/assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
export default {
    name: "checkBtn",
    props: {
        ischeck: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="less" scoped>
div {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #aaa;
}

.active {
    background-color: var(--color-tint);
    border: 0;
}
</style>