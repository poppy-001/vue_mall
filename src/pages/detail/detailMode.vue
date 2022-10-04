<template>
    <div class="detail">
        <DetailNavbar :titles='[" 商品", "参数" , "评论" , "推荐" ]' @navbarClick="navbarClick" ref="navbarRef" />
        <Scroll class=" content" :probeType='3' ref="scrollRef" @scroll="detailScroll">
            <DetailSwiper :topImages="topImages" />
            <DetailBaseInfo :goodsInfo="goodsInfo" />
            <DetailShopInfo :shopInfo="shopInfo" />
            <DetailGoodsDesc :goodDesc="goodDesc" />
            <DetailItemParams :itemParams="itemParams" ref="itemParamsRef" />
            <DetailComment :detailComment="detailComment" ref="itemCommentRef" />
            <DetailRecommend :recommendList="recommendList" ref="itemRecommendRef" />
        </Scroll>

        <DetailBottomBar @addcart="addcart" />
        <BackTop @click.native="backTop" v-show="isBackToShow"></BackTop>
    </div>
</template>

<script>
import { getGoodDetail, getRecommend } from '@/network/detail'


import Scroll from '@/components/common/scroll/Scroll.vue'
import { backTop } from '@/utils/mixin'

import DetailNavbar from './childDetail/detailNavbar.vue'
import DetailSwiper from './childDetail/detailSwiper.vue';
import DetailBaseInfo from './childDetail/detailBaseInfo.vue';
import DetailShopInfo from './childDetail/detailShopInfo.vue';
import DetailGoodsDesc from './childDetail/detailGoodsDesc.vue';
import DetailItemParams from './childDetail/detailItemParams.vue';
import DetailComment from './childDetail/detailComment.vue';
import DetailRecommend from './childDetail/detailRecommend.vue';
import DetailBottomBar from './childDetail/detailBottomBar.vue';
export default {
    name: "detailMode",
    data() {
        return {
            iid: this.$route.params.id,
            topImages: null,
            goodsInfo: null,

            shopInfo: null,
            goodDesc: null,
            itemParams: null,
            detailComment: null,
            // 推荐商品
            recommendList: null,
            toScrollY: 0,
            currentIdx: 0,

        };
    },
    created() {
        this.getGoodDetail();
        this.getRecommend()
    },
    mounted() {
        this.$bus.$on("refresh", this.refresh)
    },
    destroyed() {
        this.$bus.$off("refresh", this.refresh)
    },
    methods: {
        async getGoodDetail() {
            const { data: res } = await getGoodDetail(this.iid);

            this.topImages = res.result.itemInfo.topImages
            const data = res.result
            this.goodsInfo = {
                title: data.itemInfo.title,
                desc: data.itemInfo.desc,
                newPrice: data.itemInfo.price,
                oldPrice: data.itemInfo.oldPrice,
                discount: data.itemInfo.discountDesc,
                discountBgColor: data.itemInfo.discountBgColor,
                columns: data.columns,
                services: data.shopInfo.services,
                realPrice: data.itemInfo.lowNowPrice
            };
            this.shopInfo = {
                logo: data.shopInfo.shopLogo,
                name: data.shopInfo.name,
                fans: data.shopInfo.cFans,
                sells: data.shopInfo.cSells,
                score: data.shopInfo.score,
                goodsCount: data.shopInfo.cGoods,
            };
            this.goodDesc = data.detailInfo;
            this.itemParams = data.itemParams
            this.detailComment = data.rate
        },
        async getRecommend() {
            const { data: res } = await getRecommend()
            if (!res.success) return alert("获取推荐列表失败")
            this.recommendList = res.data.list
        },
        detailScroll(position) {
            const positionY = -position.y

            this.judgeBack(position)

            if (positionY >= 0 && positionY < this.$refs.itemParamsRef.$el.offsetTop) {
                this.currentIdx = 0
            } else if (positionY >= this.$refs.itemParamsRef.$el.offsetTop && positionY < this.$refs.itemCommentRef.$el.offsetTop) {
                this.currentIdx = 1
            } else if (positionY >= this.$refs.itemCommentRef.$el.offsetTop && positionY < this.$refs.itemRecommendRef.$el.offsetTop) {
                this.currentIdx = 2
            } else {
                this.currentIdx = 3
            }

            this.$refs.navbarRef.currentIdx = this.currentIdx

        },
        refresh() {
            try {
                this.$refs.scrollRef.refresh()
            } catch {
                err => err
            }

        },
        navbarClick(index) {
            switch (index) {
                case 0:
                    this.toScrollY = 0
                    break;
                case 1:
                    this.toScrollY = this.$refs.itemParamsRef.$el.offsetTop
                    break;
                case 2:
                    this.toScrollY = this.$refs.itemCommentRef.$el.offsetTop
                    break;
                case 3:
                    this.toScrollY = this.$refs.itemRecommendRef.$el.offsetTop
                    break;

            }
            this.$refs.scrollRef.scrollTo(0, -this.toScrollY, 500)
        },

        //添加商品
        addcart(){
            
        }

    },
    components: { DetailNavbar, DetailSwiper, DetailBaseInfo, Scroll, DetailShopInfo, DetailGoodsDesc, DetailItemParams, DetailComment, DetailRecommend, DetailBottomBar },
    mixins: [backTop]
}
</script>

<style scoped>
.detail {
    position: absolute;
    height: 100vh;
    z-index: 999;
    background-color: #fff;
}



.detail_nav_bar {
    display: flex;
    justify-content: space-around;
}

.content {
    height: calc(100% - 44px);
}
</style>