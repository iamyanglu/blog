<template>
    <div class="cook">
        <transition name="fade"> // 需要给此组件起一个名字，后续要用到
            <p v-show="flag">hello</p>
        </transition>
        <button @click="flag =!flag">click</button>
    </div>
</template>

<script>
    export default {
        name: "test",
        data(){
            return{
                flag:true
            }
        }
    }
</script>

<style scoped>

p{
    width: 100px;
    height: 100px;
    background-color: black;
}


</style>