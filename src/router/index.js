import Vue from 'vue'
import Router from 'vue-router'
import HomeF from '@/containers/HomeF'
import HomeS from '@/containers/HomeS'
import ReleaseRecruitment from '@/containers/ReleaseRecruitment'
import RecruitD from '@/containers/RecruitD'
import RecruitPost from '@/containers/RecruitPost'
import RecruitShow from '@/containers/RecruitShow'
import Resume from '@/containers/Resume'
import ResumeD from '@/containers/ResumeD'
import ResumePost from '@/containers/ResumePost'
import Purchased from '@/containers/Purchased'
import MyInfo from '@/containers/MyInfo'
import PhoneNumber from '@/containers/PhoneNumber'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeF',
      component: HomeF
    },
   {
      path: '/homeS',
      name: 'HomeS',
      component: HomeS
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
    },
     {
      path: '/recruitShow',
     name: 'RecruitShow',
     component: RecruitShow
    },
    
    {
      path: '/resume',
     name: 'Resume',
     component: Resume
    },{
      path: '/resumeD',
     name: 'ResumeD',
     component: ResumeD
    },{
      path: '/resumePost',
     name: 'ResumePost',
     component: ResumePost
    },
    
    {
      path: '/purchased',
     name: 'Purchased',
     component: Purchased
    },{
     path: '/myInfo',
     name: 'MyInfo',
     component:MyInfo
    },{
      path: '/phoneNumber',
      name: 'PhoneNumber',
      component:PhoneNumber
     }
    
  ]
})
