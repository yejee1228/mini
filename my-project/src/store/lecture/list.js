import axios from 'axios'

const state = {
    context : '/api/dummyApi/LectureList.json',
    content : [],
    lectureId: ''
};
const getters = {
    content : state => state.content,
    lectureId: state => state.lectureId
};
const actions = {
    async getLectures({commit}){
        let config = {
            headers:{'Access-Control-Allow-Origin':'*'}
        };
        axios.get(state.context, config)
            .then((data)=>{
                commit('GETLECTURES', data.data.data.content)
                console.log(data.data.data.content)
                console.log(state.content)
            })
            .catch(()=>{
                alert('잘못된 요청입니다.')
            })
    },
    lectureId({commit}, data){
      commit('LECTUREID', data)
    }
};
const mutations = {
    GETLECTURES(state, data) {
      state.content = data
    },
    LECTUREID(state, data) {
      state.lectureId = data
    }
}

export default {
    name: 'list',
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
