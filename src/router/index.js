import Vue from 'vue'
import VueRouter from 'vue-router'

import ViewUI from 'view-design';
Vue.use(ViewUI);


Vue.use(VueRouter)

const routes = [{
  path: "/login",
  meta: {
    anonymous: false,
    parentTitle: "登录页"
  },
  component: () => import('../views/loginweb'),
  beforeEnter: (to, from, next) => {
    next()
  },
}, {
  path: '/index',
  meta: {
    anonymous: true,
    parentTitle: "首页"
  },
  component: () => import('../views/index'),

  children: [{
      path: "/personal",
      meta: {
        anonymous: true,
        parentTitle: "操作流程",
        title: "个人中心"
      },
      component: () => import('../views/right_view/personal'),
    },
    {
      path: "/cate_order",
      meta: {
        anonymous: true,
        parentTitle: "操作流程",
        title: "商品管理"
      },
      component: () => import("../views/right_view/cate_order")
    },
    {
      path: "/return_order",
      meta: {
        anonymous: true,
        parentTitle: "操作流程",
        title: "退货管理"
      }, //是否匿名
      component: () => import("../views/right_view/return_order")
    },
    {
      path: "/shop_order",
      meta: {
        anonymous: true,
        parentTitle: "操作流程",
        title: "订单管理"
      },
      component: () => import("../views/right_view/shop_order")
    },
    {
      path: "/complain_order",
      meta: {
        anonymous: true,
        parentTitle: "操作流程",
        title: "投诉管理"
      },
      component: () => import("../views/right_view/complain_order")
    },
  ]
}, ]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})





//路由拦截****路由守卫
router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  // if (!to.meta.anonymous && !sessionStorage.getItem("loginuser"))
  //   next("/login")
  // else
  next()
})



router.afterEach(() => {
  ViewUI.LoadingBar.finish();
});



export default router