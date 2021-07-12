<template>
  <div class="box">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="">
    </div>
    <div class="center">
      <van-field
        v-model="loginParams.username"
        placeholder="账号"
        left-icon="manager-o"
      />
      <van-field
        v-model="loginParams.password"
        type="password"
        placeholder="密码"
        left-icon="goods-collect-o"
      />
      <van-button type="danger" @click="logining">登 录</van-button>
    </div>

    <div class="bottom">
      <van-checkbox v-model="checked" shape="square" @change="handelRemeberPassword" icon-size="1.4vw" checked-color="red">记住密码</van-checkbox>
      <span @click="$router.push('./firewalld')">地址配置</span>
    </div>

    <p>
      <span></span>
      <span class="faceLogin">试试使用face ID登录</span>
      <span></span>
    </p>

    <div class="bottomImg">
      <img src="../assets/img/面部识别图标.png" alt="">
    </div>
  </div>
</template>

<script>
import { login } from "@/request/api";
import { Toast } from 'vant';
export default {
  name: 'HelloWorld',
  data () {
    return {
      loginParams:{
        username:'',
        password:''
      },
      checked:false
    }
  },
  created () {
    const userMesage = JSON.parse(localStorage.getItem("usname"))
    if (userMesage) {
       this.loginParams = userMesage
       this.checked = JSON.parse(localStorage.getItem("ischoose"))
    }
  },
  mounted () {
      window.androidMethods = this.androidMethods
  },
  methods : {
    androidMethods (value) {
        alert(value)
    },
    logining () {
      if (this.checked) {
        localStorage.setItem("usname", JSON.stringify(this.loginParams))
        localStorage.setItem("ischoose", JSON.stringify(this.checked))
      }else{
        localStorage.clear()
      }
       login(this.loginParams).then((res)=>{
         if (res.result === 'success') {
             this.$router.push({
               path:'/home'
             })
         }else{
           Toast.success(`${res.errorMsg}`);
         }
       })
    },
    // handelRemeberPassword (name) {
    //    if (name) {
    //      this.RemeberPassword = name
    //    }
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.center /deep/ .van-field__left-icon .van-icon, .van-field__right-icon .van-icon {
  font-size: 32px;
}
.box{
  width: 100%;
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
  margin-top: 4vh;
  color: #fff;
  border-radius: 1vw;
  font-size: 1.7vw;
  height: 7vh;
}
.bottom{
  margin-left: 30%;
  width: 40%;
  margin-top: 4vh;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 1.3vw;
}
.box >>> .van-checkbox__label{
  color: #fff;
  font-size: 1.3vw;
}
p{
  margin-left: 33%;
  width: 34%;
  margin-top: 4vh;
  height: 4vh;
  display: flex;
  align-items:center;
  color: #fff;
}
p>span{
  border-top: 1px solid #fff;
  width: 26%;
  display: inline-block;
  font-size: 1vw;
}
p>span:nth-child(2){
  width: 48%;
  border: none;
  text-align: center;
}
.bottomImg{
  width: 100%;
  margin-top: 4vh;
  display: flex;
  justify-content:center;;
}
.bottomImg img{
  width: 4vw;
}
</style>
