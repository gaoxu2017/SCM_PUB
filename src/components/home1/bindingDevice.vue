<!--
 * @Author: gaoxu
 * @Date: 2021-07-01 15:12:19
 * @LastEditors: g05047
 * @LastEditTime: 2021-07-08 11:21:14
 * @Description: file content
-->
<template>
    <div class="bindingdevice-wrapper">
            <div class="top">
      <van-icon name="arrow-left" @click="goback()" size="3vh" />绑定设备
      <img src="../../assets/img/蓝牙.png" alt="" /><img
        src="../../assets/img/设置.png"
        alt=""
      />
    </div>

    <div class="choose-name">
       <p>请选择要绑定的秤的设备号</p>
    </div>

    <div class="nav">
      <ul>
          <li v-for="(item ,index) in bluetoothArr" :key="index" v-if="bluetoothArr.length > 0" @click.stop="androidItem(item)">
             <p>{{item}}</p>
             <p>未绑定</p>
          </li>
      </ul>
    </div>
    </div>
</template>
<script>
import { Dialog } from 'vant'
import { Toast } from 'vant'
export default {
    data () {
        return {
           bluetoothArr:[],
           success:''
        }
    },
    mounted () {
        window.androidMethods = this.androidMethods
        this.initBluetooth()
    },
    methods:{
        goback () {
          this.$router.go(-1)
        },
        androidMethods (value) {
            this.bluetoothArr.push(value)
        },
        initBluetooth () {
            $presenter.search()
        },
        androidItem (item) {
           Dialog.confirm({
            title: '提示',
            message: '确定要绑定吗',
            })
            .then(() => {
            this.success = $presenter.connect(item)
            let str = ''
            if (this.success == 1) {
                $presenter.getData()
                str = '连接成功'
            }else if (this.success == 2) {
                str = '连接失败'
            } else {
                str = '连接断开'
            }
            Toast(str)
            })
            .catch(() => {
                
            });
        }
    }
}
</script>
<style lang="css" scoped>
   .choose-name {
       width: 100%;
       height: 8vh;
       background: #ccc;
       line-height:8vh;
   }
   .choose-name p {
       margin-left: 2vw;
       font-size: 1.5vw;
   }
   .nav ul li{
      height: 10vw;
      line-height: 10vw;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
   }
   .nav ul li p{
       padding:0 2vw;
   }
</style>