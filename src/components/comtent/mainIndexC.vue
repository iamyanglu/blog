<template>
    <div class="mainBox">

        <qusetion-box  v-for="item in artlist" :item="item"></qusetion-box>


        <bot :number="totalArt" @sendPage="rediPage" v-if="totalArt > 0"></bot>

    </div>
</template>

<script>
    import qusetionBox from '@/components/common/questionBox/questionBox'
    import bot from '@/components/common/paging/botPaging'
    export default {

        name: "mainIndexC",

        components:{
            qusetionBox,
            bot
        },
        methods:{
            rediPage()
            {
                this.$emit("redPage")

            }
        },
        props:['artlist','totalArt']
    }
</script>

<style scoped>
.mainBox{
    margin-top: 50px;
    margin-left: 10%;
    width:80%;
    display: inline-block;
   display: flex;
   flex-wrap: wrap;
    justify-content: center;

}

</style>