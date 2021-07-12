<template>
  <div>
    <div class="top"><van-icon name="arrow-left" size="3vh" />菜品生产记录</div>
    <div class="center">
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

      <p>档口：</p>

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

      <p>
        <span
          :class="center_p_class == 0 ? 'center_p_class' : ''"
          @click="center_p_class = 0"
          >早餐</span
        >
        <span
          :class="center_p_class == 1 ? 'center_p_class' : ''"
          @click="center_p_class = 1"
          >午餐</span
        >
        <span
          :class="center_p_class == 2 ? 'center_p_class' : ''"
          @click="center_p_class = 2"
          >晚餐</span
        >
      </p>

      <p>
        备注
        <img
          src="../../assets/img/2243a149393c30ada8ef1bc45ad1e65.png"
          alt=""
        />
      </p>
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
            >自助餐</span
          >
        </p>
      </div>
      <ul>
        <li>
          <p>香炸素丸子<span>(份)(常规)</span></p>
          <p>￥48</p>
        </li>
        <li>
          <p>香炸素丸子<span>(份)(常规)</span></p>
          <p>￥48</p>
        </li>
        <li>
          <p>香炸素丸子<span>(份)(常规)</span></p>
          <p>￥48</p>
        </li>
        <li>
          <p>香炸素丸子<span>(份)(常规)</span></p>
          <p>￥48</p>
        </li>
      </ul>
      <div class="bottom2">
        <span>
            <img src="../../assets/img/48a28422651b5fdef21ad246656baed.png" alt="">
            <span>已记录</span>
            <span>共12条记录</span>
            <span>16</span>
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
  data() {
    return {
      center_p_class: "0",
      bottom_1_class: "0",
      bottom2_class:'1'
    };
  }
};
</script>

<style scoped>
.center {
  height: 6vh;
  background: #fff;
  font-size: 1vw;
}
.center .el-dropdown-link {
  display: flex;
  height: 6vh;
  align-items: center;
  color: rgb(226, 50, 49);
  text-indent: 2vw;
}
.center .el-dropdown-link img {
  width: 1vw;
  height: 1vh;
  margin-left: 1vw;
}
.center p:nth-child(1) {
  float: left;
}
.center p:nth-child(2) {
  height: 6vh;
  float: left;
  line-height: 6vh;
  text-indent: 4vw;
}
.center p:nth-child(3) {
  float: left;
}
.center p:nth-child(3) .el-dropdown-link {
  border: 1px solid #ccc;
  height: 2.5vh;
  text-indent: 0.5vw;
  margin-top: 1.75vh;
  border-radius: 5px;
  margin-left: 1vw;
}
.center p:nth-child(3) .el-dropdown-link img {
  margin-left: 2vw;
  margin-right: 1vw;
}
.center p:nth-child(4) {
  float: left;
  height: 2.5vh;
  margin-top: 1.75vh;
  border-right: 1px solid #ccc;
  margin-left: 4vw;
}
.center p:nth-child(4) span {
  height: 2.5vh;
  display: block;
  float: left;
  width: 4vw;
  border-radius: 1vw;
  text-align: center;
  line-height: 2.5vh;
  font-size: 1vw;
  margin-right: 4vw;
}
.center_p_class {
  color: rgb(226, 50, 49);
  border: 1px solid rgb(226, 50, 49);
}
.center p:nth-child(5) {
  float: left;
  height: 6vh;
  display: flex;
  align-items: center;
  margin-left: 4vw;
}
.center p:nth-child(5) img {
  width: 2vw;
  margin-left: 2vw;
}
.bottom {
  margin-top: 2vh;
  height: 86vh;
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
    height: 70vh;
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
}
.bottom ul li p:nth-child(1){
    text-indent: 1vw;
    margin-top: 1.5vh;
}
.bottom ul li p:nth-child(1) span{
    color: #ccc;
}
.bottom ul li p:nth-child(2){
    margin-top: 2.5vh;
    color:rgb(226, 50, 49);
    font-weight: bold;
    text-indent: 1vw;
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
</style>
