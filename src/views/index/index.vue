<template>
    <div class="index">

        <main-index :artlist="artlist" @redPage="junP" :totalArt=" totalArt"></main-index>


    </div>
</template>

<script>
    import mainIndex from '@/components/comtent/mainIndexC'
    import {getIndexart} from "../../network/home";
    import idCard from '@/components/comtent/idCard'

    export default {
        name: "index",
        components: {
            mainIndex,
            idCard
        },
        data: function () {
            return {
             artlist:[],
                totalArt:0

            }

        },
        methods: {
            getArtList() {
                getIndexart({url: '/getart?page='+this.$store.state.page}).then(res=>{
                    this.artlist = res.data


                })

            },
            junP(){

               this.getArtList()
            },
            getTotal(){

                getIndexart({url:'/gettoTalart'}).then(res =>{

                    this.totalArt = parseInt(res.data)
                    console.log(this.totalArt);

                })
            }
        },

        created() {
                this.getArtList()
                this.getTotal()
        }

    }
</script>

<style scoped>
body{
    background-color: #000000;
}

</style>