// 路由-相关模块
import Vue from 'vue'
import VueRouter from 'vue-router';
import Layout from '@/veiws/Layout';
import Home from "@/veiws/Home";
import Search from "@/veiws/Search";

Vue.use(VueRouter)
const routes =[ {
    path: '/layout',
    component: Layout,
    children: [
      {
        path: '/layout/home',
        meta: {
          title: '首页'
        },
        component: Home
      },
      {
        path: '/layout/search',
        meta: {
          title: '搜索'
        },
        component: Search
      }
    ]
},{
    path: "/",
    redirect: '/layout/home'
}]
const router = new VueRouter({
    routes
})

export default router