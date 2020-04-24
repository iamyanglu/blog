<template>
    <div id="idCard">
        <div class="shell">
            <div class="secHand"></div>
            <div class="minHand"></div>
            <div class="faHand"></div>
        </div>
        <span>4:23:11</span>

    </div>
    
</template>

<script>
    export default {
        name: "idCard"
    }
</script>

<style scoped>
#idCard{
    text-align: center;
    position: absolute;
    top: 100px;
    right: 150px;


}
    .shell{
        border-radius: 50%;
        width: 200px;
        height: 200px;
        border: 1px dotted black;
        margin-bottom: 10px;
    }
    .secHand{
        position: absolute;
        width: 1px;
        height: 100px;

        right: 100px;

        border-right:1px solid black ;
        animation: 60s rotaHand infinite;
    }
    .minHand{
        position: absolute;
        width: 1px;
        height: 80px;
        top:20px;
        right: 100px;

        border-right:2px solid black ;
        animation: 3600s rotaHand infinite;
    }
    .faHand{
        position: absolute;
        width: 1px;
        height: 50px;
        top:50px;
        right: 100px;

        border-right:3px solid black ;
        animation: 3600s rotaHand infinite;
    }
    @keyframes rotaHand {
    from{ transform: rotate(0deg) ;transform-origin: 0 100%}
        to{   transform: rotate(360deg);transform-origin: 0 100%}
    }

</style>