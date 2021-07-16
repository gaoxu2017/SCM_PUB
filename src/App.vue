<!--
 * @Author: your name
 * @Date: 2021-06-21 14:04:49
 * @LastEditTime: 2021-07-13 18:29:07
 * @LastEditors: g05047
 * @Description: In User Settings Edit
 * @FilePath: \SCM_PUB\src\App.vue
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  width: 100vw;
  height: 100vh;
  font-size: 1.2vw;
  background: rgb(244,242,246);
}

.top{
  width: 100%;
  height: 6vh;
  background: #c84645;
  text-align: center;
  line-height: 6vh;
  font-size: 1.5vw;
  color: #fff;
  font-weight: bold;
  position: relative;
}
.top img{
  position: absolute;
  width: 3.5vh;
  height: 3.5vh;
  top: 1.5vh;
}
.top .van-icon{
  position: absolute;
  top: 1.5vh;
  left: 2vw;
}
.top img:nth-child(2){
  right: 8vh;
}
.top img:nth-child(3){
  right: 3vh;
}
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
</style>
