
<template>
  <div class="accumulation-wrapper" @click="closeLog">
    <header-wrapper fatherText="累加"></header-wrapper>
    <div class="accumulation-content">
      <div class="accumulation-content-details">
        <p>
          {{ this.details.itemid ? this.details.itemid.cnName : "" }} （{{
            this.details.itemid.punit.name
          }}）
        </p>
        <div class="numtotal">
          <ul>
            <li>
              <span>总计累加</span>
              <span>{{ this.totalvalue }}</span>
            </li>
          </ul>
        </div>
        <div class="photo">
          <ul v-if="imgPurl.length > 0 && imgPurl">
            <li
              v-for="(item, index) in imgPurl"
              :key="index"
              @touchstart.stop="removeHandel(item, index)"
              @touchend.stop="cancelHandel(item, index)"
            >
              <div>
                <p>第{{ index + 1 }}次累加</p>
                <p>{{ item.count }}</p>
              </div>
              <img @click.stop="lookImg(item)" :src="item.name" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div class="accumulation-content-handeldetails">
        <div class="chengzhong">
          <p>
            称重单位： &nbsp;&nbsp;
            500g
          </p>
          <p>
            去皮重量： {{ this.quzhivalue }}
           斤
          </p>
        </div>
        <div class="usehandel">
          <ul>
            <li @click="goback()">
              <img src="./../../assets/img/撤销 (1).png" alt="" /><br />全部撤销
            </li>
            <li @click="configshop">
              <img src="./../../assets/img/添加事项.png" alt="" /><br />完成累加
            </li>
          </ul>
        </div>
        <div class="dianzicheng">
          <p>当前称重值</p>
          <p>{{ this.value }}</p>
          <span :class="ishorder ? 'aaa chengtype' : 'bbb chengtype'"></span>
        </div>
        <div class="operationhandel">
          <ul>
            <li @click="handelPeel">去皮</li>
            <li @click="SkinValue">减皮值</li>
            <li @click="RoundingPage">取整<br />{{ roundingVal }}</li>
            <li @click="accumulation">确认本次累加</li>
          </ul>
        </div>
      </div>
    </div>

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

    <van-dialog v-model="show" title="标题" show-cancel-button>
      <img style="width: 100% !important" :src="pictual" />
    </van-dialog>
    <set-alert v-if="this.$root.handelSetAlertType"></set-alert>
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
                v-show="item.chooseTypes"
                alt=""
              />
            </p>
            <p>
              <img
                src="./../../assets/img/锁.png"
                alt=""
                v-show="item.suotype"
              />
            </p>
          </div>
        </li>
      </ul>
    </van-popup>
  </div>
</template>
<script>
import { Dialog, Popup, Toast } from "vant";
import { mapState, mapGetters, mapMutations, mapActions } from "Vuex";
export default {
  data() {
    return {
      setNumshow: false,
      totalvalue: 0,
      details: {},
      show: false,
      peelIndex: null,
      quzhivalue: 0,
      value: 0,
      isshow: false,
      shopDes: [],
      pival: 0.0,
      suoding: false,
      Company: "",
      imgPurl: [],
      time: "",
      pictual: "",
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
  computed: {
    ...mapState({
      project: (state) => state.PROJECT.name,
      BLUETOOTH_STATUS: (state) => state.BLUETOOTH_STATUS,
    }),
  },
  mounted() {
    this.$root.handelSetAlertType = false;
    this.details = this.$route.query.msg;
    this.Company = this.$route.query.msg.itemid.punit.id;
    // console.log(this.$route.query.msg.itemid)
    window.androidvalMethods = this.androidvalMethods;
    window.createImageBitmap = this.createImageBitmap;
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
  },
  methods: {
    closeLog() {
      if (this.show) {
        this.show = false;
      }
    },
    lookImg(item) {
      this.show = true;
      this.pictual = item.name;
    },
    removeHandel(item, index) {
      clearTimeout(this.time);
      this.time = setTimeout(() => {
        Dialog.confirm({
          title: "标题",
          message: `确认删除第${index + 1}次累加吗`,
        })
          .then(() => {
            this.imgPurl.splice(index, 1);
            this.totalvalue -= item.count;
          })
          .catch(() => {
            // on cancel
          });
      }, 2000);
    },
    cancelHandel() {
      clearTimeout(this.time);
    },
    configshop() {
      Dialog.confirm({
        title: "标题",
        message: "确认累加收货吗",
      })
        .then(() => {
          this.params.pictureUrl = this.imgPurl[0].name;
          this.params.totalvalue = this.value;
          this.params.itemId = this.details.id;
          this.$API.configShop(this.params).then((res) => {
            if (res.result === "success") {
              Toast("收货成功");
              this.$backMethods();
              // this.initData()
            }
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    androidvalMethods(val, type, weight) {
    if (type === "true") {
        this.ishorder = false;
        return
      } else {
        this.ishorder = true;
      }
      this.quzhivalue = weight;

      let round = JSON.parse(localStorage.getItem("round"));

      if (round != null) {

        if (round.type == 0) {
          let floor = Math.floor(val * round.multiple);
          this.value = floor / round.multiple;
        } else if (round.type == 1) {
          let rounds = Math.round(val * round.multiple);
          this.value = rounds / round.multiple;
        } else if (round.type == 2) {
          let ceil = Math.ceil(val * round.multiple);
          this.value = ceil / round.multiple;
        }
      } else {
        this.value = val;
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
    SkinValue() {
      // alert(132)
      //   if (this.BLUETOOTH_STATUS != 'false') {
      //       Toast('请先连接蓝牙设备')
      //       return
      //   }
      this.isshow = true;
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
    goback() {
      this.$backMethods();
    },
    //确认本次累加
    accumulation() {
      $photo.requestCamera();
    },
    createImageBitmap(url) {
      if (url) {
        let obj = {
          name: url,
          count: this.value,
        };
        this.imgPurl.push(obj);
        this.totalvalue +=Number(this.value) ;
      }
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
    getTouchEnd(item, index) {
      clearTimeout(this.time);
    },
        getchoose(item, index) {
      if (item.checked && !this.suoding) {
        this.setNumshow = false;
        this.roundingVal = item.description;
        localStorage.removeItem("roundingVal");
        localStorage.removeItem("round");
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
  },
};
</script>
<style lang="css" scoped>
.accumulation-content {
  width: 100%;
  height: 94vh;
  display: flex;
  overflow: hidden;
}
.accumulation-content .accumulation-content-details {
  width: 70%;
  padding: 2vw;
}
.accumulation-content-handeldetails {
  border: 1px solid #ccc;
  width: 30%;
}
.accumulation-content-handeldetails .chengzhong {
  padding: 2vw;
}
.accumulation-content-handeldetails .chengzhong p:last-child {
  margin-top: 3vw;
}
.accumulation-content .accumulation-content-details p {
  /* padding: 2vw;  */
}
.accumulation-content .accumulation-content-details .numtotal {
  height: 60%;
}
.accumulation-content .accumulation-content-details .numtotal ul {
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: center;
}
.accumulation-content
  .accumulation-content-details
  .numtotal
  ul:first-child
  li
  span:first-child {
  font-size: 1.6vw;
}
.accumulation-content
  .accumulation-content-details
  .numtotal
  ul:first-child
  li
  span:last-child {
  font-size: 6vw;
  color: #c84645;
}
.photo {
  height: 100%;
}
.photo ul {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  overflow: auto;
  flex-wrap: inherit;
}
.photo ul li {
  width: 20vw;
  height: 22vw;
  text-align: center;
  margin-left: 2vw;
  background: #c84645;
}
.photo ul li p {
  text-align: center;
}
.photo ul li img {
  width: 14vw;
  height: 14vw;
}
.photo ul li div {
  padding-top: 2vw;
}
.usehandel {
  border: 1px solid #ccc;
}
.usehandel ul {
  width: 100%;
  display: flex;
  padding-top: 1vw;
}
.usehandel ul li {
  width: 50%;
  text-align: center;
  color: #c84645;
  font-size: 1.6vw;
}
.usehandel ul li img {
  width: 10vw;
  height: 10vw;
}
.dianzicheng {
  height: 15vw;
  position: relative;
}
.dianzicheng p:first-child {
  padding-left: 2vw;
  font-size: 1.6vw;
  padding-top: 2vw;
}
.dianzicheng p:nth-child(2) {
  text-align: center;
  font-size: 4vw;
  padding-top: 1vw;
  /* color: #c84645; */
}
.dianzicheng .chengtype {
  position: absolute;
  display: inline-block;
  width: 2vw;
  height: 2vw;
  border-radius: 50%;
  top: 6.5vw;
  left: 5vw;
}
.aaa {
  background: red;
}
.bbb {
  background: green;
}
.accumulation-content-handeldetails .operationhandel,
ul {
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-wrap: wrap;
}
.accumulation-content-handeldetails .operationhandel ul li {
  width: 49%;
  height: 11.5vw;
  line-height: 11.5vw;
  border: 0.5px solid #fff;
  text-align: center;
  color: #fff;
  /* line-he0ight: 20%;; */
  background: #c84645;
  font-size: 1.6vw;
  /* text-align: center; */
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