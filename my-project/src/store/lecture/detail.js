import axios from 'axios'

const state = {
    context : '/api/dummyApi/LectureDetail-Basic.json',
    detail : {},
};
const getters = {
    detail : state => state.detail
};
const actions = {
    async getDetail({commit}){
        let config = {
            headers:{'Access-Control-Allow-Origin':'*'}
        }
        axios.get(state.context, config)
            .then((data)=>{
                commit('GETDETAIL', data.data.data)
              console.log(state.detail)
            })
            .catch(()=>{
                alert('잘못된 요청입니다.')
            })
    }
};
const mutations = {
    GETDETAIL(state, data) {
        state.detail = data
    },
}

export default {
    name: 'detail',
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
