<template>
    <div class="backTop">
        <img src="@/assets/img/common/top.png">
    </div>
</template>

<script>
export default {
    name: "backTop",
}
</script>

<style scoped lang="less">
.backTop {
    position: fixed;
    bottom: 60px;
    right: -20px;

    img {
        width: 60%;
    }
}
</style>