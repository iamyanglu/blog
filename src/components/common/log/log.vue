<template>
    <div class="log">
      <div class="form-group">
          <label >用户名：</label>
          <input class="form-control"/>
          <label >密码：</label>
          <input class="form-control"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "log"
    }
</script>

<style scoped>
.log{
    padding: 15px;
    position: fixed;
    top: 100px;
    right: 50px;
    width: 20%;
    height: 500px;
    background-image: linear-gradient(#02CB9F,#2623FA);
    box-shadow:-7px 7px #666666;
}
.tit{
    margin-top: 100px;
}
    p.info{
        z-index: auto;
        font-size: 1.2em;
        border-radius: 9px;
        height: 40px;
        border: 1px solid #000000;
        margin-bottom: 10px;
        line-height: 40px;
        padding-left: 3px;
    }
    input{

        margin:30px auto;
        width: 98%;
        height: 30px;

        display: block;
    }
    .submit{
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 10px 30px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 0 auto;
    }
</style>