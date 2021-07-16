<!--
 * @Author: gaoxu
 * @Date: 2021-07-01 15:12:19
 * @LastEditors: g05047
 * @LastEditTime: 2021-07-16 12:32:30
 * @Description: file content
-->
<template>
    <div class="bindingdevice-wrapper">
        <header-wrapper fatherText="绑定设备"></header-wrapper>
            <!-- <div class="top">
      <van-icon name="arrow-left" @click="goback()" size="3vh" />绑定设备
      <img src="../../assets/img/蓝牙.png" alt="" /><img
        src="../../assets/img/设置.png"
        alt=""
      />
    </div> -->

    <div class="choose-name">
       <p>请选择要绑定的秤的设备号</p>
    </div>

    <div class="nav">
      <van-loading v-if="loadingtype" type="spinner" size="10vw" style="text-align:center;margin-top:10%;width:100%;opacity:0.5;position:fixed;" color="#c84645" />
      <ul>
          <li :class="item.status == 1 ? 'ischoose' : ''" v-for="(item ,index) in bluetoothArr" :key="index" v-if="bluetoothArr.length > 0" @click.stop="androidItem(item)">
             <p>{{item.name}}</p>
             <p>{{item.status == 1 ? '已绑定' : '未绑定'}}</p>
          </li>
      </ul>
    </div>
     <div class="resetclss" @click="resetList()">
          <img src="./../../assets/img/刷新.png" alt="">
      </div>
    </div>
</template>
<script>
import {mapState ,mapGetters ,mapMutations , mapActions} from 'Vuex'
import { Dialog } from 'vant'
import { Toast } from 'vant'
import { Loading } from 'vant';
export default {
    data () {
        return {
           bluetoothArr:[
           ],
           success:'',
           loadingtype:true,
        }
    },
    destroyed: function () {
       $presenter.stopscan()
    },
    mounted () {
        window.androidMethods = this.androidMethods
        window.isblueya = this.isblueya
        $photo.startBluetooth()
        this.initBluetooth()
    },
    methods:{
        isblueya (val) {
            if (val == 'false') {
                this.$store.commit('setBluetooth',true)
            }else{
                this.$store.commit('setBluetooth','false')
            }
        },
        resetList () {
           this.bluetoothArr = []
           this.loadingtype = true
           this.initBluetooth()
        },
        goback () {
          this.$router.go(-1)
        },
        androidMethods (value,value2) {
            let obj = {}
            obj.name = value
            obj.status = value2
            this.bluetoothArr.push(obj)
        },
        initBluetooth () {
            $presenter.search()
            new Promise(resolve => {
                resolve('res')
            }).then(val => {
                return new Promise(resolve => {
                setTimeout(() => {
                    resolve('rej')
                    this.loadingtype = false 
                }, 3000)
                })
            }).then(val => {
                // $presenter.stopscan()
            })
        },
        androidItem (item) {
           Dialog.confirm({
            title:  '提示',
            message: item.status == 0 ?  '确定要绑定吗' : '确定取消绑定吗',
            })
            .then(() => {
              if (item.status == 0) {
            item.status = $presenter.connect(item.name)
            let str = ''
            if (item.status == 1) {
                this.$store.commit('setBluetooth','false')
                $presenter.getData()
                str = '连接成功'
                // $presenter.isNull()
            }else if (item.status == 2) {
                str = '连接失败'
                item.status = 0
            } else {
                str = '连接断开'
                item.status = 0
            }
            Toast(str)
              }else{
                  $presenter.close()
                  this.$store.commit('setBluetooth',true)
                  Toast('断开成功')
                  item.status = 0
              }
            })
            .catch(() => {
                
            });
        }
    }
}

</script>
<style lang="css" scoped>
    .ischoose {
        color: red;
    }
    .resetclss {
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        }
    .resetclss img{
        width: 5%;
    }
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
   .nav ul {
       height: 48vw;
       overflow: auto;
   }
   .nav ul li p{
       padding:0 2vw;
   }
</style>