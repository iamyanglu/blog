import Router from 'vue-router'
import vue from  'vue'
import backEnd from "../views/backend/backEnd";
const index = () => import('../views/index/index')
const messageBord = ()=> import('../views/messageBorc/bord')
const pro = ()=> import('../views/pro/profile')
const freeSkill = ()=> import('../views/freeskill/freeSkill')
const detail = ()=> import('../views/detail/detailPage')
const log = ()=> import('../views/log/log')



vue.use(Router)
const routes=[
    {
        path:'/',
        redirect:'/profile'
    },
    {
        name:'index',
        path:'/index',
        component:index,

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
    {
        path:"/log",
        component:log
    },




]
const router = new Router({
    routes,
    mode:'history',

})
router.beforeEach((to,frome,next)=>{
    const neeDlog=['/freeSkill']
    console.log(to.fullPath);
    if(neeDlog.indexOf(to.fullPath) > -1)
     {
         next('/log')
     }
     else {
         next()
     }

})


export default router