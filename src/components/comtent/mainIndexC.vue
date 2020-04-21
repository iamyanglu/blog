<template>
    <div class="mainBox">
        <qusetion-box  v-for="item in artlist" :item="item"></qusetion-box>
        <bot number=20 @sendPage="rediPage"></bot>
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
            rediPage(data)
            {
                this.$emit("redPage",data)

            }
        },
        props:['artlist']
    }
</script>

<style scoped>
.mainBox{

    margin-top: 100px;
    margin-bottom: 30px;
    margin-left: 200px;
    padding-left: 50px;

    width: 700px;
    height: 600px;

    text-align: center;
}
</style>