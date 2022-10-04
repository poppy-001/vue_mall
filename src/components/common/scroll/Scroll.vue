<template>
    <div class="wrapper" ref="wrapperRef">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: "ScrollMode",
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scroll: null
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapperRef, {
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad,
            click: true
        })

        if (this.probeType === 2 || this.probeType === 3) {
            this.scroll.on("scroll", (position) => {
                this.$emit("scroll", position)
            })
        }


        if (this.pullUpLoad) {
            this.scroll.on("pullingUp", () => {
                setTimeout(() => {
                    this.$emit("pullingUp")
                    this.scroll.finishPullUp()
                    this.scroll.refresh()
                }, 1000);
            })
        }

    },
    methods: {
        scrollTo(x, y, time = 500) {
            this.scroll.scrollTo(x, y, time)
        },
        refresh() {
            this.scroll.refresh()
        }
    }
}
</script>


<style>

</style>