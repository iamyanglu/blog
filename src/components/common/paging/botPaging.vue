<template>
    <div class="bot"><button @click="headPage" :v-if="this.$store.state.page !=0 ">首页</button>
        <button @click="prepage" :v-if="this.$store.state.page > 1">上一页</button>
        <button @click="jumpage">跳转</button><input v-model.Number="pageNumber" class="pageinput" size="1">
        <button @click="nextPage">下一页</button>
        <button @click="tailPage">尾页</button>
        </div>
</template>

<script>
    export default {
        name: "botPaging",
        props:{
            number:{}
        },
        data(){
            return {
                compNumber:0,
                pageNumber:0
            }
        },
        methods:{
            headPage(){
                this. pageNumber =0
                this.transNumber()

            },
            prepage(){
                this. pageNumber -=1
                this.transNumber()
            },
            jumpage(){
                this.pageNumber=this.compNumber
                this.transNumber()
            },
            nextPage(){
                this.pageNumber+=1
                this.transNumber()
            },
            tailPage(){
                this.pageNumber = this.number
                this.transNumber()
            },
            transNumber(){
                this.$emit('sendPage',this.pageNumber)
            }

        },
        created() {
            if(this.number < 4){
                this.compNumber = this.number
            }
        }
    }
</script>

<style scoped>
.bot{
height: 60px;
    width: 300px;

}
    .pageinput{
    }
</style>