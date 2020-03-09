import Vue from 'vue'
import Router from 'vue-router'
import LectureList from '@/components/LectureList.vue'
import LectureDetail from '@/components/LectureDetail.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path: '/', name: 'lecturelist', component: LectureList},
        {path: '/lecturedetail', name: 'lecturedetail', component: LectureDetail},
    ]
})
