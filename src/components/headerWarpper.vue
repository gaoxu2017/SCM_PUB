<!--
 * @Author: gaoxu
 * @Date: 2021-07-08 10:23:28
 * @LastEditors: g05047
 * @LastEditTime: 2021-07-13 20:16:51
 * @Description: file content
-->
<template>
    <div class="header-wrapper">
        <div class="top"><van-icon @click="back" name="arrow-left" size="3vh"/>{{fatherText}} <i :class=" BLUETOOTH_STATUS == 'false' ? 'iconfont icon-lanyalianjie' : 'iconfont icon-lanyalianjie duankai'"></i><img @click="setlanya()" src="../assets/img/设置.png" alt=""></div>
    </div>
</template>

<script>
import {mapState ,mapGetters ,mapMutations , mapActions} from 'Vuex'
export default {
    props:{
       fatherText :{
          type: String,
          default: null
       }
    },
  computed: {
    ...mapState(['BLUETOOTH_STATUS']),
  },
    data () {
        return {

        }
    },
    methods :{
        setlanya () {
          this.$root.handelSetAlertType = !this.$root.handelSetAlertType
        },
        back () {
           this.$backMethods()
        }
    }
}
</script>
<style lang="css" scoped>
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
  top: 0.2vw;
  right: 10vh;
  /* opacity: 0.9; */
  font-size: 1.9vw;
}
.duankai{
  opacity: 0.2;
}
/* .top i:nth-child(1){
  right: 8vh;
} */
.top img:nth-child(2){
  right: 3vh;
}

</style>