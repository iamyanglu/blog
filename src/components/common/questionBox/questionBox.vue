<template>

    <div class="quesBoxItem" @click="btnClick">

            <div class="tit"><h3>{{item.tit}}</h3></div>
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
                const d = new Date(data).getDay()
                return y+'/'+m + '/' + d
            }
        },
        components:{

        },
        data:function () {
            return {

            }
        },
        methods:{
            btnClick(){
                this.$router.push('/detail/'+this.item._id)
            }
        }

    }
</script>

<style scoped>
.quesBoxItem{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    height: 125px;
    padding-top: 10px;
    margin:30px 20px 30px 0;
    border-radius:9px;
    border: 1px double black;
    transition:transform 0.5s ;
    cursor: pointer;
    text-align: center;

}
.quesBoxItem:hover{
transform: translate(-10px,-10px);

}
.des{

    width: 100%;
}
.tit{
    width: 100%;


}

    .time{
        position: absolute;
        bottom: 5px;
        right: 20px;
        color: #666666;
    }




</style>