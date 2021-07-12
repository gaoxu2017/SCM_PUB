<template>
  <div>
    <header-wrapper :fatherText="project"></header-wrapper> 
    <!-- <div class="top">
      <van-icon
        name="arrow-left"
        @click="$router.go(-1)"
        size="3vh"
      />{{project}}<img src="../../assets/img/蓝牙.png" alt="" /><img
        src="../../assets/img/设置.png"
        alt=""
      />
    </div> -->
    <div class="center">
        <span style="margin: 0vw 2vw 0 6vw;">供应商:</span>
            <el-select v-model="supplier" @change="changeSupplier(supplier)" placeholder="请选择">
              <el-option
                v-for="item in supplierList"
                :key="item.id"
                :label="item.cnname"
                :value="item.id">
              </el-option>
            </el-select>
        <!-- <el-dropdown > 
          <span class="el-dropdown-link">
            库房查询
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="changeSupplier(item)" v-for="(item,index) in supplierList" :command="item" :key="index">{{item.cnname}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown> -->

        <span style="margin: 0vw 2vw 0 6vw;font-size:1.4vw;"> 到货日期: </span>
        <div class="block">
          <el-date-picker
            type="date"
            v-model="deliverDate"
            :clearable="false"
            @change="changeTime"
            value-format="yyyy-MM-dd"
            placeholder="请选择日期">
          </el-date-picker>
        </div>

      <span @click="search()" style="position:absolute;right:2.4vw;"> <img src="../../assets/img/02.png" alt="" /></span>
    </div>
    <div class="bottom">
      <p><span style="background: rgb(91, 193, 4)" @click="Receiving(2)"></span>收货中</p>
      <p><span style="background: rgb(253, 81, 65)" @click="Receiving(1)"></span>已收货</p>
      <p><span style="background: rgb(74, 137, 254)" @click="Receiving(0)"></span>未收货</p>
      <ul>
        <li
          v-for="(value, index) in itemsList"
          :key="index"
          :class="'receivingStatus_' + value.receiveStatus"
          @click="$router.push({path:'./GoodsReceiving',query:{'item':value.id,'component': component,'deliverDate':deliverDate,ids:supplier,shop:value.num,noshop:value.count - value.num,type:value.receiveStatus}})"
        >
          <span>{{ value.num }}/{{ value.count }}</span>
          <span>{{ value.cnName }}</span>
          <span>(散)</span>
        </li>
      </ul>
    </div>
    <div class="rightEn">
      <ul>
        <li @click="firstChar(null)">全部</li>
        <li v-for="(value, index) in arrEn" :key="index" @click="firstChar(value)">{{ value }}</li>
      </ul>
    </div>
    <set-alert v-if="this.$root.handelSetAlertType"></set-alert>
  </div>
</template>

<script>
import {mapState} from 'Vuex'
export default {
  data() {
    return {
      arrEn: [],
      center_l_class: 0,
      value: 1,
      // value1: new Date()
      component: this.$route.query.component,
      // deliverDate: new Date(),
      deliverDate: "",
      searchCondition: {},
      itemsList: [],
      supplierList:[],
      supplier:[],
      data:{},
    };
  },
    computed: {
     ...mapState({
       project: state => state.PROJECT.name,
       project_id: state => state.PROJECT.id
     })
  },
  mounted() {
    this.arrEn = this.generateBig();
    this.getSupplierItems();
  },
  methods: {
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
    //搜索
    search () {
      this.$router.push({
        path:'/SearchForGoods'
      })
    },
    changeTime () {
       this.searchCondition.deliverDate = this.deliverDate;
         this.$API.supplierItems(this.searchCondition).then((res)=>{
         this.data=res
         this.itemsList = res.itemsList;
         this.supplierList=res.supplierList;
      });
    },
    generateBig() {
      let ch_big = "A";
      let str_big = [];
      for (var i = 0; i < 26; i++) {
        str_big.push(String.fromCharCode(ch_big.charCodeAt(0) + i));
      }
      return str_big;
    },
    async getSupplierItems() {
      this.deliverDate = this.getCurrentTime()
      this.searchCondition.deliverDate = this.deliverDate;
      // this.searchCondition.compomentId=this.component.id
      this.searchCondition.compomentId = this.project_id;
      await this.$API.supplierItems(this.searchCondition).then((res)=>{
         this.data=res
         this.itemsList = res.itemsList;
         this.supplierList=res.supplierList;
         this.supplier = res.supplierList[0].id
      });
    },
    Receiving (type) {
      this.searchCondition.receiveStatus = type
      this.$API.supplierItems(this.searchCondition).then((res)=>{
              this.data=res
              this.itemsList = res.itemsList;
              this.supplierList=res.supplierList;
            });
    },
    changeSupplier(value){
      debugger
      this.supplier=value
      console.log(this.supplier)
      this.itemsList=this.data.itemsList.filter(val=>val.supplierId==value.id)
    },
    async firstChar(value){
      let condition= this.searchCondition;
    
      condition.firstChar=value
      if (this.supplier!=null) {
        condition.supplierId=this.supplier.id
      }
      await this.$API.supplierItems(this.searchCondition).then((res)=>{
         this.data=res
         let ids=res.itemsList.map(item=> item.id);
         this.itemsList=this.data.itemsList.filter(val=>ids.indexOf(val.id)!=-1)
      });
      // const { data: res } = await supplierItems(condition);

    }
  },
};
</script>

<style scoped>
.rightEn ul {
  position: fixed;
  right: 0;
  top: 14vh;
  width: 5vw;
  text-align: center;
  color: #eb002a;
  background: #fff;
  height: 86vh;
  overflow-y: auto;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
.rightEn ul li {
  font-size: 1.4vw;
  line-height: 3vh;
}
.rightEn ul li:nth-child(1) {
  margin-top: 2vh;
}
.center {
  height: 6vh;
  background: #fff;
  display: flex;
  align-items: center;
  position: relative;
}
.el-dropdown {
  float: left;
  margin-left: 2vw;
}
.center span:nth-child(2) {
  display: block;
  float: left;
  margin-left: 12vw;
}
.center span:nth-child(4) {
  position: absolute;
  right: 2vw;
}
.center span:nth-child(4) img {
  width: 2vw;
}
.bottom {
  height: 86vh;
  margin-top: 2vh;
  background: #fff;
  width: 94.5vw;
  position: relative;
  overflow: hidden;
}
.bottom span {
  width: 1vw;
  height: 1vw;
  margin-right: 1vw;
}
.bottom p {
  position: absolute;
  height: 6vh;
  display: flex;
  align-items: center;
  top: 0;
}
.bottom p:nth-child(1) {
  right: 2.2vw;
}
.bottom p:nth-child(2) {
  right: 10vw;
}
.bottom p:nth-child(3) {
  right: 18vw;
}
.bottom ul {
  height: 80vh;
  margin-top: 6vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.bottom ul li {
  width: 16%;
  height: 10%;
  position: relative;
  border-radius: 0.5vw;
  margin-left: 3.5%;
  margin-bottom: 3vh;
  float: left;
  color: #fff;
}
.bottom ul li span {
  position: absolute;
}
.bottom ul li span:nth-child(1) {
  width: 3vw;
  height: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  background: #fff;
  color: #ccc;
  margin-right: 0;
}
.bottom ul li span:nth-child(2) {
  display: block;
  width: 100%;
  font-size: 1.3vw;
  left: 2vw;
  top: 1vh;
}
.bottom ul li span:nth-child(3) {
  left: 2vw;
  top: 3.2vh;
}
.receivingStatus_0 {
  background-color: rgb(74, 137, 254);
}
.receivingStatus_1 {
  background-color: rgb(253, 81, 65);
}
.receivingStatus_2 {
  background-color: rgb(91, 193, 4);
}
</style>