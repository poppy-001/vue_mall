<template>
    <div class="nav_bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style lang="less" scoped>
.nav_bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 44px;
    width: 100%;
    z-index: 99;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    max-width: 750px;
    margin: auto;

}

.left,
.right {
    width: 60px;
}

.center {
    flex: 1;
}
</style>