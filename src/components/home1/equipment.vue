<template>
  <div class="box">
      <div class="top"><van-icon name="arrow-left" size="3vh"/>绑定设备 <img src="../../assets/img/蓝牙.png" alt=""><img src="../../assets/img/设置.png" alt=""></div>
      <ul>
          <li><span>HONOR 设备</span><span>已绑定</span></li>
          <li><span>HONOR 设备</span><span>已绑定</span></li>
          <li><span>HONOR 设备</span><span>已绑定</span></li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.top{
  width: 100%;
  height: 6vh;
  background: #eb002a;
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
.van-icon{
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

ul{
  height: 82vh; 
  margin-top: 6vh;
  overflow-y: auto;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
ul li{
    width: 90vw;
    margin-left: 5vw;
    line-height: 6vh;
    font-size: 1.4vw;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content:space-between;
}
</style>