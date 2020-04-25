<template>
    <div class="navbar">
        <navbar>
            <div slot="left"><img src="~@/assets/img/light.png"></div>
            <div slot="left_on"><img src="~@/assets/img/light.png"></div>
            <navbar-item v-for="item in list" slot="center" :text="item.txt" :link="item.link">
            </navbar-item>
        </navbar>
    </div>
</template>

<script>
    import navbar from  '@/components/common/navbar/perNavbar'
    import navbarItem from  '@/components/common/navbar/navbaritem'
    export default {
        name: "mainnavcar",
        components:{
            navbar,
            navbarItem
        },
        data:()=>{
            return {
                list:[
                    {txt:'首页',link:'/index'},
                    {txt:'留言',link:'/messageBord'},
                    {txt:'简介',link:'/profile'},
                    {txt:'工具',link:'/freeSkill'},
                    {txt:'文章',link:'/backend'}
                ]
            }
        }
    }
</script>

<style scoped>


</style>