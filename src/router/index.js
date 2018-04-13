import Vue from 'vue'
import Router from 'vue-router'
import ScheduleList from '@/components/ScheduleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ScheduleList',
      component: ScheduleList
    }
  ]
})
