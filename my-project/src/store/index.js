import Vue from 'vue'
import Vuex from 'vuex'
import list from "./lecture/list"
import detail from "./lecture/detail"


Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        list,
        detail
    }
})