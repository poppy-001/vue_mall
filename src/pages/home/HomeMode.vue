<template>
    <div id="home">
        <NavBar class="home_navbar">
            <div slot="center">购物街</div>
        </NavBar>
        <TabControl :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControlRef2" v-show="isTabFixed"
            class="tabcontrol2">
        </TabControl>
        <Scroll class="content" ref="scrollRef" :probeType="3" :pullUpLoad="true" @scroll="scrollPosition"
            @pullingUp="pullingUp">
            <homeSwiper :banner="banner.list"></homeSwiper>
            <Recommand :recommend="recommend.list"></Recommand>
            <FeatureWeek></FeatureWeek>
            <TabControl :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControlRef1" v-show="!isTabFixed">
            </TabControl>
            <GoodsList :goods="goods[currentType].list"></GoodsList>
        </Scroll>

        <BackTop @click.native="backTop" v-show="isBackToShow"></BackTop>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
import Scroll from '@/components/common/scroll/Scroll.vue'

import TabControl from '@/components/content/tabControl/TabControl.vue';
import GoodsList from '@/components/content/goodsList/GoodsList.vue';


import homeSwiper from './childHome/homeSwiper.vue'
import Recommand from './childHome/recommend.vue';
import FeatureWeek from './childHome/featureWeek.vue';


import { getHomeMultidata, getHomeGoods } from '@/network/home.js'
import { mixins, backTop } from '@/utils/mixin'

export default {
    name: "HomeMode",
    components: { NavBar, homeSwiper, Recommand, FeatureWeek, TabControl, GoodsList, Scroll },
    created() {
        //请求首页多条数据
        this.getHomeMultidata()

        //请求首页商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    },
    mounted() {
        this.$bus.$on("swiperLoad", () => {
            this.tabOffsetTop = this.$refs.tabControlRef1.$el.offsetTop
        })
    },

    data() {
        return {
            banner: [],
            dKeyword: [],
            recommend: [],
            goods: {
                'pop': { page: 0, list: [] },
                'new': { page: 0, list: [] },
                'sell': { page: 0, list: [] }
            },
            currentType: 'pop',
            tabOffsetTop: 0,
            isTabFixed: false,
            saveY: 0,
            refreshfn: null,
        }
    },

    methods: {
        async getHomeMultidata() {
            const { data: res } = await getHomeMultidata()
            if (res.success) {
                this.banner = res.data.banner
                this.dKeyword = res.data.dKeyword
                this.recommend = res.data.recommend
            }
        },
        async getHomeGoods(type) {
            const page = this.goods[type].page + 1
            const { data: res } = await getHomeGoods(type, page)

            // console.log(res);

            this.goods[type].list.push(...res.data.list)
            this.goods[type].page++

        },
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentType = 'pop'
                    break
                case 1:
                    this.currentType = 'new'
                    break
                case 2:
                    this.currentType = 'sell'
                    break
            }

            this.$refs.tabControlRef1.currentIdx = index
            this.$refs.tabControlRef2.currentIdx = index
        },
        scrollPosition(position) {
            this.judgeBack(position)

            this.isTabFixed = -position.y > this.tabOffsetTop
        },
        pullingUp() {
            this.getHomeGoods(this.currentType)
        },
        refresh() {
            this.$refs.scrollRef.refresh()
        }
    },
    activated() {
        this.$refs.scrollRef.refresh()
        this.$refs.scrollRef.scrollTo(0, this.saveY, 0)
    },
    deactivated() {
        this.saveY = this.$refs.scrollRef.scroll.y
    },
    mixins: [mixins, backTop]
}
</script>

<style scoped lang="less">
#home {
    padding: 44px 0 49px;
    height: 100vh;
}

.home_navbar {
    background-color: var(--color-tint);
    color: #fff;
}

.content {
    height: 100%;
}

.tabcontrol2 {
    z-index: 99
}
</style>