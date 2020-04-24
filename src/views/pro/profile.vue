<template>
    <div class="pro">
        <span class="pro_img"><img src="~@/assets/img/pro.jpg"></span>
        <div class="infoBox">
            <span>&#8226;</span>
            <div v-html="name"> </div>
            <span>&#8226;</span>
            <div v-html="stu"> </div>
            <span>&#8226;</span>
            <div v-html="blog"> {</div>
            <span>&#8226;</span>
            <div v-html="blog"></div>
            <span>&#8226;</span>
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
                blog:"<a href='http://49.235.121.158:80'>博客地址：http://49.235.121.158:80</a>",
                github:"github:http://www.github.com/iamyanglu"
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
    .baseInfo{
        margin: 100px 0 100px 0;
        width: 400px;
        height: 400px;
        background-image: linear-gradient(#07C89C,#F42752);
        box-shadow: 5px 10px #888888;
    }
    span.pro_img{
        margin-top:100px;
        display: block;
        width: 100%;
        height: 100px;
        text-align: center;

    }
span.pro_img img{

    width: 75px;
    height: 75px;
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
</style>