<template>
  <div>
    <div class="top"><van-icon name="arrow-left" size="3vh" />记录菜品</div>
    <div class="center">
      <div>
        <p>鸡块<span style="color:#ccc">(份)</span></p>
        <p>
          <span>标准克数：350</span><span>总重量：999</span
          ><span>预计出品克数：350</span
          ><span style="font-size: 1.4vw;color: rgb(226, 50, 49);"
            >461<span style="font-size: 1vw;color: rgb(212,212,212);"
              >份</span
            ></span
          ><van-icon name="arrow-down" color="red" size="2vw" @click="icon=!icon"/>
        </p>
      </div>
      <ol v-if="icon==true">
        <li>
          <p>2021-01-01 10:22:22</p>
          <p>
            <span>出品人：超哥</span>
            <span>出品重量</span><img src="" alt=""/>
            <span style="font-size: 1.4vw;color: rgb(226, 50, 49);"
              >461<span style="font-size: 1vw;color: rgb(212,212,212);"
                >份</span
              ></span
            >
          </p>
        </li>
        <li>
          <p>2021-01-01 10:22:22</p>
          <p>
            <span>出品人：超哥</span>
            <span>出品重量</span><img src="" alt=""/>
            <span style="font-size: 1.4vw;color: rgb(226, 50, 49);"
              >461<span style="font-size: 1vw;color: rgb(212,212,212);"
                >份</span
              ></span
            >
          </p>
        </li>
        <li>
          <p>2021-01-01 10:22:22</p>
          <p>
            <span>出品人：超哥</span>
            <span>出品重量</span><img src="" alt=""/>
            <span style="font-size: 1.4vw;color: rgb(226, 50, 49);"
              >461<span style="font-size: 1vw;color: rgb(212,212,212);"
                >份</span
              ></span
            >
          </p>
        </li>
      </ol>
    </div>
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
</template>

<script>
export default {
    data(){
        return{
            icon:true,
            bottom2_class:'1'
        }
    }
};
</script>

<style scoped>
.center {
  height: 85.9vh;
  background: #fff;
  overflow-y: auto;
    overflow-x: hidden;
}
.center div {
  width: 96vw;
  margin-left: 2vw;
  position: relative;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
}
.center div p:nth-child(1) {
  margin-top: 2vh;
  font-size: 1.4vw;
}
.center div p:nth-child(2) {
  margin-bottom: 2vh;
  margin-top: 1vh;
  font-size: 1vw;
  color: rgb(212, 212, 212);
}
.center div p:nth-child(2) span:nth-child(2) {
  margin-left: 15vw;
}
.center div p:nth-child(2) span:nth-child(3) {
  margin-left: 15vw;
}
.center div p:nth-child(2) span:nth-child(4) {
  margin-left: 15vw;
}
.center div p:nth-child(2) .van-icon {
  float: right;
}
.center ol {
  background: rgb(245, 245, 245);
  margin-top: 1vh;
}
.center li {
  overflow: hidden;
  font-size: 1vw;
  position: relative;
}
.center li p:nth-child(1) {
  margin-top: 2vh;
  text-indent: 3vw;
  margin-bottom: 2vh;
}
.center li p:nth-child(2) {
  margin-bottom: 2vh;
  height: 2vh;
}
.center li p:nth-child(2)>span:nth-child(1) {
    position: absolute;
    left: 3vw;
}
.center li p:nth-child(2) span:nth-child(2) {
    position: absolute;
    left: 30vw;
}
.center li img{
    position: absolute;
    width: 8vw;
    height: 7vh;
    background: red;
    bottom:1vh;
    right: 30vw;
}
.center li p:nth-child(2)>span:nth-child(4) {
    position: absolute;
    left: 86vw;
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
