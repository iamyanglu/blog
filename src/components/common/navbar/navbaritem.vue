<template>
    <div @click="btnClick" class="item" :style="getStyle">
        <div>{{text}}</div>
    </div>
</template>

<script>
    export default {
        name: "navbaritem",
        props:{
            link:{
                type:String
            },
            text:{
                type:String

            }
        },
        computed:{
            isActive(){
                return !this.$route.path.indexOf(this.link)
            },
            getStyle(){
                return this.isActive ? {'color':'red'} : {}
            }


        },
        methods:{
            btnClick(){


                this.$router.push(this.link)
            }
        }
    }
</script>

<style scoped>

    .item{

    line-height: 49px;
    cursor: pointer;
    flex: 1;
    width:50px;
    height: 49px;
    display: inline-block;

}
</style>