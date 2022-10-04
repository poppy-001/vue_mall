import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    cartList: []
}

export default new Vuex.Store({
    state
})