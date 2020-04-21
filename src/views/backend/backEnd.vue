<template>
    <div class="backend">


        <label>文章标题</label><input v-model="tit">
        <mavon-editor v-model="handhook"/>
        <label>文章描述</label><input v-model="des">
        <button @click="postart">发表</button>

    </div>
</template>

<script>
import {putArt} from "../../network/putart";


export default {
        name: "backEnd",
        data(){
          return {
              tit:"",
              handhook:"# dsajhdkj",
              des:""


          }
        },
        components:{

        },
        methods:{
            postart(){
                const artObj ={
                    tit:this.tit,
                    handhook:this.handhook,
                    des:this.des
                }

              const status =   putArt(artObj)
                if(status ===1){
                    console.log('发表成功');
                }else{
                    console.log('发表失败');
                }

            }
        }
    }
</script>

<style scoped>
.backend{
    margin-top: 70px;
}
</style>