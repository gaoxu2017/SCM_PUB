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
            <span class="tip" v-if="this.aa.length > 0">{{
              this.aa.length
            }}</span> </span
          ><span
            :class="center_l_class == 1 ? 'center_l_class' : ''"
            @click="shoptype(1)"
            >已收货</span
          >
        </p>
        <ul>
          <li
            class="center_l_ul"
            v-for="(item, index) in bb"
            :key="index"
            v-bind:class="{ active: activeindex === index ? 'active' : '' }"
            @click="orderSearch(item, index)"
          >
            {{ item.itemid.cnName }}
          </li>
        </ul>
      </div>
      <div
        class="center_r"
        v-if="this.tableData[0] && this.tableData.length > 0"
      >
        <div class="center_r_1">
          <img
            v-if="!this.tableData[0].pictureUrl"
            src="../../assets/img/aec89a3cb114ffde370154f40caa824.png"
            alt=""
          />
          <img
            v-if="this.tableData[0].pictureUrl"
            :src="this.tableData[0].pictureUrl"
            alt=""
          />
        </div>
        <div class="center_r_2">
          <p
            style="
              width: 32vw;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            "
          >
            {{ this.tableData[0].itemid.cnName }} （{{
              this.tableData[0].itemid.punit.name
            }}）
          </p>
          <p>称重单位： &nbsp;&nbsp; 斤</p>
          <p>去皮重量： {{ this.quzhivalue }} 斤</p>
          <p>
            500g
            <img
              @click="imgSuoding = !imgSuoding"
              style="z-index: 2"
              v-if="!this.imgSuoding"
              src="../../assets/img/ba3901de851191d191f96a9f09e01ca.png"
              alt=""
            />
            <img
              v-else
              @click="imgSuoding = !imgSuoding"
              style="z-index: 2"
              src="../../assets/img/2c103f98acf019844e2291d0ba5d6d4.png"
              alt=""
            />
          </p>
          <p>
            <van-stepper
              v-model="value"
              :decimal-length="2"
              input-width="10vw"
              @plus="add"
              :min="Company==43? -999:0"
              @minus="reduce"
              button-size="40px"
            />
          </p>
          <span
            :class="ishorder ? 'aaa' : 'bbb'"
            style="
              display: inline-block;
              width: 2vw;
              height: 2vw;
              border-radius: 50%;
              position: absolute;
              top: 45%;
              left: 15%;
            "
          ></span>
        </div>
        <div class="center_r_3">
          <p><span>根茎</span><span @click="lookorder()">抽查</span></p>
          <p>
            <span>单价</span><span>{{ this.tableData[0].itemid.price }}</span>
          </p>
          <p>
            <span>订货</span
            ><span
              >{{ this.tableData[0].quantity }}（{{
                this.tableData[0].itemid.punit.name
              }}）</span
            >
          </p>
          <p>
            <span>收货</span
            ><span
              >{{ this.tableData[0].quantityYes }} （{{
                this.tableData[0].itemid.punit.name
              }}）</span
            >
          </p>
        </div>
        <div class="center_r_4">
          <ul>
            <li @click="handelPeel">去皮</li>
            <li @click="SkinValue">减皮值</li>
            <li @click="RoundingPage">取整<br />{{ this.roundingVal }}</li>
            <li @click="accumulation">累加</li>
            <li @click="lackShop">缺货</li>
            <li>事件</li>
            <li @click="orderComfig">按订单收货</li>
            <li>置皮</li>
            <!-- <li v-if="this.bb" @click="configshop()">{{this.bb[0].hasEdit == '1' ? '调整数量' : '确认收货'}}</li> -->
            <li @click="configshop()">
              {{
                this.bb[0] && this.bb[0].hasEdit == "1"
                  ? "调整数量"
                  : "确认收货"
              }}
            </li>
          </ul>
        </div>
      </div>
      <div class="center_r" v-else style="text-align: center">暂无数据</div>
    </div>
    <van-dialog
      class="log"
      v-model="show"
      title="入库抽查"
      confirmButtonColor="red"
      show-cancel-button
      width="35%"
      style="font-size: 1.6vw"
    >
      <div
        style="
          display: flex;
          height: 16vw;
          flex-direction: column;
          margin: 1vw 1vw;
        "
      >
        <p>
          <span style="padding-right: 2vw">入库数量:</span>
          {{ this.tableData[0] ? this.tableData[0].quantityYes : "" }}（500g）
        </p>
        <p style="margin-top: 2vw">
          <span style="padding-right: 2vw">抽查数量:</span
          ><input
            type="text"
            v-model="params.checksQuantity"
            style="border: 0.5px solid rgb(192 192 192)"
          />
        </p>
        <p style="display: flex; margin-top: 2vw">
          <span style="padding-right: 2vw">合格数量:</span
          ><input
            type="text"
            v-model="params.qualifiedQuantity"
            style="border: 0.5px solid rgb(192 192 192)"
          />
        </p>
      </div>
    </van-dialog>

    <van-dialog
      @confirm="killvalue"
      class="log"
      v-model="isshow"
      title="去皮值"
      confirmButtonColor="red"
      show-cancel-button
      width="80%"
      style="font-size: 1.6vw"
    >
      <div>
        <ul class="jianpizhiVal" style="display: flex; flex-wrap: wrap">
          <li
            @click="choosepeel(item, index, $event)"
            :class="[index == peelIndex ? 'chooseItem' : '']"
            style="background: rgb(232 97 96)"
            v-for="(item, index) in shopDes"
            :key="index"
          >
            <div>
              {{ item.value }}
            </div>
            <div class="jianpizhiVal-first">
              <span
                @click.stop="reduceVal(item, $event)"
                style="background: rgb(190 190 190)"
                >-</span
              >
              {{ item.count }}
              <span
                @click.stop="addVal(item, $event)"
                style="background: rgb(190 190 190)"
                >+</span
              >
            </div>
          </li>
        </ul>
      </div>
      <div style="display: flex; flex-direction: column; margin: 1vw 1vw">
        <p style="display: flex; margin-top: 3vw; justify-content: center">
          <span style="padding-right: 1vw">皮值:</span
          ><input
            type="text"
            style="border: 0.5px solid rgb(192 192 192); width: 43vw"
            v-model="pival"
          />
        </p>
      </div>
    </van-dialog>
    <van-popup :style="{ height: '33%', width: '40%' }" v-model="setNumshow">
      <ul>
        <li
          v-for="(item, index) in setList"
          :key="index"
          @click="getchoose(item, index)"
          @touchstart.stop="getTouchStart(item, index)"
          @touchend.stop="getTouchEnd(item, index)"
        >
          <div :class="[item.checked ? '' : 'chooseSet']">
            {{ item.description }}
          </div>
          <div>
            <p>
              <img
                src="./../../assets/img/选中.png"
                v-if="item.chooseTypes"
                alt=""
              />
            </p>
            <p>
              <img src="./../../assets/img/锁.png" alt="" v-if="item.suotype" />
            </p>
          </div>
        </li>
      </ul>
    </van-popup>
    <set-alert v-if="this.$root.handelSetAlertType"></set-alert>
  </div>
</template>

<script>
import { Slider, Toast } from "vant";
import { Dialog, Popup } from "vant";
import { mapState, mapGetters, mapMutations, mapActions } from "Vuex";
export default {
  data() {
    return {
      setNumshow: false,
      shopDes: [],
      fatherText: "",
      pival: 0.0,
      isshow: false,
      arrEn: [],
      center_l_class: 0,
      value: 1.25,
      tableData: [],
      aa: [],
      peelIndex: null,
      activeindex: 0,
      bb: [],
      show: false,
      ishorder: true,
      Company: "",
      quzhivalue: 0,
      setList: [],
      checked: true,
      time: "",
      setType: true,
      setdirstType: null,
      suoding: false,
      imgSuoding: false,
      params: {
        checksQuantity: "",
        qualifiedQuantity: "",
        outOfStock: "",
        itemId: "",
        quantityYes: "",
        pictureUrl: "",
      },
    };
  },
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  computed: {
    ...mapState({
      project: (state) => state.PROJECT.name,
      BLUETOOTH_STATUS: (state) => state.BLUETOOTH_STATUS,
    }),
  },
  mounted() {
    this.$root.handelSetAlertType = false;
    window.androidvalMethods = this.androidvalMethods;
    window.createImageBitmap = this.createImageBitmap;
    this.arrEn = this.generateBig();
    if (this.BLUETOOTH_STATUS != "false") {
      Toast("蓝牙已断开");
    }
    const localShop = JSON.parse(localStorage.getItem("SkinPlacement"));
    this.roundingVal = JSON.parse(localStorage.getItem("roundingVal"));
    if (localShop) {
      this.shopDes = JSON.parse(localStorage.getItem("SkinPlacement"));
    }
    const setShop = JSON.parse(localStorage.getItem("set_rounding"));
    if (setShop) {
      this.setList = setShop.map((item) => {
        if (item.suotype) {
          if (item.type == 0) {
            let floor = Math.floor(this.value * item.multiple);
            this.value = floor / item.multiple;
          } else if (item.type == 1) {
            let round = Math.round(this.value * item.multiple);
            this.value = round / item.multiple;
          } else if (item.type == 2) {
            let ceil = Math.ceil(this.value * item.multiple);
            this.value = ceil / item.multiple;
          }
          this.suoding = true;
        }
        return item;
      });
    }

    const sure_type = JSON.parse(localStorage.getItem("sure_type"));
    this.setType = sure_type;
  },
  created() {
    this.initData();
    const localShop = localStorage.getItem("sure_handel");
    if (localShop) {
      this.setindex = localShop;
      this.setdirstType = localShop;
    }
  },
  methods: {
        accumulation() {
      // if (this.BLUETOOTH_STATUS != "false") {
      //   Toast("请先连接蓝牙设备");
      //   return;
      // }
      this.$router.push({
        path: "/accumulation",
        query: {
          msg: this.tableData[0],
        },
      });
    },
    getTouchStart(item, index) {
      clearTimeout(this.time);
      this.time = setTimeout(() => {
        this.suoding = false;
        if (!item.checked) {
          return;
        }
        this.setList = this.setList.map((items, indexs) => {
          items.chooseTypes = false;
          if (index == indexs) {
            items.chooseTypes = true;
          }
          if (index == indexs && !items.suotype) {
            items.suotype = true;
            if (item.type == 0) {
              let floor = Math.floor(this.value * item.multiple);
              this.value = floor / item.multiple;
            } else if (item.type == 1) {
              let round = Math.round(this.value * item.multiple);
              this.value = round / item.multiple;
            } else if (item.type == 2) {
              let ceil = Math.ceil(this.value * item.multiple);
              this.value = ceil / item.multiple;
            }
            console.log(this.setList);

            this.roundingVal = item.description;
            localStorage.setItem(
              "roundingVal",
              JSON.stringify(item.description)
            );
            this.suoding = true;
          } else {
            items.suotype = false;
          }
          return items;
        });
                    localStorage.setItem("set_rounding", JSON.stringify(this.setList));
            localStorage.setItem("round", JSON.stringify(item));
        //     localStorage.setItem("sure_handel", this.setindex)
        //     localStorage.setItem("sure_type", this.setType)
      }, 2000);
    },
    getchoose(item, index) {
      if (item.checked && !this.suoding) {
        this.setNumshow = false;
        this.roundingVal = item.description;
        localStorage.removeItem("roundingVal");
        localStorage.removeItem("round");
        this.imgSuoding=true
        this.setList = this.setList.map((items) => {
          items.chooseTypes = false;
          return items;
        });
        localStorage.setItem("set_rounding", JSON.stringify(this.setList));
        item.chooseTypes = true;
        if (item.type == 0) {
          let floor = Math.floor(this.value * item.multiple);
          this.value = floor / item.multiple;
        } else if (item.type == 1) {
          let round = Math.round(this.value * item.multiple);
          this.value = round / item.multiple;
        } else if (item.type == 2) {
          let ceil = Math.ceil(this.value * item.multiple);
          this.value = ceil / item.multiple;
        }
      }
    },
    getTouchEnd(item, index) {
      clearTimeout(this.time);
    },
    choosepeel(item, index, ev) {
      if (
        ev.currentTarget.style.background == "rgb(232, 97, 96)" ||
        ev.currentTarget.style.background == ""
      ) {
        ev.currentTarget.style.background = "#c84645";
        item.count++;
        this.pival += Number(item.value);
      } else {
        ev.currentTarget.style.background = "rgb(232, 97, 96)";
        item.count--;
        this.pival -= Number(item.value);
      }
    },
    handelPeel() {
      if (this.BLUETOOTH_STATUS != "false") {
        Toast("请先连接蓝牙设备");
        return;
      }
      const tare = $presenter.tare();
      if (tare == -1) {
        // this.quzhivalue += Number(this.value)
        // Toast("当前版本没有返回值")
      } else if (tare == 0) {
        // Toast("设备未连接")
      } else if (tare == 1) {
        // this.quzhivalue += Number(this.value)
        // Toast("去皮成功")
      } else if (tare == 2) {
        // Toast("零点错误报警")
      } else if (tare == 3) {
        // Toast("超过去皮范围")
      } else if (tare == 4) {
        // Toast("有数字皮,不可去称重皮")
      } else if (tare == 5) {
        // Toast("重量不稳定")
      } else if (tare == 0xff) {
        // Toast("超时")
      }
    },
    //称重
    androidvalMethods(val, type, weight) {
      if (this.Company != 43 || this.imgSuoding) {
        return;
      }

      // this.setList = this.setList.map((item) => {
      //   if (item.type == 0) {
      //     let floor = Math.floor(this.value * item.multiple);
      //     this.value = floor / item.multiple;
      //   } else if (item.type == 1) {
      //     let round = Math.round(this.value * item.multiple);
      //     this.value = round / item.multiple;
      //   } else if (item.type == 2) {
      //     let ceil = Math.ceil(this.value * item.multiple);
      //     this.value = ceil / item.multiple;
      //   }
      //   return item;
      // });
      // this.value = val;
      this.quzhivalue = weight;
      let round= JSON.parse(localStorage.getItem("round")) ;
      if(round!=null){
        // alert(round.type)
        console.log(round)
      if (round.type == 0) {
          let floor = Math.floor(val* round.multiple);
          this.value = floor / round.multiple;
        } else if (round.type == 1) {
          let rounds = Math.round(val* round.multiple);
          this.value = rounds / round.multiple;
        } else if (round.type == 2) {
          let ceil = Math.ceil(val * round.multiple);
          this.value = ceil / round.multiple;
        }
      }else{
          this.value = val;
      }
      if (type === "true") {
        this.ishorder = false;
      } else {
        this.ishorder = true;
      }
    },
    add() {
      if(this.Company == 43  || this.imgSuoding){
        this.value+=0
      }
    },
    reduce() {
      if(this.Company == 43 || this.imgSuoding){
        this.value+=1;
      }
    },
    createImageBitmap(url) {
      this.params.pictureUrl = url;
      this.params.quantityYes = this.value;
      this.params.itemId = this.tableData[0].id;
      // this.params.outOfStock = this.value
      this.$API.configShop(this.params).then((res) => {
        if (res.result === "success") {
          Toast("收货成功");
          this.initData();
        }
      });
    },
    //确认收货
    configshop() {
      if (!this.ishorder) {
        return;
      }
      $photo.requestCamera();
    },
    orderComfig() {
      if (!this.ishorder) {
        return;
      }
      if (this.value >= this.tableData[0].quantity) {
        Dialog.confirm({
          title: "",
          message: "确定按订货数量收货",
        })
          .then(() => {
            $photo.requestCamera();
          })
          .catch(() => {
            // on cancel
          });
      } else {
        Toast("称重数量小于订货数量，不允许使用按订货收货功能！");
      }
    },
    lookorder() {
      this.show = true;
    },
    //皮值
    SkinValue() {
      if (this.BLUETOOTH_STATUS != "false") {
        Toast("请先连接蓝牙设备");
        return;
      }
      this.isshow = true;
    },
    lackShop() {
      this.params.quantityYes = 0;
      this.params.itemId = this.tableData[0].id;
      this.params.outOfStock = "0";
      this.$API.configShop(this.params).then((res) => {
        if (res.result === "success") {
          Toast("缺货");
          this.initData();
        }
      });
    },
    shoptype(type) {
      this.center_l_class = type;
      this.tableData = [];
      this.activeindex = 0;
      this.$API.goodsDetails({ id: this.$route.query.id }).then((res) => {
        if (this.center_l_class === 0) {
          this.tableData = res.wshOrders;
          this.aa = res.wshOrders;
          this.bb = res.wshOrders;
        } else {
          this.bb = res.yshOrders;
          this.tableData = res.yshOrders;
        }
      });
    },
    reduceVal(item, ev) {
      if (item.count > 0) {
        item.count--;
        if (item.count == 0) {
          ev.currentTarget.parentElement.parentElement.style.background =
            "rgb(232, 97, 96)";
        }
        this.pival -= Number(item.value);
      }
    },
    addVal(item, ev) {
      item.count++;
      if (item.count > 0) {
        ev.currentTarget.parentElement.parentElement.style.background =
          "rgb(200, 70, 69)";
      }
      this.pival += Number(item.value);
    },
    killvalue() {
      const zp = $presenter.peel(this.pival);
      // if (zp == 0){
      //     Toast("设备未连接")
      // }else if (zp == 1){
      //     // this.quzhivalue =  this.value + this.pival
      //     Toast("成功")
      // }else if (zp == 2){
      //     Toast("有称重皮存在,添加数字皮失败")
      // }else if (zp == 3){
      //     Toast("重量不稳定")
      // }else if (zp == 4){
      //     Toast("零点错误")
      // }else if (zp == 5){
      //     Toast("去皮超范围")
      // } else if(zp == 0xff){
      //     Toast("超时")
      // }else if (zp == 0xee){
      //     Toast("旧版本没有成功状态返回")
      // }
    },
    initData() {
      this.$API.goodsDetails({ id: this.$route.query.id }).then((res) => {
        this.tableData = res.wshOrders;
        this.aa = res.wshOrders;
        this.bb = res.wshOrders;
        this.Company = this.tableData[0].itemid.punit.id;
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
    orderSearch(item, index) {
      this.activeindex = index;
      this.tableData = [];
      this.tableData.push(item);
    },
    back() {
      this.$router.go(-1);
    },
    //取整
    RoundingPage() {
      if (this.setList.length > 0) {
        this.setNumshow = true;
      } else {
        this.$router.push({
          path: "/roundingSetting",
        });
      }
    },
  },
};
</script>

<style scoped>
.log /deep/ .van-dialog__header {
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
  background: red;
}
.bbb {
  background: green;
}
.rightEn ul li {
  font-size: 1.4vw;
  line-height: 3.3vh;
}
.rightEn ul li:nth-child(1) {
  margin-top: 2vh;
}
.center {
  /* width: 97vw; */
  height: 92vh;
  margin-top: 2vh;
  overflow: hidden;
  background: #fff;
  /* border-right: 4px solid #ccc; */
}
.center_l {
  width: 20vw;
  float: left;
  height: 92vh;
  border-right: 1vw solid rgb(244, 242, 246);
}
.center_l p {
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
.center_l p span .tip {
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
  right: 1.2vw;
  font-size: 0.8vw;
}
.center_l ul {
  height: 86vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.center_l ul li {
  height: 6vh;
  line-height: 6vh;
  text-indent: 2vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.center_l_ul {
  /* background: rgb(244,244,244); */
  background: #fff;
}
.active {
  background: rgb(244, 244, 244);
}
.center_r {
  width: 72%;
  margin-left: 25%;
  margin-top: 4vh;
  overflow: hidden;
  height: 85vh;
}
.center_r_1 {
  width: 40%;
  height: 50%;
  background: rgb(244, 244, 244);
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center_r_1 img {
  width: 100%;
}
.center_r_2 {
  width: 60%;
  height: 50%;
  float: left;
  background: rgb(254, 233, 233);
  position: relative;
}
.center_r_2 p:nth-child(1) {
  line-height: 6vh;
  top: 0;
  left: 0;
  position: absolute;
  text-indent: 2vw;
}
.center_r_2 p:nth-child(2),
.center_r_2 p:nth-child(3) {
  color: rgb(137, 132, 132);
  font-size: 1vw;
  position: absolute;
  right: 2vw;
}
.center_r_2 p:nth-child(2) {
  top: 2vh;
}
.center_r_2 p:nth-child(3) {
  top: 5vh;
}
.center_r_2 p:nth-child(4) {
  color: rgb(137, 132, 132);
  font-size: 1.4vw;
  position: absolute;
  right: 2vw;
  bottom: 2vh;
  display: flex;
  align-items: center;
}
.center_r_2 p:nth-child(4) img {
  width: 1.6vw;
  margin-left: 1vw;
}
.center_r_2 p:nth-child(5) {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center_r_2 >>> .van-stepper__input {
  font-size: 2.4vw;
  font-weight: bold;
  color: red;
}
.center_r_2 >>> .van-stepper__minus,
.center_r_2 >>> .van-stepper__plus {
  background: rgb(254, 233, 233) !important;
}
.center_r_3 p {
  height: 25%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  color: rgb(137, 132, 132);
}
.center_r_3 p:nth-child(1) {
  background: rgb(253, 92, 72);
  color: #fff;
}
.center_r_3 {
  width: 40%;
  height: 50%;
  float: left;
  background: rgb(254, 233, 233);
}
.center_r_3 span:nth-child(1) {
  display: inline-block;
  margin-left: 2vw;
}
.center_r_3 span:nth-child(2) {
  display: inline-block;
  margin-left: 8vw;
}
.center_r_3 p:nth-child(1) span:nth-child(2) {
  width: 5vw;
  background: #fff;
  height: 3vh;
  text-align: center;
  line-height: 3vh;
  color: #eb002a;
  margin-left: 12vw;
}
.center_r_4 {
  width: 60%;
  height: 50%;
  float: left;
  background: rgb(253, 92, 72);
}
.center_r_4 ul {
  height: 100%;
  border-left: 1px solid #fff;
  border-top: 1px solid #fff;
}
.center_r_4 li {
  float: left;
  width: 33%;
  text-align: center;
  height: 33.3%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
}
.chooseItem {
  background: #c84645 !important;
}
.van-dialog .jianpizhiVal li {
  position: relative;
  width: 10vw;
  height: 4vw;
  text-align: center;
  background: rgb(232 97 96) !important;
  line-height: 4vw;
  border-radius: 5%;
  color: #fff;
  margin: 2vw 3vw;
}

.van-dialog .jianpizhiVal li .jianpizhiVal-first {
  display: flex;
  color: #000;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  bottom: -3.5vw;
  align-items: center;
}
.van-dialog .jianpizhiVal li .jianpizhiVal-first span {
  width: 2vw;
  height: 2vw;
  display: inline-block;
  line-height: 2vw;
  background: rgb(190 190 190) !important;
}
.van-popup--center ul {
  height: 100%;
}
.van-popup--center ul li {
  width: 100%;
  height: 4vw;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  font-size: 1.5vw;
  /* color: #999; */
  /* background: red; */
}
.van-popup--center ul li div:first-child {
  padding-left: 2vw;
  width: 30%;
}
.van-popup--center ul li div:last-child {
  width: 60%;
  display: flex;
  text-align: center;
  /* background: red; */
  /* height: ; */
  flex-direction: row-reverse;
}
.van-popup--center ul li div:last-child p {
  /* background: green; */
  width: 50%;
}
.van-popup--center ul li div:last-child p img {
  width: 20%;
}
.chooseSet {
  color: #ccc;
}
.van-popup--center ul li .selectSet {
  display: none !important;
}
</style>
