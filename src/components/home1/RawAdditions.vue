<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" size="3vh" />原味豆浆
      <img src="../../assets/img/蓝牙.png" alt="" /><img
        src="../../assets/img/设置.png"
        alt=""
      />
    </div>
    <div class="center">
      <div class="center1">
        <div class="center1_l">
          <ul>
            <li>
              <span>原味豆浆：</span>
              <span>(份)(常规)</span>
            </li>
            <li style="position: relative">
              <span>单价：</span>
              <span>280</span>
              <p style="position: absolute;right:14vw;top:0vh; border: none;">
                <span style="width:6vw;display: inline-block;">入库数量：</span>
                <span>280</span>
              </p>
            </li>
            <li style="position: relative">
              <span>浪费：</span>
              <span>280</span>
              <p style="position: absolute;right:14vw;top:0; border: none;">
                <span style="width:6vw;display: inline-block;">总金额：</span>
                <span>280</span>
              </p>
            </li>
            <li style="border-top:1px solid #ccc;padding-top:2vh">
              <span>浪费类型：</span>
              <p style="width:25vw">
                <img
                  src="../../assets/img/7b1c19316dd6f3a51a49bd5726c62f8.png"
                  alt=""
                />
                <el-dropdown>
                  <span class="el-dropdown-link" style="color:#ccc">
                    请选择
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </li>
            <li style="border-bottom:1px solid #ccc;padding-bottom:2vh;margin-bottom:2vh">
              <span>浪费原因：</span>
              <p style="width:25vw">
                <img
                  src="../../assets/img/7b1c19316dd6f3a51a49bd5726c62f8.png"
                  alt=""
                />
                <el-dropdown>
                  <span class="el-dropdown-link" style="color:#ccc">
                    请选择
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </li>
            <li>
              <span>上传图片：</span>
              <p style="width:25vw">
                <img
                  src="../../assets/img/7b1c19316dd6f3a51a49bd5726c62f8.png"
                  alt=""
                />
                <el-dropdown>
                  <span class="el-dropdown-link" style="color:#ccc">
                    最多上传6张，每张最大2M
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </li>
          </ul>
        </div>
        <div class="center1_r">
          <div class="center1_r1">
            <span>0.0 <span>元</span></span>
          </div>
          <div class="center1_r2">
            <span></span>
            <span></span>
            <span>
              <img
                src="../../assets/img/7ceca70dd7f482c2a193c9291f713cf.png"
                alt=""
              />解锁
            </span>
          </div>
          <div class="center1_r3">
            <span>去皮</span>
            <span>取整</span>
            <span id="center1_r3_qz">保存</span>
            <span style="background:rgb(253,229,229)">减皮值</span>
            <span>累加</span>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom2"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.center {
  height: 83vh;
  margin-top: 2vh;
  background: #fff;
}
.center1 {
  height: 83vh;
}
.center1_l {
  width: 45%;
  height: 100%;
  float: left;
  border-right: 1vw solid rgb(244, 242, 246);
}
.center1_l ul {
  margin: 0 2vw;
}
.center1_l li {
  height: 6vh;
}
.center1_l li > span {
  line-height: 6vh;
}
.center1_l li > span:nth-child(1) {
  float: left;
  width: 6vw;
}
.center1_r {
  width: 54%;
  float: left;
  height: 100%;
}
.center li p {
  float: left;
  height: 3vh;
  width: 12vw;
  display: flex;
  align-items: center;
  margin-top: 1.5vh;
  border: 1px solid #ccc;
  margin-right: 1vw;
  position: relative;
  border-radius: 4px;
}
.center li .el-dropdown-link {
  margin-left: 1vw;
}
.center li p img {
  width: 0.7vw;
  position: absolute;
  right: 1vw;
}
.center1_r1 {
  height: 16vh;
  border-bottom: 1px solid #ccc;
}
.center1_r1 > span {
  text-align: center;
  display: block;
  font-size: 6vw;
  color: rgb(226, 50, 49);
  font-weight: bold;
  margin-top: 2vh;
}
.center1_r1 > span > span {
  font-size: 1.2vw;
  color: #000;
}
.center1_r2 {
  margin-top: 4vh;
}
.center1_r2 img {
  width: 1.2vw;
  margin-right: 0.5vw;
}
.center1_r2 span {
  padding: 0 2vw;
}
.center1_r2 span:nth-child(3) {
  float: right;
  margin-right: 2vw;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  width: 6vw;
  padding: 0.2vh 0;
  border-radius: 4px;
  color: rgb(226, 50, 49);
  justify-content: center;
}
.center1_r3 {
  margin-top: 14vh;
  margin-left: 2vw;
}
.center1_r3 span {
  display: block;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(226, 50, 49);
  width: 30%;
  height: 6vh;
  border-radius: 5px;
  margin-right: 1vw;
  margin-bottom: 2vh;
  font-size: 1.4vw;
  background: rgb(227, 227, 227);
}
#center1_r3_qz {
  float: right;
  height: 14vh;
  background: rgb(226, 50, 49);
  color: #fff;
  margin-right: 2vw;
}
.bottom2 {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  background: #fff;
  height: 8vh;
}
</style>
