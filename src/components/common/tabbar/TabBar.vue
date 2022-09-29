<template>
    <div id="tab_bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "TabBar"
}
</script>

<style scoped lang="less">
#tab_bar {
    display: flex;
    align-items: center;
    height: 49px;
    width: 100%;
    background-color: #f6f6f6;

    position: fixed;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.2);

}
</style>    