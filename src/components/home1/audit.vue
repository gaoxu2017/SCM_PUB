<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" size="3vh" />货品详情
      <img src="../../assets/img/蓝牙.png" alt="" /><img
        src="../../assets/img/设置.png"
        alt=""
      />
    </div>
    <div class="center">
      <p>
        <span>共有<b style="color:red">&nbsp;1&nbsp;</b>件商品</span>
        <span>到货日期：2021-01-02</span>
      </p>
      <ul>
        <li>
          <span>货品名称</span>
          <span>订货数量</span>
          <span>入库数量</span>
          <span>单价</span>
          <span>价税合计</span>
          <span>抽查数量</span>
          <span>合格数量</span>
          <span>图片</span>
        </li>
      </ul>
      <ol>
        <li>
          <span>货品名称货品名称货品名称货品名称</span>
          <span>订货数量</span>
          <span>入库数量</span>
          <span>单价</span>
          <span>价税合计</span>
          <span>抽查数量</span>
          <span>合格数量</span>
          <span><img src="../../assets/img/01.png" alt=""/></span>
        </li>
        <li>
          <span style="text-align: center;line-height:6vh ;margin-top: 0vh;"
            >合计</span
          >
          <span>150</span>
          <span>1</span>
          <span>单价</span>
          <span>价税合计</span>
          <span>抽查数量</span>
          <span>合格数量</span>
          <span></span>
        </li>
      </ol>
    </div>
    <div class="rightEn">
      <ul>
        <li>全部</li>
        <li v-for="(value, index) in arrEn" :key="index">{{ value }}</li>
      </ul>
    </div>
    <img
      class="img"
      src="../../assets/img/a8420be7eea9fc9ee8023b762862e35.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrEn: []
    };
  },
  mounted() {
    this.arrEn = this.generateBig();
  },
  methods: {
    generateBig() {
      let ch_big = "A";
      let str_big = [];
      for (var i = 0; i < 26; i++) {
        str_big.push(String.fromCharCode(ch_big.charCodeAt(0) + i));
      }
      return str_big;
    }
  }
};
</script>

<style scoped>
.top {
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
.top img {
  position: absolute;
  width: 3.5vh;
  height: 3.5vh;
  top: 1.5vh;
}
.van-icon {
  position: absolute;
  top: 1.5vh;
  left: 2vw;
}
.top img:nth-child(2) {
  right: 8vh;
}
.top img:nth-child(3) {
  right: 3vh;
}

.rightEn ul {
  position: fixed;
  right: 0;
  top: 8vh;
  width: 5vw;
  text-align: center;
  color: #eb002a;
  background: #fff;
  height: 92vh;
  overflow-y: auto;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
.rightEn ul li {
  font-size: 1.4vw;
  line-height: 3.3vh;
}
.rightEn ul li:nth-child(1) {
  margin-top: 2vh;
}
.center {
  width: 95vw;
  height: 92vh;
  margin-top: 2vh;
  background: #fff;
  border-right: 4px solid #ccc;
}
.center p {
  height: 6vh;
  position: relative;
  font-size: 1.2vw;
}
.center p span:nth-child(1) {
  position: absolute;
  line-height: 6vh;
  top: 0;
  left: 2vw;
}
.center p span:nth-child(2) {
  position: absolute;
  line-height: 6vh;
  top: 0;
  right: 2vw;
}
.center ul li {
  line-height: 6vh;
  height: 6vh;
  font-size: 1.2vw;
  background: rgb(239, 239, 239);
  margin: 0 2vw;
}
.center ul li span {
  display: block;
  float: left;
  width: 12.4%;
  text-align: center;
  border-left: 1px solid #ccc;
}
.center ul li {
  border: 1px solid #ccc;
  border-left: none;
}
.center ol {
  height: 79.5vh;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid #ccc;
  border-top: none;
  border-bottom: none;
  margin: 0 2vw;
}
.center ol li {
  line-height: 6vh;
  height: 6vh;
  font-size: 1.2vw;
  border-bottom: 1px solid #ccc;
}
.center ol li span {
  display: block;
  float: left;
  width: 12.4%;
  text-align: center;
  border-left: 1px solid #ccc;
}
.center ol li span:nth-child(1) {
  line-height: 1.4vw;
  text-align: left;
  margin-top: 1vh;
}
.center ol span:nth-child(8) {
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  position: fixed;
  bottom: 5vw;
  width: 8vw;
  z-index: 9;
  right: 10vw;
}
</style>
