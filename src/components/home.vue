<!--
 * @Author: gaoxu
 * @Date: 2021-06-21 14:04:49
 * @LastEditors: g05047
 * @LastEditTime: 2021-07-09 10:03:26
 * @Description: file content
-->
<template>
  <div>
    <!-- <header-wrapper :fatherMethods="fatherMethods" :isshowblack="isshowblack"></header-wrapper> -->
    <div class="top">爱玛客智能秤平台 <i class="iconfont icon-lanyalianjie"></i><img @click="setlanya" src="../assets/img/设置.png" alt=""></div>
    <ul class="nav">
      <li v-for="(value,index) in arr" :key="index" @click="haldelList(value)">
        <img :src="value.icon" alt="">
        <p>{{value.value}}</p>
      </li>
    </ul>
    <set-alert v-if="show"></set-alert>
  </div>
</template>

<script>  
export default {
  data(){
    return{
      isshowblack:false,
      show:false,
      arr:[
        {icon:require('../assets/img/5、采购入库图标.png'),value:'采购入库'},
        {icon:require('../assets/img/6、入库验收图标.png'),value:'入库验收'},
        {icon:require('../assets/img/7、事件管理图标.png'),value:'事件管理'},
        {icon:require('../assets/img/8、原材料浪费.png'),value:'原材料浪费'},
        {icon:require('../assets/img/9、生产记录图标.png'),value:'生产记录'},
        {icon:require('../assets/img/10、生产浪费图标.png'),value:'生产浪费'},
        {icon:require('../assets/img/11、出货图标.png'),value:'出货'},
      ]
    }
  },
  methods: {
    //父组件方法
    fatherMethods () {
       this.show = !this.show
    },
    haldelList (item) {
      if (item.value === '采购入库') {
        this.$router.push({
        path:'/option'
      })
      }
      if (item.value === '入库验收') {
        this.$router.push({
        path:'/option',
        query:{
          id:1
        }
      })
      }
    },
    setlanya () {
       this.show = !this.show
    }
  }
}
</script>

<style scoped>
.van-icon{
  position: absolute;
  top: 1.5vh;
  left: 2vw;
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
.top .iconfont  {
  position: absolute;
  top: 0.1vw;
  right: 10vh;
  opacity: 0.8;
  font-size: 1.9vw;
}
.top img:nth-child(2){
  right: 3vh;
}
.nav{
  width: 92vw;
  margin-left: 4vw;
}
.nav li{
  width: 30%;
  height: 20vh;
  float: left;
  margin: 4vh 1.55% 0 1.55%;
  border-radius: 1vw;
  text-align: center;
  color: #fff;
  font-size: 1.8vw;
}
.nav li img{
  width: 5vw;
  height: 5vw;
  margin-top: 4vh;
  margin-bottom: 2vh;
}
.nav li:nth-child(1){
  background:linear-gradient(rgb(255,148,101),rgb(255,97,98))
}
.nav li:nth-child(2){
  background:linear-gradient(rgb(157,147,248),rgb(120,107,239))
}
.nav li:nth-child(3){
  background:linear-gradient(rgb(249,210,38),rgb(252,172,96))
}
.nav li:nth-child(4){
  background:linear-gradient(rgb(121,215,248),rgb(51,133,237))
}
.nav li:nth-child(5){
  background:linear-gradient(rgb(116,230,160),rgb(75,204,125))
}
.nav li:nth-child(6){
  background:linear-gradient(rgb(253,123,159),rgb(246,94,114))
}
.nav li:nth-child(7){
  background:linear-gradient(rgb(213,169,246),rgb(155,90,205))
}
</style>