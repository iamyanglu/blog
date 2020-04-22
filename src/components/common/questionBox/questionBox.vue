<template>
    <div class="quesBoxItem" @click="btnClick">

        <div class="tit"><h2>{{item.tit}}</h2></div>
        <div class="des">des:{{item.des}}</div>
        <div class="time">{{item.data | cheacktime}}</div>
    </div>
</template>

<script>

    export default {
        name: "questionBox",
        props:{
                item:{
                    type:Object
                }
        },
        filters:{
            cheacktime(data)
            {  const y = new Date(data).getFullYear()
                const m = new Date(data).getMonth()+1
                return y+'/'+m
            }
        },
        components:{

        },
        data:function () {
            return {

            }
        }

    }
</script>

<style scoped>
.quesBoxItem{
    padding-top: 10px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 500px;
    height: 150px;
    margin-bottom: 30px;
    position: relative;
}
    .time{
        position: absolute;
        bottom: 5px;
        right: 20px;
        color: #666666;
    }
</style>