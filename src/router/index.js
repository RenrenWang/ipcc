import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'
import ReleaseRecruitment from '@/containers/ReleaseRecruitment'
import RecruitD from '@/containers/RecruitD'
import RecruitPost from '@/containers/RecruitPost'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
     {
      path: '/releaseRecruitment',
      name: 'ReleaseRecruitment',
      component: ReleaseRecruitment
    },
    {
     path: '/recruitD',
     name: 'RecruitD',
     component: RecruitD
   },
    {
      path: '/recruitPost',
     name: 'RecruitPost',
     component: RecruitPost
    }
  ]
})
