<template>
  <div>
    <header-wrapper :fatherText="project"></header-wrapper> 
    <!-- <div class="top">
      <van-icon @click="back()" name="arrow-left" size="3vh" />兴业银行 — 员工餐厅<img
        src="../../assets/img/蓝牙.png"
        alt=""
      /><img src="../../assets/img/设置.png" alt="" />
    </div> -->
    <div class="center">
      <div class="center_l">
        <p>
          <span
            :class="center_l_class == 0 ? 'center_l_class' : ''"
            @click="shoptype(0)"
            >未收货
                <span class="tip">{{this.aa.length}}</span>
            </span
          ><span
            :class="center_l_class == 1 ? 'center_l_class' : ''"
            @click="shoptype(1)"
            >已收货</span
          >
        </p>
        <ul>
            <li class="center_l_ul" v-for="(item ,index) in bb"  :key="index"  v-bind:class="{active : activeindex === index ? 'active' : ''}" @click="orderSearch(item,index)">{{item.itemid.cnName}}</li>
        </ul>
      </div>
      <div class="center_r">
          <div class="center_r_1">
              <img v-if="!this.tableData[0].pictureUrl" src="../../assets/img/aec89a3cb114ffde370154f40caa824.png" alt="">
              <img v-if="this.tableData[0].pictureUrl" :src= this.tableData[0].pictureUrl alt="">
          </div>
          <div class="center_r_2">
              <p>{{this.tableData[0].itemid.cnName}} （{{this.tableData[0].itemid.punit.name}}）</p>
              <p>称重单位： {{this.value}} 斤</p>
              <p>去皮重量： {{ this.quzhivalue}} 斤</p>
              <p>500g <img src="../../assets/img/ba3901de851191d191f96a9f09e01ca.png" alt=""></p>
              <p><van-stepper v-model="value" input-width="10vw" @plus="add" @minus="reduce" min="0"  button-size="60px"/></p>
              <span :class="ishorder ? 'aaa' : 'bbb'" style="display:inline-block;width:2vw;height:2vw;border-radius:50%;position:absolute;top:45%;left:15%;"></span>
          </div>
          <div class="center_r_3">
              <p><span>根茎</span><span @click="lookorder()">抽查</span></p>
              <p><span>单价</span><span>{{this.tableData[0].itemid.price}}</span></p>
              <p><span>订货</span><span>{{this.tableData[0].quantity}}（{{this.tableData[0].itemid.punit.name}}）</span></p>
              <p><span>收货</span><span>{{this.tableData[0].quantityYes}} （{{this.tableData[0].itemid.punit.name}}）</span></span></p>
          </div>
          <div class="center_r_4">
            <ul>
              <li>去皮</li>
              <li @click="SkinValue">减皮值</li>
              <li @click="RoundingPage">取整</li>
              <li>累加</li>
              <li @click="lackShop">缺货</li>
              <li>事件</li>
              <li @click="orderComfig">按订单收货</li>
              <li>置皮</li>
              <!-- <li v-if="this.bb" @click="configshop()">{{this.bb[0].hasEdit == '1' ? '调整数量' : '确认收货'}}</li> -->
              <li  @click="configshop()">{{this.bb[0] && this.bb[0].hasEdit == '1' ? '调整数量' : '确认收货'}}</li>
            </ul>
          </div>
      </div>
    </div>
    <div class="rightEn">
      <ul>
        <li>全部</li>
        <li v-for="(value, index) in arrEn" :key="index">{{ value }}</li>
      </ul>
    </div>
       <van-dialog class="log" v-model="show" title="入库抽查" confirmButtonColor="red" show-cancel-button width="35%" style="font-size:1.6vw;">
          <div style="display:flex;height:16vw;flex-direction: column;margin:1vw 1vw;">
            <p><span style="padding-right:2vw;">入库数量:</span> {{this.tableData[0].quantityYes}}（500g）</p>
            <p style="margin-top:2vw;"><span style="padding-right:2vw;">抽查数量:</span><input type="text" v-model="params.checksQuantity"></p>
            <p style="display:flex;margin-top:2vw;"><span style="padding-right:2vw;">合格数量:</span><input type="text" v-model="params.qualifiedQuantity"></p>
          </div>
        </van-dialog>

        <van-dialog @confirm="killvalue" class="log" v-model="isshow" title="去皮值" confirmButtonColor="red" show-cancel-button width="35%" style="font-size:1.6vw;">
          <div style="display:flex;height:10vw;flex-direction: column;margin:1vw 1vw;align-items:center;">
            <p style="display:flex;margin-top:3vw;"><span style="padding-right:1vw;">皮值:</span><input type="text" v-model="pival"></p>
          </div>
        </van-dialog>
        <set-alert v-if="this.$root.handelSetAlertType"></set-alert>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { Dialog } from 'vant'
import {mapState ,mapGetters ,mapMutations , mapActions} from 'Vuex'
export default {
  data() {
    return {
      fatherText:'',
      pival:0.0,
      isshow:false,
      arrEn: [],
      center_l_class: 0,
      value:0,
      tableData:[],
      aa:[],
      activeindex:0,
      bb:[],
      show:false,
      ishorder:true,
      Company:'',
      quzhivalue:0,
      params:{
        checksQuantity:'',
        qualifiedQuantity:'',
        outOfStock:'',
        itemId:'',
        quantityYes:'',
        pictureUrl:''
      }
    };
  },
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
    computed: {
     ...mapState({
       project: state => state.PROJECT.name
     })
  },
  mounted() {
    window.androidvalMethods = this.androidvalMethods
    window.createImageBitmap = this.createImageBitmap
    this.arrEn = this.generateBig();
  },
  created () {
    this.initData()
  },
  methods: {
    //称重
    androidvalMethods (val,type) {
      this.value = val
      if (type === 'true') {
      this.value = val 
      this.ishorder = false
      }
      this.ishorder = true
    },
    add () {
    this.Company == 43 ? this.value = this.value + 1 : this.value
    },
    reduce () {
      if (this.value < 1) return
    this.Company == 43 ? this.value = this.value - 1 : this.value    
    },
    createImageBitmap (url) {
       this.params.pictureUrl = url
        this.params.quantityYes = this.tableData[0].quantityYes
        this.params.itemId = this.tableData[0].id
        this.params.outOfStock = this.value
        this.$API.configShop(this.params).then((res)=>{
          if (res.result === 'success') {
            Toast('确认收货成功');
            this.initData()
          }
        })
    },
    //确认收货
    configshop () {
      if (!this.ishorder){
        return
      }
      $photo.requestCamera()

    },
    orderComfig () {
      if (!this.ishorder){
        return
      }
       if (this.value >= this.tableData[0].quantity) {
         Dialog.confirm({
          title: '',
          message: '确定按订户数量收货',
        })
          .then(() => {
            this.params.quantityYes = this.tableData[0].quantityYes
            this.params.itemId = this.tableData[0].id
            this.params.outOfStock = this.value
            this.$API.configShop(this.params).then((res)=>{
              if (res.result === 'success') {
                Toast('按照订单收货成功');
                this.initData()
              }
            })
          })
          .catch(() => {
            // on cancel
          });
       }else{
          Toast('称重数量小于订货数量，不允许使用按订货收货功能！');
       }
    },
    lookorder () {
       this.show = true
    },
    //皮值
    SkinValue () {
      this.isshow = true
    },
    lackShop () {
    this.params.quantityYes = 0
      this.params.itemId = this.tableData[0].id
      this.params.outOfStock = '0'
       this.$API.configShop(this.params).then((res)=>{
         if (res.result === 'success') {
           Toast('缺货');
           this.initData()
         }
       })
    },
    shoptype (type) {
      this.center_l_class = type
      this.tableData = []
      this.activeindex = 0
        this.$API.goodsDetails({id:this.$route.query.id}).then((res)=>{
          if (this.center_l_class === 0 ) { 
            this.tableData = res.wshOrders
            this.aa = res.wshOrders
            this.bb = res.wshOrders
          }else{
            this.bb = res.yshOrders
            this.tableData = res.yshOrders
          }
         
       })
    },
    killvalue () {
      this.quzhivalue =  this.value - this.pival
    },
    initData () {
         this.$API.goodsDetails({id:this.$route.query.id}).then((res)=>{
         this.tableData = res.wshOrders
         this.aa = res.wshOrders
         this.bb = res.wshOrders
         this.Company = this.tableData[0].itemid.punit.id
       })
    },
    generateBig() {
      let ch_big = "A";
      let str_big = [];
      for (var i = 0; i < 26; i++) {
        str_big.push(String.fromCharCode(ch_big.charCodeAt(0) + i));
      }
      return str_big;
    },
    orderSearch (item,index) {
       this.activeindex = index
       this.tableData = []
       this.tableData.push(item)
    },
    back () {
      this.$router.go(-1)
    },
    //取整
    RoundingPage () {
       this.$router.push({
         path:'/roundingSetting'
       })
    },
  }
};
</script>

<style scoped>
.log /deep/ .van-dialog__header{
    padding-top: 1.3vw;
    font-weight: 500;
    padding-bottom: 1.3vw;
    line-height: 24px;
    text-align: center;
    border-bottom: 1px solid #ccc;
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
.aaa {
  background:red;
}
.bbb{
  background:green;
}
.rightEn ul li {
  font-size: 1.4vw;
  line-height: 3.3vh;
}
.rightEn ul li:nth-child(1) {
  margin-top: 2vh;
}
.center {
  width: 97vw;
  height: 92vh;
  margin-top: 2vh;
  overflow: hidden;
  background: #fff;
  border-right: 4px solid #ccc;
}
.center_l {
  width: 20vw;
  float: left;
  height: 92vh;
  border-right: 1vw solid rgb(244, 242, 246);
}
.center_l p{
    height: 6vh;
}
.center_l p span {
  width: 50%;
  float: left;
  display: block;
  height: 6vh;
  line-height: 6vh;
  text-align: center;
  font-size: 1.2vw;
  position: relative;
}
.center_l_class {
  background: rgb(255, 228, 228);
  color: red;
}
.center_l p span .tip{
    width: 1vw;
    height: 1vw;
    text-align: center;
    line-height: 1vw;
    color: #fff;
    border-radius: 50%;
    background: red;
    display: block;
    position: absolute;
    top: 1.4vh;
    right: 2.2vw;
    font-size:0.8vw;
}
.center_l ul{
    height: 86vh;
    overflow-y: auto;
    overflow-x: hidden;
}
.center_l ul li{
    height: 6vh;
    line-height: 6vh;
    text-indent: 2vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.center_l_ul{
    /* background: rgb(244,244,244); */
    background: #fff;
}
.active {
  background: rgb(244,244,244); 
}
.center_r{
    width: 72%;
    margin-left: 25%;
    margin-top: 4vh;
    overflow: hidden;
    height: 66vh;
}
.center_r_1{
    width: 40%;
    height: 50%;
    background: rgb(244,244,244);
    float: left;
    display: flex;
    justify-content:center;
    align-items:center;
}
.center_r_1 img{
    width: 100%;
}
.center_r_2{
    width: 60%;
    height: 50%;
    float: left;
    background: rgb(254,233,233);
    position: relative;
}
.center_r_2 p:nth-child(1){
    line-height: 6vh;
    top: 0;
    left: 0;
    position: absolute;
    text-indent: 2vw;
}
.center_r_2 p:nth-child(2),.center_r_2 p:nth-child(3){
    color: rgb(137,132,132);
    font-size: 1vw;
    position: absolute;
    right: 2vw;
}
.center_r_2 p:nth-child(2){
    top: 2vh;
}
.center_r_2 p:nth-child(3){
    top: 5vh;
}
.center_r_2 p:nth-child(4){
    color: rgb(137,132,132);
    font-size: 1.4vw;
    position: absolute;
    right: 2vw;
    bottom: 2vh;
    display: flex;
    align-items:center;
}
.center_r_2 p:nth-child(4) img{
    width: 1.6vw;
    margin-left: 1vw;
}
.center_r_2 p:nth-child(5){
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
   justify-content:center;
   align-items:center;
}
.center_r_2 >>> .van-stepper__input{
    font-size: 2.4vw;
    font-weight: bold;
    color: red;
}
.center_r_2 >>> .van-stepper__minus,.center_r_2 >>> .van-stepper__plus{
   background: rgb(254,233,233) !important;
}
.center_r_3 p{
    height: 25%;
    display: flex;
    align-items:center;
    border-bottom: 1px solid #ccc;
    color: rgb(137,132,132);
}
.center_r_3 p:nth-child(1){
  background: rgb(253,92,72);
  color: #fff;
}
.center_r_3{
    width: 40%;
    height: 50%;
    float: left;
    background: rgb(254,233,233);
}
.center_r_3 span:nth-child(1){
  display: inline-block;
  margin-left: 2vw;
}
.center_r_3 span:nth-child(2){
  display: inline-block;
  margin-left: 8vw;
}
.center_r_3 p:nth-child(1) span:nth-child(2){
  width: 5vw;
  background: #fff;
  height: 3vh;
  text-align: center;
  line-height: 3vh;
  color: #eb002a;
  margin-left: 12vw;
}
.center_r_4{
  width: 60%;
    height: 50%;
    float: left;
    background: rgb(253,92,72);
}
.center_r_4 ul{
  height: 100%;
  border-left: 1px solid #fff;
  border-top: 1px solid #fff;
}
.center_r_4 li{
  float: left;
  width: 33%;
  height: 33.3%;
  display: flex;
  justify-content:center;
  align-items:center;
  color: #fff;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
}
</style>
