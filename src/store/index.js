import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    cartList: [
        // {
        //     count: 1,
        //     desc: "你的运动套装，也可以一起承包了~棉混纺的连帽卫衣，版型虽宽松，但因为有罗纹收口，穿起来立体挺括，能遮住多余的腰腹和双臂肉肉，展现青春活力.下半身搭配浅色直筒牛仔裤，向来是竹竿腿的助攻，翻边上的亮粉字母数字，和上衣一个调调，闪闪地时尚别致.清清爽爽的运动风其实也很拉好感der~",
        //     iid: "1m745k0",
        //     image: "//s11.mogucdn.com/mlcdn/c45406/180811_1k5hfa6d803575df3lkb6j67l5j3c_640x960.jpg",
        //     price: "¥68.00",
        //     title: "2018秋季新款韩版女装字母印花宽松连帽休闲卫衣搭配松紧腰九分牛仔裤两件套女时"
        // }
    ]
}

const actions = {
    addCart(context, good) {
        const judgeGoodsIn = context.state.cartList.find(item => {
            return item.iid === good.iid
        })

        if (judgeGoodsIn) {
            context.commit("ADDCNT", judgeGoodsIn)
        } else {
            context.commit("ADDCART", good)
        }
    },
    checkgood(context, good) {
        const FindGood = context.state.cartList.find(item => {
            return item.iid === good.iid
        })
        context.commit("CHECKGOOD", FindGood)



    }
}

const mutations = {
    ADDCART(state, good) {
        good.count = 1
        state.cartList.push(good)
    },
    ADDCNT(_, value) {
        value.count++
    },
    CHECKGOOD(_, good) {
        good.ischeck = !good.ischeck
    },

    // 全选
    SELECTALL(state, value) {
        state.cartList.forEach(item => {
            item.ischeck = value
        });
    }
}

export default new Vuex.Store({
    state, mutations, actions
})