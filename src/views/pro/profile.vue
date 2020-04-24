<template>
    <div class="pro">
        <span class="pro_img"><img src="~@/assets/img/pro.jpg"></span>
        <div class="infoBox">
            <span>&#8226;</span>
            <div v-html="name"> </div>
            <span>&#8226;</span>
            <div v-html="stu"> </div>
            <span>&#8226;</span>
            <div v-html="work"></div>
            <span>&#8226;</span>
            <div v-html="blog"> </div>
            <span>&#8226;</span>
            <div v-html="github"></div>
            <span>&#8226;</span>

        </div>
        <div class="skillList">
            {{skillList}}

        </div>
    </div>
</template>

<script>
    export default {
        name: "profile",
        data(){
            return{
                name:"姓名 : 杨璐",
                stu:"学历 : 大学本科在读",
                work:"工作经验 : 暂无",
                blog:"<a href='http://49.235.121.158:80'>博客地址：http://49.235.121.158:80</a>",
                github:"<a href='http://www.github.com/iamyanglu'>github:http://www.github.com/iamyanglu</a>",
                skillList:`技术栈 ：html,css,js  使用 vue-cli进行vue前端开发.掌握 vuex ，vue-router，promise，axios，掌握基本es6语法和简单高阶函数，使用node中express进行简单api编写
                ，掌握node操作mongodb基本知识。`
            }
        }
    }
</script>

<style scoped>
.pro{
    position: fixed;

    height: 100%;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: linear-gradient(#FB704E,#0DCCED);
}

    span.pro_img{
        margin-top:100px;
        display: block;
        width: 100%;
        height: 100px;
        text-align: center;

    }
span.pro_img img{

    width: 70px;
    height: 70px;
    border-radius: 49%;
    transition: all 1s;
}
span.pro_img img:hover{
    padding: 1px;
    border: 1px white double;
}
    .infoBox{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: black;
        font-size: 10px;
        transform: translateX(50%);
    }
    .infoBox div{
        padding: 5px;
        border-left: 1px solid black;
        height: 20px;
        line-height: 20px;
    }
    .skillList{
        text-align: center;
        margin-top: 50px;
        font-size: 14px;
        color: #000;
    }
</style>