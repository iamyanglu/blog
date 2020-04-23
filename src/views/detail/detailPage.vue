<template>
    <div>
        <div class="handbook">
        <mavon-editor :value="art"  defaultOpen="preview"  :toolbarsFlag="false" :subfield="false"  />
        </div>
    </div>
</template>

<script>
    import {getIndexart} from "../../network/home";

    export default {
        name: "detailPage",
        data(){
            return{
                id:0,
                art:" "
            }
        },
        methods:{

            getdetailArt()
            {getIndexart({url:"/detailArt?id=" + this.id}).then(res=>{
                this.art = res.data[0].content

            })

            }

        },
        created(){
            this.id = this.$route.params.id
            this.getdetailArt()

        }
    }
</script>

<style scoped>
.handbook{
    position: relative;

}
</style>