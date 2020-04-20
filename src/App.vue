<template>
  <div id="app" >
      <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
    import navBar from '@/components/comtent/mainnavbar'
export default {

  name: 'App',
    components:{ navBar},
    computed:{
      getbgColor(){
          return this.$store.state.bgColor
      }
    },
    created(){
      document.body.style.backgroundColor=this.$store.state.bgcColor
    }
}
</script>

<style>
@import "assets/css/base.css";
</style>
