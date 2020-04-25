<template>
    <div class="mainlog">
        <log-input/>
    </div>
</template>

<script>
    import logInput from '@/components/common/log/log'
    export default {
        name: "log",
        components:{
            logInput
        }
    }
</script>

<style scoped>

.mainlog{
    position: fixed;

    height: 100%;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: linear-gradient(#02CB9F,#2623FA);

}
</style>