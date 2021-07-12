<template>
  <div class="box">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="" />
    </div>
    <div class="center">
      <van-field
        v-model="data.uAccount"
        placeholder="请输入接口地址"
        left-icon="manager-o"
      />
      <van-button type="danger" @click="saveUrl">确 认</van-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
export default {
  name: "HelloWorld",
  data() {
    return {
      data: {
        uAccount:
          localStorage.getItem("baseURL") == undefined
            ? "http://"
            : localStorage.getItem("baseURL"),
      },
    };
  },
  methods: {
    saveUrl() {
      localStorage.setItem("baseURL", this.data.uAccount);
      axios.defaults.baseURL = localStorage.getItem("baseURL");
      this.$router.push("./");
      Toast({
        message: "配置成功",
        position: "bottom",
      });
    },
  },
};
</script>

<style scoped>
.center /deep/ .van-field__left-icon .van-icon, .van-field__right-icon .van-icon {
  font-size: 32px;
}
.box{
  width: 100vw;
  height: 100vh;
  background: #000;
  background: url('../assets/img/背景.png')no-repeat;
  overflow: hidden;
}
.logo{
  width: 30vw;
  margin-left: 35vw;
  margin-top: 12vh;
}
.logo img{
  width: 100%;
}
.center{
  margin-top: 6vh;
}
.center .van-field {
  height: 7vh;
  width: 40%;
  font-size: 1.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30%;
  background: #fff;
  margin-top: 4vh;
  border-radius: 1vw;
}
.van-button{
  margin-left: 30%;
  width: 40%;  
  margin-top: 8vh;
  color: #fff;
  border-radius: 1vw;
  font-size: 1.7vw;
  height: 7vh;
}
</style>
