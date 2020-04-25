<template>
    <div id="navbar">
        <div class="left" v-if="isLight" @click="changeColor">   <slot name="left"></slot> </div>
        <div class="left" v-else @click="changeColor">   <slot name="left_on"></slot> </div>
        <div class="center"> <slot name="center"></slot></div>
        <div class="right" ><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "perNavbar",
        computed:{
            isLight(){
                return this.flag
            }
        },
        methods:{
            changeColor(){
                this.flag = !this.flag
                this.$store.commit('changeColor')

            }

        },
        data:function () {
            return {
                flag:true
            }
        }
    }
</script>

<style scoped>

#navbar{
    display: flex;
    position: fixed;
    top:0px;
    z-index: 999;
    width: 100%;
    height: 49px;
    background-color:rgb(255,255,255);
    border-bottom: 2px solid #eeeeee ;

}
    .left,.right ,.center{

        font-size:14px;
       display: inline-block;
    }
    .left{

       padding-left: 20px;
        width: 27%;

        height: 49px;
      line-height: 49px;
    }

    .right{
        display: inline-block;
        width: 20%;
        height: 100%;
        margin-left: auto;
        }
    .center{
        font-size: 0.8em;
        width: 40%;

        left: 30%;
        position: fixed;
        display: flex inline;
        text-align: center;
    }
.left img{
        width: 20px;
         vertical-align: middle
    }
    .left img:hover{
        background-color: #eeeeee;
    }
    .right img{
        width:25px;
        vertical-align: middle;
    }



</style>