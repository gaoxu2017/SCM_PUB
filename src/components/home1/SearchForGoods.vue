<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" size="3vh" />
      <input class="searchInput" type="text">
      <!-- <img
        src="../../assets/img/蓝牙.png"
        alt=""
      /><img style="right:7.5vw" src="../../assets/img/设置.png" alt="" /> -->
      <span style="position:relative;top:-1.2vh;right:-7vw;"><van-icon style="position:absolute;right:5vw!important;left:0;" name="cross" /></span>
      <!-- <i  class="cross-o"></i> -->
    </div>
    <div class="center">
        <p>
            <span>[货品]</span> 月饼
        </p>
        <p>
            <span>[货品]</span> 月饼
        </p>
        <p>
            <span>[货品]</span> 月饼
        </p>
        <p>
            <span>[货品]</span> 月饼
        </p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant'
Vue.use(Icon);
export default {};
</script>

<style scoped>
.center{
    height: 92vh;
    margin-top: 2vh;
    overflow-y: auto;
    overflow-x: hidden;
    background: #fff;
}
.center p{
    margin: 0 3vw;
    border-bottom: 1px solid #ccc;
    line-height: 4vh;
}
.center p:nth-child(1){
    margin-top: 2vh;
}
.center p span{
    color: red;
    margin-right: 2vw;
}
.searchInput{
    width: 80vw;
    background: transparent !important;
    border: none;
}
</style>
