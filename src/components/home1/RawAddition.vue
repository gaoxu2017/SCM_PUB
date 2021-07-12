<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" size="3vh" />原材料浪费记录
      <img src="../../assets/img/蓝牙.png" alt="" /><img
        src="../../assets/img/设置.png"
        alt=""
      />
    </div>
    <div class="center">
      <div>
        <p>浪费档口：</p>
        <p>
          <el-dropdown>
            <span class="el-dropdown-link">
              2020-01-01
              <img
                src="../../assets/img/7b1c19316dd6f3a51a49bd5726c62f8.png"
                alt=""
              />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </p>
      </div>
      <div>
        <p>供应商：</p>
        <p>
          <el-dropdown>
            <span class="el-dropdown-link">
              2020-01-01
              <img
                src="../../assets/img/7b1c19316dd6f3a51a49bd5726c62f8.png"
                alt=""
              />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </p>
      </div>

      <div>
          <p>浪费日期：</p>
          <p style="height:5vh">
              <van-radio-group v-model="radio" icon-size="1.2vw">
                <van-radio name="1" checked-color="#ee0a24" style="margin-right:2vw">2011-01-10</van-radio>
                <van-radio name="2" checked-color="#ee0a24">2011-01-10</van-radio>
            </van-radio-group>
          </p>
      </div>

      <div>
        <p>入库单号：</p>
        <p>
          <el-dropdown>
            <span class="el-dropdown-link">
              2020-01-01
              <img
                src="../../assets/img/7b1c19316dd6f3a51a49bd5726c62f8.png"
                alt=""
              />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </p>
        <p>搜索单号</p>
      </div>

      <div>
        <p>单据类型：</p>
        <p>
          <el-dropdown>
            <span class="el-dropdown-link">
              采购入库单
              <img
                src="../../assets/img/7b1c19316dd6f3a51a49bd5726c62f8.png"
                alt=""
              />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </p>
      </div>
    </div>

     <div class="bottom">
      <div class="bottom1">
        <p>
          <span
            :class="bottom_1_class == '0' ? 'bottom_1_class' : ''"
            @click="bottom_1_class = 0"
            >全部<span>1</span></span
          >
        </p>
        <p>
          <span
            :class="bottom_1_class == '1' ? 'bottom_1_class' : ''"
            @click="bottom_1_class = 1"
            >根茎</span
          >
        </p>
        <p>
          <span
            :class="bottom_1_class == '2' ? 'bottom_1_class' : ''"
            @click="bottom_1_class = 2"
            >叶菜</span
          >
        </p>
        <p>
          <span
            :class="bottom_1_class == '3' ? 'bottom_1_class' : ''"
            @click="bottom_1_class = 3"
            >花果</span
          >
        </p>
      </div>
      <ul>
        <!-- <li style="background:rgb(115,202,41)">
          <p style="color:#fff">香炸素丸子<span style="color：#fff !important">(份)(常规)</span></p>
          <p style="color:#fff">￥48</p>
        </li> -->
        <li>
          <p>香炸素丸子<span style="color: #ccc;">(份)(常规)</span></p>
          <p>￥48</p>
          <p>浪费:<span style="color:red">0</span></p>
        </li>
        <li>
          <p>香炸素丸子<span style="color: #ccc;">(份)(常规)</span></p>
          <p>￥48</p>
          <p>浪费:<span style="color:red">0</span></p>
        </li>
        <li>
          <p>香炸素丸子<span style="color: #ccc;">(份)(常规)</span></p>
          <p>￥48</p>
          <p>浪费:<span style="color:red">0</span></p>
        </li>
      </ul>
      <div class="bottom2">
        <span>
            <img src="../../assets/img/48a28422651b5fdef21ad246656baed.png" alt="">
            <span>已记录</span>
            <span>共12条记录</span>
            <span>16</span>
            <span>总金额：<span style="color: rgb(226, 50, 49);">￥0.0</span></span>
        </span
        >
        <span
          :class="bottom2_class == '1' ? 'bottom2_class' : ''"
          @click="bottom2_class = 1"
          >确认完成并审核</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            radio:'1',
            bottom_1_class: "0",
            bottom2_class:'1'
        }
    }
};
</script>

<style scoped>
.center {
  height: 10vh;
  background: #fff;
  position: relative;
}
.center .el-dropdown-link {
  display: flex;
  height: 3vh;
  align-items: center;
  color: rgb(226, 50, 49);
  text-indent: 1vw;
  border: 1px solid #ccc;  
  border-radius: 4px;
}
.center .el-dropdown-link img {
  width: 1vw;
  height: 1vh;
  margin-left: 2vw;
  margin-right: 1vw;
}
.center>div{
    position: absolute;
    line-height: 3vh;
}
.center>div p{
    float: left;
    line-height: 5vh;
}
.center>div p:nth-child(1){
    font-size: 1vw;
    width: 6vw;
    text-align: right;
}
.center>div:nth-child(1){
    left: 3vw;
    top: 0.5;
}
.center>div:nth-child(2){
    left: 3vw;
    bottom: 0.5vh;
}
.center>div:nth-child(3){
    left: 40vw;
    top: 0.5;
}
.van-radio{
    float: left;
    height: 5vh;
    line-height: 5vh;
}
.center>div:nth-child(4){
    left: 40vw;
    bottom: 0.5vh;
}
.center>div:nth-child(4) p:nth-child(3){
    margin-left: 1vw;
    color: rgb(226, 50, 49);
    font-size: 1vw;
}
.center>div:nth-child(5){
    left: 76vw;
    top: 0.5;
}
.bottom {
  margin-top: 2vh;
  height: 73.5vh;
  background: #fff;
}
.bottom .bottom1 p {
  float: left;
  width: 10%;
  display: flex;
  justify-content: center;
}
.bottom .bottom1 {
  width: 96%;
  margin-left: 2%;
  height: 4vh;
  border-bottom: 1px solid #ccc;
}
.bottom .bottom1 p > span {
  line-height: 4vh;
  width: 70%;
  text-align: center;
  position: relative;
}
.bottom_1_class {
  border-bottom: 3px solid rgb(226, 50, 49);
  color: rgb(226, 50, 49);
}
.bottom ul{
    height: 65.5vh;
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 4vh;
    width: 96%;
    margin-left: 2%;
}
.bottom ul li{
    float: left;
    width: 22.7%;
    height: 10vh;
    border-radius: 1vw;
    border: 1px solid #ccc;
    margin-bottom: 2vh;
    margin-right: 1%;
    margin-left: 1%;
    position: relative;
}
.bottom ul li p:nth-child(1){
    text-indent: 1vw;
    margin-top: 1.5vh;
}
.bottom ul li p:nth-child(2){
    margin-top: 2.5vh;
    color:rgb(226, 50, 49);
    font-weight: bold;
    text-indent: 1vw;
}
.bottom ul li p:nth-child(3){
  position: absolute;
    top: 6vh;
    font-size: 1vw;
    right: 4vw;
}
.bottom2 {
  height: 8vh;
  border-top: 1px solid #ccc;
}
.bottom2>span:nth-child(2) {
  display: block;
  text-align: center;
  color: rgb(226, 50, 49);
  line-height: 8vh;
  width: 50%;
  float: left;
  font-size: 1.5vw;
}
.bottom2_class {
  background: rgb(226, 50, 49);
  color: #fff !important;
}
.bottom2>span:nth-child(1){
    display: block;
    width: 50%;
    float: left;
    display: flex;
    height: 8vh;
    align-items:center;
    position: relative;
}
.bottom2>span:nth-child(1) img{
    width: 4vw;
    margin-left: 2vw;
}
.bottom2>span:nth-child(1) span:nth-child(2){
    color: rgb(226, 50, 49);
    padding: 0 1vw;
    margin-top: 1vh;
    border-right: 1px solid #ccc;
}
.bottom2>span:nth-child(1) span:nth-child(3){
    color: #ccc;
    padding: 0 1vw;
    margin-top: 1vh;
}
.bottom2>span:nth-child(1) span:nth-child(4){
    position: absolute;
    left: 5vw;
    top: 1vh;
    width: 1.5vw;
    height: 1.5vw;
    border-radius: 50%;
    text-align: center;
    line-height: 1.5vw;
    color: rgb(226, 50, 49);
    background: #fff;
    border: 1px solid #ccc;
}
.bottom2>span:nth-child(1) span:nth-child(5){
    position: absolute;
    left: 20vw;
    line-height: 8vh;
    top: 0.5vh;
    color: #ccc;
}
</style>
