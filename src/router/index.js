import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'
import ReleaseRecruitment from '@/containers/ReleaseRecruitment'
import RecruitD from '@/containers/RecruitD'
import RecruitPost from '@/containers/RecruitPost'
import Resume from '@/containers/Resume'
import ResumeD from '@/containers/ResumeD'
import Purchased from '@/containers/Purchased'
import MyInfo from '@/containers/MyInfo'

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
    },{
      path: '/resume',
     name: 'Resume',
     component: Resume
    },{
      path: '/resumeD',
     name: 'ResumeD',
     component: ResumeD
    },{
      path: '/purchased',
     name: 'Purchased',
     component: Purchased
    },{
     path: '/myInfo',
     name: 'MyInfo',
     component:MyInfo
    }
    
  ]
})
