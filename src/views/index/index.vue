<template>
    <div class="index">
        <main-index :artlist="artlist" @redPage="junP"></main-index>
    </div>
</template>

<script>
    import mainIndex from '@/components/comtent/mainIndexC'
    import {getIndexart} from "../../network/home";

    export default {
        name: "index",
        components: {
            mainIndex
        },
        data: function () {
            return {
             artlist:[],

            }

        },
        methods: {
            getArtList() {
                getIndexart({url: '/getart?page='+this.$store.state.page}).then(res=>{
                    this.artlist = res.data

                })

            },
            junP(data){
                this.$store.commit('changePage',data)
               this.getArtList()
            }
        },
        created() {
                this.getArtList()
        }

    }
</script>

<style scoped>
body{
    background-color: #000000;
}

</style>