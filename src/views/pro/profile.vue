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
            <div v-html="email"></div>
            <span>&#8226;</span>
            <div v-html="blog"> </div>
            <span>&#8226;</span>
            <div v-html="github"></div>
            <span>&#8226;</span>
        </div>
        <div class="skilldiv">
            <div class="skillList" v-html="skillList">

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "profile",

        computed:{

            skillList(){
                let str1 = this.skilllist
                let r = str1.match(/@.*?-/ig)

                for (let index =0;index<r.length;index++)
                {
                    str1 =str1.replace(r[index],'<a style="color: red">'+r[index]+ '</a>')
                }

                str1 = str1.replace(/@/ig,'')
                str1 = str1.replace(/-/ig,'')
                return str1
            }
        },
        data(){
            return{
                name:"姓名 : 杨璐",
                stu:"学历 : 大学本科在读",
                work:"工作经验 : 暂无",
                email:"邮箱地址:499339182@qq.com",
                blog:"<a href='http://49.235.121.158:80' target='view_window'>博客地址：http://49.235.121.158:80</a>",
                github:"<a href='http://www.github.com/iamyanglu' target='view_window'>github:http://www.github.com/iamyanglu</a>",
                skilllist:'技术栈 ：@html-,@css-,@js-  使用 vue-cli进行@vue-前端开发.掌握 @vuex- ，@vueRouter-，@promise-，@axios-，掌握基本es6语法和简单高阶函数，' +
                    'webpack基本打包知识,使用node中express进行简单api编写，掌握@node-操作@mongodb-基本知识.'
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

    .skilldiv{
        width: 100%;
    }
    .skillList{
        margin: 20px auto;
        width: 80%;
        cursor: pointer;
        font-size: 14px;
        color: #000;
    }



</style>