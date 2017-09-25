import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'
import ReleaseRecruitment from '@/containers/ReleaseRecruitment'

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
    }
  ]
})
