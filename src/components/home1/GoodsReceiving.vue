<!--
 * @Author: gaoxu
 * @Date: 2021-06-21 14:04:49
 * @LastEditors: g05047
 * @LastEditTime: 2021-07-09 14:22:22
 * @Description: file content
-->
<template>
  <div>
     <header-wrapper :fatherText="fatherText"></header-wrapper>
    <!-- <div class="top">
      <van-icon name="arrow-left" size="3vh" @click="back" />员工餐厅<img
        src="../../assets/img/蓝牙.png"
        alt=""
      /><img src="../../assets/img/设置.png" alt="" />
    </div> -->
    <div class="center">
      <div class="center1">
        <p>
          <span
            :class="center_1_class == '0' ? 'center_1_class' : ''"
            @click="center_1_classs(0)"
            >未收货<span v-if="this.$route.query.noshop > 0">{{this.$route.query.noshop}}</span></span
          >
        </p>
        <p>
          <span
            :class="center_1_class == '1' ? 'center_1_class' : ''"
            @click="center_1_classs(1)"
            >已收货<span v-if="this.$route.query.shop">{{this.$route.query.shop}}</span></span
          >
        </p>
      </div>
      <div class="center2">
        <div class="center_l">
          <p>
            <span>{{this.dawei.cnName}}({{this.dawei.packspec}})</span>
            <span>
             <el-select v-model="params.warehouseId" placeholder="请选择">
              <el-option
                v-for="item in selectdata"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
           </span>
          </p>
          <ul>
            <li v-for="(item,index) in tableData" :key="index">
              <van-checkbox
                @click="handelCheck(item,index)"
                v-model="item.checked"
                checked-color="#ee0a24"
                shape="square"
              ></van-checkbox>
              <div class="center_l_li" @click="shoplist(item)">
                <span>{{item.oid.code}}</span>
                <span>订货：{{item.quantity}}</span>
                <span>{{item.oid.warehouse.name}}</span>
                <span>单价：{{item.itemid.price}}</span>
                <span>收货：{{item.quantityYes}}</span>
              </div>
            </li>
          </ul>
          <div>
            <span style="margin-left: 2vw;"
              ><van-checkbox
                v-model="checked"
                checked-color="#ee0a24"
                shape="square"
                @click="chooseCheked()"
                >全选</van-checkbox
              ></span
            ><span style="margin-left: 4vw;">
              已选：<span style="color:red">{{shopTotal.selected}}</span> </span
            ><span style="margin-left: 4vw;"
              >订货：<span style="color:red">{{shopTotal.orderGoods}}</span></span
            ><span style="margin-left: 4vw;"
              >收货：<span style="color:red">{{shopTotal.receivingGoode}}</span></span
            >
          </div>
        </div>
        <div class="center_r">
            <div class="center_r_1">
                <img src="http://img1.juimg.com/171026/330869-1G02604495057.jpg" alt="">
                <span>{{this.dawei.cnName}} ({{this.dawei.punit.enname}}) ({{this.dawei.packspec}})</span>
                <span>称重单位： {{weighValue}}  （{{this.dawei.punit.enname}}）</span>
                <span>去皮重量：{{this.quzhivalue}}（{{this.dawei.punit.enname}}）</span>
                <span @click="lookorder()">抽&nbsp;&nbsp;查</span>
                <p>
                    <img @click="reduce()" src="../../assets/img/916f6e6e1554f74fe25b233d5effaaa.png" alt="">
                    <span>N</span>
                    <input v-model="weighValue" type="text">
                    <span><img src="../../assets/img/ba3901de851191d191f96a9f09e01ca.png" alt="">500g</span>
                    <img @click="add()" src="../../assets/img/f809717604b1efbced4f33a2f8879c3.png" alt="">
                </p>
                <div :class="ishorder ? 'aaa' : 'bbb'" style="display:inline-block;width:1.5vw;height:1.5vw;border-radius:50%;position:absolute;bottom:8%;left:26%;"></div>
            </div>
            <div class="center_r_2">
                <ul>
              <li>去皮</li>
              <li @click="SkinValue">减皮值</li>
              <li @click="RoundingPage">取整</li>
              <li>累加</li>
              <li @click="lackShop">缺货</li>
              <li>事件</li>
              <li @click="orderComfig">按订货收货</li>
              <li>置皮</li>
              <!-- <li v-if="this.bb" @click="configshop()">{{this.bb[0].hasEdit == '1' ? '调整数量' : '确认收货'}}</li> -->
              <li @click="configshop()">确认收货</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
         <van-dialog class="log" v-model="show" title="入库抽查" confirmButtonColor="red" show-cancel-button width="35%" style="font-size:1.6vw;">
          <div style="display:flex;height:16vw;flex-direction: column;margin:1vw 1vw;">
            <p><span style="padding-right:2vw;">入库数量:</span> {{this.tableData[0] ? this.tableData[0].quantityYes : ''}}（500g）</p>
            <p style="margin-top:2vw;"><span style="padding-right:2vw;">抽查数量:</span><input type="text" v-model="shopParams.checksQuantity"></p>
            <p style="display:flex;margin-top:2vw;"><span style="padding-right:2vw;">合格数量:</span><input type="text" v-model="shopParams.qualifiedQuantity"></p>
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
import {mapState} from 'Vuex'
import { Toast } from 'vant'
import { Dialog } from 'vant'
export default {
  data() {
    return {
      dawei:{},
      fatherText:'员工餐厅',
      show:false, //抽查
      isshow:false,
      weighValue:0,     
      value:0,
      center_1_class: "0",
      checked: 0,
      Company:'',
      params:{
        compomentId:this.project_id,   //项目ID
        deliverDate:this.$route.query.deliverDate,   
        supplierId:'',   //供应商
        itemId:'',
        hasEdit:'',  //未收货0   已收货 1
        warehouseId:0  //仓库id
      },
      tableData:[],
      selectdata:[],
      shopTotal:{
        selected:0,
        orderGoods:0,
        receivingGoode:0
      },
      quzhivalue:0,
      pival:0.0,
      ishorder:true,
      shopParams:{
        checksQuantity:'',
        qualifiedQuantity:'',
        // outOfStock:'',
        orderItemIds:[],
        quantityYes:'',
        pictureUrl:'',
        isBatch:0
      }
    };
  },
  computed: {
    ...mapState({
      project: state => state.PROJECT.name,
      project_id: state => state.PROJECT.id
    })
    },
  created () {
           if(this.$route.query.type == 0 || this.$route.query.type == 2) {
         this.center_1_class = 0
         this.params.hasEdit = ''
       }else{
         this.center_1_class = 1
         this.params.hasEdit = 1
       }
    this.initeList()
  },
  mounted () {
    // window.androidvalMethods = this.androidvalMethods
    window.createImageBitmap = this.createImageBitmap
  },
  methods : {
    back () {
      this.$router.go(-1)
    },
    shoplist (item) {
       this.dawei = item.itemid
    },
    //切换状态
    center_1_classs(num) {
      this.center_1_class = num
      if (num == 0){
        this.params.hasEdit = ''
      }else{
        this.params.hasEdit = 1
      }
      this.initeList(1)
    },
    createImageBitmap (url) {
       this.shopParams.pictureUrl = url
        this.shopParams.quantityYes = this.weighValue
          if (this.shopParams.orderItemIds.length > 1) {
              this.shopParams.isBatch = 1 
            }else{
              this.shopParams.isBatch = 0 
            }
        this.shopParams.orderItemIds = this.shopParams.orderItemIds + ''
        this.$API.goodsOrdderDetails(this.shopParams).then((res)=>{
          if (res.result === 'success') {
            Toast('确认收货成功');
            this.initeList(1)
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
       if (this.weighValue >= this.shopTotal.orderGoods) {
         Dialog.confirm({
          title: '',
          message: '确定按订户数量收货',
        })
          .then(() => {
            if (this.shopParams.orderItemIds.length > 1) {
                this.shopParams.isBatch = 1 
            }else{
                this.shopParams.isBatch = 0 
            }

            this.shopParams.quantityYes = this.weighValue    //订货总和
            // this.shopParams.orderItemIds = this.tableData[0].id
            this.shopParams.orderItemIds = this.shopParams.orderItemIds + ''
            this.$API.goodsOrdderDetails(this.shopParams).then((res)=>{
              if (res.result === 'success') {
                Toast('按照订单收货成功');
                this.initeList(1)
                this.shopTotal.selected = 0
                this.shopTotal.orderGoods = 0
                this.shopTotal.orderGoods = 0
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
    killvalue () {
      this.quzhivalue =  this.weighValue - this.pival
    },
  lackShop () {
    this.shopParams.quantityYes = 0
      this.shopParams.orderItemIds = this.tableData[0].id
       this.$API.goodsOrdderDetails(this.shopParams).then((res)=>{
         if (res.result === 'success') {
           Toast('缺货');
           this.initeList(1)
         }
       })
    },
    //抽查
      lookorder () {
       this.show = true
    },
        //皮值
    SkinValue () {
      this.isshow = true
    },
    //check选择
    handelCheck (item,index) {
      if (item.checked) {
        this.shopTotal.selected ++
        this.shopTotal.orderGoods += item.quantity
        this.shopTotal.receivingGoode += item.quantityYes
        this.shopParams.orderItemIds.push(item.id)
      }else{
        this.shopTotal.selected --
        this.shopTotal.orderGoods -= item.quantity
        this.shopTotal.receivingGoode -= item.quantityYes
        this.shopParams.orderItemIds.splice(index,1)
      }
      console.log(this.shopParams.orderItemIds)
    },
    initeList (type) {
       this.params.compomentId = this.project_id 
       this.params.itemId = this.$route.query.item
       this.params.supplierId = this.$route.query.ids
       this.$API.goodsReceivingDetails(this.params).then((res)=>{
            this.tableData = res.orderItemsList.map((item)=>{
              item.checked = false
              return item
            })
            this.Company = this.tableData[0] ?  this.tableData[0].itemid.punit.id : ''
            if (!type) {
                this.dawei = res.item
                this.selectdata = res.warehouseList
            // this.value= res.warehouseList[0].id
                this.params.warehouseId = res.warehouseList[0].id
            }

            console.log(this.dawei)
       })
    },
    //全选
    chooseCheked () {
      this.shopTotal.selected = 0
      this.shopTotal.orderGoods = 0
      this.shopTotal.receivingGoode = 0
      this.shopParams.orderItemIds = []
      this.tableData = this.tableData.map((item)=>{
        if (this.checked) {
          item.checked = true
          this.shopTotal.selected += 1
          this.shopTotal.orderGoods += item.quantity
          this.shopTotal.receivingGoode += item.quantityYes
          this.shopParams.orderItemIds.push(item.id)
        }else{
          item.checked = false
        }
        return item
      })
    },
    add () {
    this.Company == 43 ? this.weighValue = this.weighValue + 1 : this.weighValue.value
    },
    reduce () {
      if (this.weighValue < 1) return
    this.Company == 43 ? this.weighValue = this.weighValue - 1 : this.weighValue    
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
.center {
  margin-top: 2vh;
  height: 92vh;
  background: #fff;
}
.center .center1 {
  height: 4vh;
  border-bottom: 1px solid #ccc;
}
.center .center1 p {
  float: left;
  width: 50%;
  display: flex;
  justify-content: center;
}
.center .center1 p > span {
  line-height: 4vh;
  width: 16%;
  text-align: center;
  font-size: 1.2vw;
  position: relative;
}
.center_1_class {
  border-bottom: 3px solid #c84645;
  color: #c84645;
}
.center .center1 p > span span {
  position: absolute;
  width: 1vw;
  height: 1vw;
  border-radius: 50%;
  background: #c84645;
  color: #fff;
  text-align: center;
  line-height: 1vw;
  top: 0.5vh;
  right: 1vw;
}
.center2 {
  height: 86vh;
  margin-top: 1vh;
}
.center_l,
.center_r {
  float: left;
  width: 50%;
}
.center_l p:nth-child(1) {
  width: 90%;
  margin-left: 5%;
  border-bottom: 1px solid #ccc;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-dropdown-link {
  padding: 0.5vh 0.5vw;
  border: 1px solid red;
}
.center_l ul {
  width: 90%;
  margin-left: 5%;
  height: 53vh;
  margin-bottom: 2vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.center_l ul li {
  margin-top: 2vh;
  display: flex;
  height: 8vh;
  align-items: center;
  justify-content: space-between;
}
.center_l ul li .center_l_li {
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 1vw;
  height: 8vh;
  position: relative;
}
.center_l_li span {
  color: #ccc;
  position: absolute;
  font-size: 1vw;
}
.center_l_li span:nth-child(1) {
  left: 2vw;
  top: 1.8vh;
}
.center_l_li span:nth-child(2) {
  left: 2vw;
  bottom: 1.8vh;
}
.center_l_li span:nth-child(3) {
  left: 20vw;
  top: 1.8vh;
}
.center_l_li span:nth-child(4) {
  right: 2vw;
  top: 1.8vh;
}
.center_l_li span:nth-child(5) {
  right: 2vw;
  bottom: 1.8vh;
}
.center_l div:nth-child(3) {
  height: 6vh;
  background: rgb(232, 232, 232);
  width: 90%;
  margin-left: 5%;
  display: flex;
  align-items: center;
}
.center_r{
    float: left;
    width: 47%;
    height: 67vh;
    background: rgb(254,233,233);
}
.center_r_1{
    height: 50%;
    position: relative;
}
.center_r_1>img{
    position: absolute;
    top: 2vh;
    left: 5%;
    width: 50%;
    height: 70%;
    background: #fff;
}
.center_r_1 span:nth-child(2){
    position: absolute;
    top: 2vh;
    left: 60%
}
.center_r_1 span:nth-child(3){
    position: absolute;
    top: 6vh;
    left: 60%;
    font-size: 1vw;
    color: #ccc;
}
.center_r_1>span:nth-child(4){
    position: absolute;
    top: 9vh;
    left: 60%;
    font-size: 1vw;
    color: #ccc;
}
.center_r_1 span:nth-child(5){
    position: absolute;
    width: 6vw;
    height: 3vh;
    text-align: center;
    line-height: 3vh;
    color: #fff;
    background: #c84645;
    border-radius: 4px;
    top: 14vh;
    left: 60%;
    font-size: 1vw;
}
.center_r_1 p{
    width: 90%;
    left: 5%;
    bottom: 1.5vh;
    position: absolute;
    height: 5vh;
    background: #fff;
    display: flex;
    align-items:center;
}
.center_r_1 p img:nth-child(1){
    width: 2vw;
    position: absolute;
    left: 2vw;
    z-index: 2;
}
.center_r_1 p span:nth-child(2){
    color: #ccc;
    font-size: 1.5vw;
    position: absolute;
    left: 6vw;
    z-index: 2;
    line-height: 5vh;
    top: 0;
}
.center_r_1 p span:nth-child(4){
    color: #ccc;
    position: absolute;
    right: 7vw;
    z-index: 2;
    top: 0;
    display: flex;
    align-items:center;
    height: 5vh;
}
.center_r_1 p span:nth-child(4) img{
    float: left;
    margin-left: -4.5vw;
}
.center_r_1 p img:nth-child(5){
    color: #ccc;
    position: absolute;
    right: 2vw;
    width: 2vw;
    z-index: 2;
}
.center_r_1 p input{
    border: none;
    font-size: 2vw;
    color: red;
    width: 100%;
    text-align: center;
    font-weight: bold;
}
.center_r_2{
    height: 49%;
    border-top: 1vw solid #fff;
}
.center_r_2{
    width: 100%;
    height: 50%;
    float: left;
    background: rgb(253,92,72);
}
.center_r_2 ul{
  height: 100%;
}
.center_r_2 li{
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
.log /deep/ .van-dialog__header{
    padding-top: 1.3vw;
    font-weight: 500;
    padding-bottom: 1.3vw;
    line-height: 24px;
    text-align: center;
    border-bottom: 1px solid #ccc;
}
.aaa {
  background:red;
}
.bbb{
  background:green;
}
</style>
