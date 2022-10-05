<template>
    <div class="toast" v-if="isshowToast">
        {{msg}}
    </div>
</template>

<script>
export default {
    name: "toastPlugin",
    data() {
        return {
            msg: "",
            isshowToast: false
        }
    },
    methods: {
        show(msg, time) {
            this.isshowToast = true;
            this.msg = msg;

            setTimeout(() => {
                this.isshowToast = false
            }, time)
        }
    }
}
</script>

<style lang="less" scoped>
.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 10px 15px;
    background-color: rgba(0, 0, 0, .75);
    color: #fff;
    border-radius: 5px;
    z-index: 9999;
}
</style>