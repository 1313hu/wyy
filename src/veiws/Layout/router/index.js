// 路由-相关模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Home from "@/veiws/Home"
import Search from "@/veiws/Search"

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/layout'
    },
    {
        path: '/layout',
        component: Layout,
        children: [
            {
                path: '/layout/home',
                component: Home
            },
            {
                path: '/layout/search',
                component: Search
            }
]
}
    
]

const router = new VueRouter({
    routes
})

export default router