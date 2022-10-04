<template>
    <Swiper>
        <swiper-item v-for="(item,index) in banner" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="swiperLoad">
            </a>
        </swiper-item>
    </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper'

export default {
    name: 'homeSwiper',
    components: { Swiper, SwiperItem },
    props: {
        banner: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        swiperLoad() {
            this.$bus.$emit("swiperLoad")
        }
    }
}
</script>

<style>

</style>