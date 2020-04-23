import Router from 'vue-router'
import vue from  'vue'
import backEnd from "../views/backend/backEnd";
const index = () => import('../views/index/index')
const messageBord = ()=> import('../views/messageBorc/bord')
const pro = ()=> import('../views/pro/profile')
const freeSkill = ()=> import('../views/freeskill/freeSkill')
const detail = ()=> import('../views/detail/detailPage')



vue.use(Router)
const routes=[
    {
        path:'/',
        redirect:'/index'
    },
    {
        path:'/index',
        component:index
    },
    {
        path:"/messageBord",
        component:messageBord
    },
    {
        path:"/profile",
        component:pro
    }
    ,
    {
        path:"/freeSkill",
        component:freeSkill
    },
    {
        path:"/backend",
        component:backEnd
    },
    {
        path:"/detail/:id",
        component:detail
    },




]
const router = new Router({
    routes,
    mode:'history'

})

export default router