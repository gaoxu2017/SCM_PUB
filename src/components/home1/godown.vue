<template>
  <div class="box">
      <!-- <div class="top"><van-icon @click="back" name="arrow-left" size="3vh"/>{{project}} <img src="../../assets/img/蓝牙.png" alt=""><img src="../../assets/img/设置.png" alt=""></div> -->
      <header-wrapper :fatherText="project"></header-wrapper>
      <div class="center">
        <span style="margin: 0vw 1vw;font-size:1.4vw;">到货日期:</span>
        <div class="block">
          <el-date-picker
            type="date"
            v-model="params.deliverDate"
            @change="changeTime"
            :clearable="false"
            value-format="yyyy-MM-dd"
            placeholder="请选择日期">
          </el-date-picker>
        </div>
        <span style="margin: 0vw 2vw 0 6vw;">库房:</span>
        <el-dropdown @command="handleCommand"> 
          <span class="el-dropdown-link">
            库房查询
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,index) in storageRoom.warehouseList" :command="item" :key="index">{{item.name}}</el-dropdown-item>

          </el-dropdown-menu>
        </el-dropdown>
        <van-button color="#c84645" @click="goodsReceving">按货品收货</van-button>
        <img src="../../assets/img/02.png" alt="">
      </div>

      <div class="bottom">
        <div class="bottom_l">
          <ul>
            <li :class="companyname == index ? 'activecompany' : ''" v-for ="(item,index) in enterpriseName.supplierList" :key="index" @click="enterpriseOrders(item,index)">
              <span v-if="item.orders.length > 0">{{item.orders.length}}</span>
            {{item.cnname}}
            </li>

          </ul>
        </div>

        <div class="bottom_r">
          <ul>
            <li :class="bottom_r_class==0?'bottom_r_class':''" @click="bottom_r_classs(0)">未收货</li>
            <li :class="bottom_r_class==1?'bottom_r_class':''" @click="bottom_r_classs(1)">收货中</li>
          </ul>
          <div class="bottom_r_b">
            <p>
              <span>序号</span>
              <span>单号</span>
              <span>仓库</span>
              <span>总金额</span>
              <span>到货日期</span>
              <span>操作</span>
            </p>
            <ol>
              <li v-on:click.stop="doThis(item)" v-for ="(item,index) in enterpriseOrderList" v-if="shoptype" :key="index">
                 <span>{{index+1}}
                  <img v-if="bottom_r_class == 0"  src="../../assets/img/未收货.png" alt="">
                  <img v-if="bottom_r_class === 1" src="../../assets/img/收货中.png" alt="">
                </span>
                <span class="order-num">{{item.code}}</span>
                <span>{{item.warehouse.name}}</span>
                <span>{{item.amount}}</span>
                <span>{{item.deliverDate | dateFormat}}</span>
                <span v-on:click.stop="lookorder(item)"><img src="../../assets/img/01.png" alt=""></span>
              </li>
              <div style="text-align:Center;" v-if="!shoptype">
                暂无数据 
              </div>
            </ol>
          </div>
        </div>
      </div>
      <set-alert v-if="this.$root.handelSetAlertType"></set-alert>
  </div>
</template>

<script>
import {StockInPurchase} from '../../request/api'
import {mapState ,mapGetters ,mapMutations , mapActions} from 'Vuex'
export default {
  data(){
    return{
       enterpriseOrder:[],
       enterpriseOrderList:[],
       value4: '',
       companyname:null,
       bottom_r_class:0,
       shoptype:true,
       enterpriseName:[],
       storageRoom:[],
       params:{
         compomentId:'',
         supplierId:'',   //供应商
         deliverDate:'2020-7-02',
         orderCode:'',
         warehouseId:''   //仓库ID
       }
    }
  },
  computed: {
     ...mapState({
       project: state => state.PROJECT.name
     })
  },
  created () {
     this.params.compomentId = this.$route.query.id
     this.params.deliverDate = this.getCurrentTime()
     this.initData()
  },
  methods : {
    //货品收货
    goodsReceving () {
       this.$router.push({
           path:'/receiving',
       })
    },
    getCurrentTime() {
        //获取当前时间并打印
        var _this = this;
    　　let yy = new Date().getFullYear();
    　　let mm = new Date().getMonth()+1;
    　　let dd = new Date().getDate();
    　　let hh = new Date().getHours();
    　　let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
    　　let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
    　　return _this.gettime = yy+'-'+mm+'-'+dd;
    },
    //企业订单查询
    /*
       所有状态都在前端，代码有点乱，自己看吧，如果大佬，要求接口左右两侧分开查询，状态代单独分开。
    */
   //时间筛选
   changeTime () {
     this.initData()
   },
   doThis (item) {
      this.$router.push({
        path:'/staffCanteen',
        query:{
          id:item.id
        }
      })
   },
    back () {
      this.$router.go(-1)
    },
   lookorder (item) {
     this.$router.push({
       path:'/lineItem',
       query:{
         id:item.id,
         da:item.deliverDate,
         type:this.bottom_r_class
       }
     })
   },
   handleCommand (item) {
     this.params.warehouseId = item.id
     this.initData(1)
   },
    enterpriseOrders (item,index) {
      this.companyname = index
      this.params.supplierId = item.id
      this.initData(1)
    },
    initData (type) {
      StockInPurchase(this.params).then((res)=>{
         this.enterpriseOrder = res
         if (type !== 1) {
          this.enterpriseName = res
          this.storageRoom = res
         }
         this.handelData()
      })
    },
    handelData () {
        this.enterpriseOrderList = []
          if (this.bottom_r_class == 0){
            if (this.enterpriseOrder.supplierList.length > 0) {
            for(let x = 0; x < this.enterpriseOrder.supplierList[0].orders.length;x++) {
                this.enterpriseOrderList.push(this.enterpriseOrder.supplierList[0].orders[x])
            }
            }
            // this.shoptype = true

          }else{
            for(let x = 0; x < this.enterpriseOrder.supplierList[0].shzOrders.length;x++) {
              this.enterpriseOrderList.push(this.enterpriseOrder.supplierList[0].shzOrders[x])
           }
           console.log(this.enterpriseOrderList.length)
            // this.shoptype = false
          //   this.enterpriseOrderList = []
          }
          if (this.enterpriseOrderList.length > 0){
            this.shoptype = true
          }else{
            this.shoptype = false
          }
          // if (this.enterpriseOrder.supplierList[0].orders.length > 0) {
          //  this.shoptype = true
          //  for(let x = 0; x < this.enterpriseOrder.supplierList[0].orders.length;x++) {
          //     this.enterpriseOrderList.push(this.enterpriseOrder.supplierList[0].orders[x])
          //  }
          // }else{
          //   this.shoptype = false
          //   this.enterpriseOrderList = []
          // }
         
    },
    bottom_r_classs (num) {
       if (num === 1) { 
        this.bottom_r_class = 1
        for (let i = 0; i < this.enterpriseOrder.supplierList.length;i++) {
          if (this.enterpriseOrder.supplierList[i].shzOrders.length > 0) {
           this.shoptype = true
           for(let x = 0; x < this.enterpriseOrder.supplierList[i].shzOrders.length;x++) {
              this.enterpriseOrderList.push(this.enterpriseOrder.supplierList[i].shzOrders[x])
           }
          }else{
            this.shoptype = false
            this.enterpriseOrderList = []
          }
        }
       }else{
       this.bottom_r_class = 0
       this.handelData()
       }
    }
  }
}
</script>

<style scoped>
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
.van-icon{
  position: absolute;
  top: 1.5vh;
  left: 2vw;
}
.top img:nth-child(2){
  right: 8vh;
}
.top img:nth-child(3){
  right: 3vh;
}

.center{
  height: 6vh;
  position: relative;
  background: #fff;
  display: flex;
  align-items:center;
  font-size: 1vw;
}
.el-dropdown-link {
    cursor: pointer;
    color: #ccc;
  }
.el-icon-arrow-down {
    font-size: 12px;
}
.demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
}
.center img{
  position: absolute;
  right: 2.4vw;
  width: 2vw;
}
.center .van-button{
  position: absolute;
  right: 6.4vw;
  height: 3vh;
}
.bottom{
  height: 87vh;
  margin-top: 1vh;
}
.bottom_l{
  float: left;
  width: 20%;
  background: #fff;
}
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
.bottom_l ul{
  margin-top: 1vh;
  height: 86vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.bottom_l ul li{
    position: relative;
    height: 5vw;
    width: 100%;
    padding-left: 1vw;
    line-height: 5vw;
    font-size: 1.2vw;
    border-bottom: 1px solid #ccc;
}
.bottom_l ul li span{
    width: 1.2vw;
    height: 1.2vw;
    background: #c84645;
    line-height: 1.2vw;
    font-size: 1vw;
    color: #fff;
    text-align: center;
    position: absolute;
    top: 2vh;
    right: 2vw;
    border-radius: 50%;     
}

.bottom_r{
  width: 78%;
  margin-left: 2%;
  background: #fff;
  height: 100%;
  float: left;
}
.bottom_r ul {
  margin-top: 2vh;
  margin-bottom: 2vh;
  overflow: hidden;
}
.bottom_r ul li{
  width: 8vw;
  height: 4vh;
  text-align: center;
  font-size: 1.2vw;
  line-height: 4vh;
  float: left;
  margin: 0 2vw;
}
.bottom_r_class{
  color: #c84645;
  border-bottom: 2px solid #c84645;
}
.bottom_r_b{
  margin: 0 2vw;
}
.bottom_r_b p{
  overflow: hidden;
}
.bottom_r_b p span{
  display: block;
  float: left;
  width: 16.6%;
  height: 6vh;
  text-align: center;
  line-height: 6vh;
  font-size: 1.2vw;
  background: rgb(239,239,239);
}
.bottom_r_b ol{
  height: 73vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.bottom_r_b ol li {
  height: 8vh;
  border-bottom: 1px solid #ccc;
}
.bottom_r_b ol span{
  display: block;
  width: 16.6%;
  float: left;
  line-height: 8vh;
  text-align: center;
  font-size: 1.2vw;
}
.bottom_r_b ol span:nth-child(2){
  width: 16.6%;
  height: 8vh;
  line-height: 1.4vw;
  padding: 2vh 1.5vw;
  box-sizing: border-box;
  word-break: break-all;
}
.bottom_r_b ol span:nth-child(6){
  height: 8vh;
  display: flex;
  justify-content:center;
  align-items:center;
}
.bottom_r_b ol span:nth-child(6) img{
  width: 2vw;
}
.bottom_r_b ol span:nth-child(1){
  height: 8vh;
  position: relative;
}
.bottom_r_b ol span:nth-child(1) img{
  position: absolute;
  top: 0;
  left: 0;
  width: 5.5vw;
} 
.bottom_r_b ol .order-num {
  width: 18.8% ;
}
.block /deep/ .el-input--prefix .el-input__inner{
  /* background: red; */
  width: 60%;
  height: 2vw;;
}
.block /deep/  .el-input__prefix, .el-input__suffix{
  top: -1.4vw;
}
.activecompany {
  background: #ccc;
}
</style>