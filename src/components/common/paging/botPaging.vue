<template>
    <keep-alive>
    <div class="bot">
        <ul class="pagination">

            <li><a href="#" v-if="this.$store.state.page  > 0" @click.prevent="junPage(-1)"> << </a></li>
            <li><a href="#" class="active"  @click.prevent="junPage(0)">{{pageNumber}}</a></li>
            <li><a href="#" @click.prevent="junPage(1)" v-if="pageNumber + 1 < number/6">{{pageNumber + 1}}</a></li>
            <li><a href="#" @click.prevent="junPage(2)"  v-if="pageNumber + 2 < number/6">{{pageNumber + 2}}</a></li>
            <li><a href="#" @click.prevent="junPage(3)"  v-if="pageNumber + 3 < number/6">{{pageNumber + 3}}</a></li>
            <li><a href="#" @click.prevent="junPage(1)"  v-if="pageNumber + 1 < number/6">>></a></li>

        </ul>
        </div>
    </keep-alive>
</template>

<script>
    export default {
        name: "botPaging",
        props:{
            number:{}
        },
        computed:{
            pageNumber(){
                return this.$store.state.page
            }
        },
        data(){
            return {
                totalPage:0,


            }
        },
        methods:{
            junPage(page){
                console.log(page);
                this.$store.commit('changePage',page)
                this.$emit('sendPage')
            }

        },
        created() {

               console.log('num',this.number);


        }
    }
</script>

<style scoped>
.bot{
   width: 100%;
display: block;text-align: center;
height: 60px;


}
ul.pagination{
    display: inline-block;

}
 ul.pagination li a{
     display: inline;
     text-decoration: none;
 }
ul.pagination li{
    display: inline;
    text-decoration: none;
    margin-left: 2px;
}
ul.pagination li a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: all 1s;

}
ul.pagination li a:hover {
    background-color: lightpink;
}
ul.pagination li a.active {
    background-color: #4CAF50;
    color: white;
}
</style>