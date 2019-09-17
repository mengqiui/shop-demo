import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index.vue'
import giftShop from '@/components/product/giftShop.vue'
import shopDetail from '@/components/product/goodDetail.vue'
import admin from '@/components/admin/admin.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index', 
      component: index
    },
    {
      path: '/giftShop',
      name: 'giftShop', 
      component: giftShop,
      children:[
        {
          path:'/shopDetail:goodinfo',
          name: 'shopDetail',
          component:shopDetail
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin', 
      component: admin
    },
  ]
})
