import { debounce } from '@/utils/tools'
import BackTop from '@/components/content/backTop/backTop.vue';

export const mixins = {
    data() {
        return {
            refreshfn: null,
        }
    },
    mounted() {
        this.refreshfn = debounce(this.refresh, 500)
        this.$bus.$on("refresh", this.refreshfn)
    },
    deactivated() {
        this.$bus.$off("refresh", this.refreshfn)
    },
}

export const backTop = {
    data() {
        return {
            isBackToShow: false,
        }
    },
    methods: {
        backTop() {
            this.$refs.scrollRef.scroll.scrollTo(0, 0, 500)
        },
        judgeBack(position) {
            this.isBackToShow = -position.y > 1000
        }
    },
    components: { BackTop }
}