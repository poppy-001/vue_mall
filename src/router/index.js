import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        component: () => import('../pages/home/HomeMode.vue'),
        meta: { title: "首页" }
    },
    {
        path: "/category",
        component: () => import('../pages/category/CategoryMode.vue'),
        meta: { title: "分类" }
    },
    {
        path: "/profile",
        component: () => import('../pages/profile/ProfileMode.vue'),
        meta: { title: "我的" }
    },
    {
        path: "/shopcar",
        component: () => import('../pages/shopcar/ShopcarMode.vue'),
        meta: { title: "购物车" }
    },
    {
        path: "/detail/:id",
        component: () => import('../pages/detail/detailMode.vue'),
        meta: { title: "商品详情" }
    }
]


const router = new VueRouter({
    mode: 'history',
    routes
})



export default router