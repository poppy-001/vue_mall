<template>
    <Swiper class="detail_swiper">
        <SwiperItem v-for="(img,index) in topImages" :key="index">
            <img :src="img">
        </SwiperItem>
    </Swiper>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper.vue';
import SwiperItem from '@/components/common/swiper/SwiperItem.vue';
export default {
    name: "detailSwiper",
    props: {
        topImages: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    components: { Swiper, SwiperItem }
}
</script>

<style lang="less" scoped>
.detail_swiper {
    height: 300px;
    margin-top: 44px;
}
</style>