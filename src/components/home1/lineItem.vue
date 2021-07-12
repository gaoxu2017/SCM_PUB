<template>
  <div>
    <header-wrapper :fatherText="fatherText"></header-wrapper> 
    <!-- <div class="top">
      <van-icon @click="back()" name="arrow-left" size="3vh" />货品详情
      <img src="../../assets/img/蓝牙.png" alt="" /><img
        src="../../assets/img/设置.png"
        alt=""
      />
    </div> -->
    <div class="center">
        <p><span>共有<b style="color:red">&nbsp;{{this.tableData.length}}&nbsp;</b>件商品</span> <span>到货日期：{{this.aa | dateFormat}}</span></p>
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
            <li v-for="(item ,index) in tableData" :key="index">
                <span>{{item.itemid.cnName}}</span>
                <span>{{item.quantity}}</span>
                <span>{{item.quantityYes}}</span>
                <span>{{item.itemid.price}}</span>
                <span>{{item.amount}} </span>
                <span>{{item.checksQuantity}}</span>
                <span>{{item.qualifiedQuantity}}</span>
                <span v-if="item.pictureUrl" style="color:red;" @click="lookImg(item.pictureUrl)">图片</span>
                <span v-if="!item.pictureUrl" >图片</span>
                <!-- <img :src="item.pictureUrl" alt=""> -->
            </li>
            <li>
                <span style="text-align: center;line-height:6vh ;margin-top: 0vh;">合计</span>
                <span>{{this.total}}</span>
                <span>{{this.ruku}}</span>
                <span>{{this.price}}</span>
                <span>{{this.heji}}</span>
                <span>{{this.choucha}}</span>
                <span>{{this.hege}}</span>
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

    <div class="examine" v-if="this.$route.query.from || this.$route.query.from === 'no'" @click="handelExamine()">
       <img src="../../assets/img/a8420be7eea9fc9ee8023b762862e35.png" alt="">
    </div>

    <van-dialog v-model="show" title="标题" show-cancel-button>
      <img style="width:100% !important;" :src="pictual" />
    </van-dialog>
    <set-alert v-if="this.$root.handelSetAlertType"></set-alert>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { Dialog } from 'vant'
export default {
  data() {
    return {
      arrEn: [],
      fatherText:'货品详情',
      show:false,
      tableData:[],
      aa:'',
      total:0,
      ruku:0,
      price:0,
      heji:0,
      choucha:0,
      hege:0,
      pictual:''
    };
  },
  created () {
    this.initData()
  },
  mounted() {
    this.arrEn = this.generateBig();
    this.aa = Number(this.$route.query.da)
  },
  methods: {
    lookImg (val) {
      this.show = true
      this.pictual = val
    },
    back () {
      this.$router.go(-1)
    },
    initData () {
       this.$API.goodsDetails({id:this.$route.query.id}).then((res)=>{
         if (this.$route.query.from === 'no') {
           this.tableData = res.orderItemList
         }else{
         if (this.$route.query.type == 1 ) {
           this.tableData = res.yshOrders
         }else{
          this.tableData = res.wshOrders
         }
         }

         for (let i = 0; i < this.tableData.length;i++){
           this.total += this.tableData[i].quantity
           this.ruku += this.tableData[i].quantityYes
           this.price += this.tableData[i].itemid.price
           this.heji += this.tableData[i].amount
           this.choucha += this.tableData[i].checksQuantity
           this.hege += this.tableData[i].qualifiedQuantity
         }
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
    handelExamine () {
      let params = {
        ids:this.$route.query.id
      }
      this.$API.examineIndex(params).then((res)=>{
         const { result } = res
         if (result === 'success') {
            Toast('审核成功')
            setTimeout(()=>{
              this.$router.go(-1)
            },1000)
         }
      })
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

.rightEn ul{
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
.rightEn ul li{
  font-size: 1.4vw;
  line-height: 3.3vh;
}
.rightEn ul li:nth-child(1){
  margin-top: 2vh;
}
.center{
    width: 95vw;
    height: 92vh;
    margin-top: 2vh;
    background: #fff;
    border-right: 4px solid #ccc;
}
.center p{
    height: 6vh;
    position: relative;
    font-size: 1.2vw;
}
.center p span:nth-child(1){
    position: absolute;
    line-height: 6vh;
    top: 0;
    left: 2vw;
}
.center p span:nth-child(2){
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
.center ul li span{
    display: block;
    float: left;
    width: 12%;
    text-align: center;
    border-left: 1px solid #ccc;
}
.center ul li{
    border: 1px solid #ccc;
    border-left: none;
}
.center ol{
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
.center ol li span{
    display: block;
    float: left;
    width: 12%;
    text-align: center;
    border-left: 1px solid #ccc;
}
.center ol li span:nth-child(1){
    line-height: 1.4vw;
    text-align: left;
    margin-top: 1vh;
    text-align: center;
}
.center ol span:nth-child(8){
  height: 6vh;
  display: flex;
  justify-content:center;
  align-items:center;
}
.examine{
  position: absolute;
  bottom: 10%;
  right: 10%;
}
.examine img{
  width: 60%;
}
</style>
