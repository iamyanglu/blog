<template>
    <div id="idCard">
        <p></p>
    </div>
    
</template>

<script>
    export default {
        name: "idCard"
    }
</script>

<style scoped>
#idCard{
    position: absolute;
    top:80px;
    right: 10px;
    width: 300px;
    height: 600px;
    border: 1px black solid;
    display: inline-block;
  background-image: linear-gradient(to bottom right,rgba(255,255,255,.0),rgba(0,0,0,.0));
}

</style>