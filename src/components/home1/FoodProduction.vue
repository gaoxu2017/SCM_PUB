<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" size="3vh" />菜品生产记录
      <img
        style="right: 3vh;"
        src="../../assets/img/aa0704e1341e8927ef39762b79c731f.png"
        alt=""
      />
    </div>
    <div class="center">
      <div class="center1">
        <p>
          <span
            :class="center_1_class == '0' ? 'center_1_class' : ''"
            @click="center_1_class = 0"
            >全部</span
          >
        </p>
        <p>
          <span
            :class="center_1_class == '1' ? 'center_1_class' : ''"
            @click="center_1_class = 1"
            >待审核</span
          >
        </p>
        <p>
          <span
            :class="center_1_class == '2' ? 'center_1_class' : ''"
            @click="center_1_class = 2"
            >已审核</span
          >
        </p>
        <p>
          <span
            :class="center_1_class == '3' ? 'center_1_class' : ''"
            @click="center_1_class = 3"
            >已废弃</span
          >
        </p>
      </div>

      <!-- 全部 -->
      <div v-if="center_1_class == '0'">
        <img
          class="img"
          src="../../assets/img/d755e7f90876c7b146450a2ffb6b87a.png"
          alt=""
        />
        <div class="center2">共<span style="color:red">1</span>条数据</div>
        <ul class="center3">
          <li>
            <span>
              <van-checkbox
                v-model="checked"
                checked-color="#ee0a24"
              ></van-checkbox>
            </span>
            <p>
              <span>生产日期</span>
              <span>2021-01-01</span>
            </p>
            <p>
              <span>部门</span>
              <span>应用</span>
            </p>
            <p>
              <span>餐段</span>
              <span>晚餐</span>
            </p>
            <p>
              <span>菜品数量</span>
              <span>10/10</span>
            </p>
            <p>
              <span>制单人</span>
              <span>超哥</span>
            </p>
            <div style="color:rgb(87,180,49)">
              已审核
            </div>
          </li>
          <li>
            <span>
              <van-checkbox
                v-model="checked"
                checked-color="#ee0a24"
              ></van-checkbox>
            </span>
            <p>
              <span>生产日期</span>
              <span>2021-01-01</span>
            </p>
            <p>
              <span>部门</span>
              <span>应用</span>
            </p>
            <p>
              <span>餐段</span>
              <span>晚餐</span>
            </p>
            <p>
              <span>菜品数量</span>
              <span>10/10</span>
            </p>
            <p>
              <span>制单人</span>
              <span>超哥</span>
            </p>
            <div>
              待审核
            </div>
          </li>
          <li>
            <span>
              <van-checkbox
                v-model="checked"
                checked-color="#ee0a24"
              ></van-checkbox>
            </span>
            <p>
              <span>生产日期</span>
              <span>2021-01-01</span>
            </p>
            <p>
              <span>部门</span>
              <span>应用</span>
            </p>
            <p>
              <span>餐段</span>
              <span>晚餐</span>
            </p>
            <p>
              <span>菜品数量</span>
              <span>10/10</span>
            </p>
            <p>
              <span>制单人</span>
              <span>超哥</span>
            </p>
            <div>
              待审核
            </div>
          </li>
        </ul>
        <div class="center4">
          <span
            :class="center4_class == '0' ? 'center4_class' : ''"
            @click="center4_class = 0"
            >废弃</span
          >
          <span
            :class="center4_class == '1' ? 'center4_class' : ''"
            @click="center4_class = 1"
            >确认完成并审核</span
          >
        </div>
      </div>
      <!-- 待审核 -->
      <div v-if="center_1_class == '1'">
        <img
          class="img"
          src="../../assets/img/d755e7f90876c7b146450a2ffb6b87a.png"
          alt=""
        />
        <div class="center2">共<span style="color:red">1</span>条数据</div>
        <ul class="center3">
          <li>
            <span>
              <van-checkbox
                v-model="checked"
                checked-color="#ee0a24"
              ></van-checkbox>
            </span>
            <p>
              <span>生产日期</span>
              <span>2021-01-01</span>
            </p>
            <p>
              <span>部门</span>
              <span>应用</span>
            </p>
            <p>
              <span>餐段</span>
              <span>晚餐</span>
            </p>
            <p>
              <span>菜品数量</span>
              <span>10/10</span>
            </p>
            <p>
              <span>制单人</span>
              <span>超哥</span>
            </p>
            <div>
              待审核
            </div>
          </li>
          <li>
            <span>
              <van-checkbox
                v-model="checked"
                checked-color="#ee0a24"
              ></van-checkbox>
            </span>
            <p>
              <span>生产日期</span>
              <span>2021-01-01</span>
            </p>
            <p>
              <span>部门</span>
              <span>应用</span>
            </p>
            <p>
              <span>餐段</span>
              <span>晚餐</span>
            </p>
            <p>
              <span>菜品数量</span>
              <span>10/10</span>
            </p>
            <p>
              <span>制单人</span>
              <span>超哥</span>
            </p>
            <div>
              待审核
            </div>
          </li>
        </ul>
        <div class="center4">
          <span
            :class="center4_class == '0' ? 'center4_class' : ''"
            @click="center4_class = 0"
            >废弃</span
          >
          <span
            :class="center4_class == '1' ? 'center4_class' : ''"
            @click="center4_class = 1"
            >确认完成并审核</span
          >
        </div>
      </div>
      <!-- 已审核 -->
      <div v-if="center_1_class == '2'">
        <img
          class="img"
          src="../../assets/img/d755e7f90876c7b146450a2ffb6b87a.png"
          alt=""
        />
        <div class="center2">共<span style="color:red">19</span>条数据</div>
        <ul class="center3" style="height: 81.5vh;">
          <li>
            <span>
              <van-checkbox
                v-model="checked"
                checked-color="#ee0a24"
              ></van-checkbox>
            </span>
            <p>
              <span>生产日期</span>
              <span>2021-01-01</span>
            </p>
            <p>
              <span>部门</span>
              <span>应用</span>
            </p>
            <p>
              <span>餐段</span>
              <span>晚餐</span>
            </p>
            <p>
              <span>菜品数量</span>
              <span>10/10</span>
            </p>
            <p>
              <span>制单人</span>
              <span>超哥</span>
            </p>
            <div style="color:rgb(87,180,49)">
              已审核
            </div>
          </li>
          <li>
            <span>
              <van-checkbox
                v-model="checked"
                checked-color="#ee0a24"
              ></van-checkbox>
            </span>
            <p>
              <span>生产日期</span>
              <span>2021-01-01</span>
            </p>
            <p>
              <span>部门</span>
              <span>应用</span>
            </p>
            <p>
              <span>餐段</span>
              <span>晚餐</span>
            </p>
            <p>
              <span>菜品数量</span>
              <span>10/10</span>
            </p>
            <p>
              <span>制单人</span>
              <span>超哥</span>
            </p>
            <div style="color:rgb(87,180,49)">
              已审核
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center_1_class: "0",
      center4_class: "0",
      checked: 0
    };
  }
};
</script>

<style scoped>
.img {
  position: fixed;
  bottom: 10vw;
  width: 8vw;
  z-index: 9;
  right: 10vw;
}
.center {
  height: 92vh;
  margin-top: 2vh;
  background: #fff;
}
.center .center1 p {
  float: left;
  width: 10%;
  display: flex;
  justify-content: center;
}
.center .center1 {
  height: 4vh;
  border-bottom: 1px solid #ccc;
}
.center .center1 p > span {
  line-height: 4vh;
  width: 70%;
  text-align: center;
  position: relative;
}
.center_1_class {
  border-bottom: 3px solid red;
  color: red;
}
.center2 {
  margin-top: 1vh;
  height: 5vh;
  line-height: 5vh;
  text-indent: 4vw;
}
.center3 {
  height: 75.5vh;
  width: 96vw;
  margin-left: 2vw;
  overflow-y: auto;
  overflow-x: hidden;
}
.center3 li {
  width: 99.8%;
  margin-bottom: 2vh;
  border: 1px solid #ccc;
  border-radius: 1vw;
  height: 8vh;
}
.center3 li > span:nth-child(1) >>> .van-checkbox__icon {
  height: 8vh;
  display: flex;
  align-items: center;
}
.center3 li > span:nth-child(1) {
  height: 8vh;
  display: block;
  float: left;
  margin-left: 2vw;
  width: 3%;
}
.center3 li p {
  width: 15%;
  float: left;
  position: relative;
  height: 100%;
}
.center3 li > div {
  float: right;
  width: 10%;
  text-align: right;
  margin-right: 4vw;
  line-height: 8vh;
  color: rgb(226, 50, 49);
}
.center3 li p span:nth-child(1) {
  position: absolute;
  color: #ccc;
  top: 1.7vh;
  left: 10%;
}
.center3 li p span:nth-child(2) {
  bottom: 1.7vh;
  left: 10%;
  position: absolute;
}

.center4 {
  height: 6vh;
  border-top: 1px solid #ccc;
}
.center4 span {
  display: block;
  text-align: center;
  color: rgb(226, 50, 49);
  line-height: 6vh;
  width: 50%;
  float: left;
}
.center4_class {
  background: rgb(226, 50, 49);
  color: #fff !important;
}
</style>
