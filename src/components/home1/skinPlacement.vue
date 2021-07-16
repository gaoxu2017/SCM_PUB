<template>
    <div class="skinPlacement-wrapper">
        <header-wrapper fatherText="置皮"></header-wrapper> 
       <!-- <div class="top">
          <van-icon name="arrow-left" size="3vh" />置皮
          <img src="../../assets/img/蓝牙.png" alt="" />
          <img src="../../assets/img/设置.png" alt="" />
       </div> -->

       <div class="skinPlacement-content">
          <div class="Company">
              <span>最多可设置10个皮质(KG)</span>
              <span>单位:500g</span>
          </div>

          <div class="shop">
            <ul>
                <li v-for="(item,index) in shopArr" :key="index">
                    <div>
                        {{item.name}}
                    </div>
                    <div>
                        {{item.value}}
                    </div>
                    <span class="removeItem" @click="handelRemove(item,index)">删除</span>
                </li>
            </ul>
          </div>
       </div>

       <footer class="hand" @click="addHandel"><img src="../../assets/img/d755e7f90876c7b146450a2ffb6b87a.png" alt=""></footer>

       <van-dialog @confirm="killvalue" v-model="show" title="自定义皮值" confirmButtonColor="red" show-cancel-button width="35%" style="font-size:1.6vw;">
          <div style="display:flex;justify-content: center;flex-direction: column;align-items: center;margin:1vw;color:#ccc;">
            <p style="display:flex;"><span style="padding-right:2vw;">描述:</span><input style="border:0.5px solid rgb(192 192 192)" type="text" v-model="shopDes.name"></p>
            <p style="display:flex;margin-top:2vw;"><span style="padding-right:2vw;">皮值:</span><input style="border:0.5px solid rgb(192 192 192)" type="text" v-model="shopDes.value"></p>
          </div>
        </van-dialog>
    </div>
</template>

<script>
import { Toast } from 'vant'
import {mapState ,mapGetters ,mapMutations , mapActions} from 'Vuex'
export default {
    data () {
        return {
          shopDes:{
             name:'',
             value:'',
             count:0
          },
          show:false,
          shopArr:[]
        }
    },
    created () {
       const localShop = JSON.parse(localStorage.getItem('SkinPlacement'))
       if (localShop) {
           this.shopArr = JSON.parse(localStorage.getItem('SkinPlacement'))
       }
    },
    methods : {
        handelRemove (item,index) {
        this.shopArr.splice(index,1)
        localStorage.setItem('SkinPlacement', JSON.stringify(this.shopArr));
        },
        addHandel () {
            this.show = true
        },
        killvalue () {
           if(this.shopArr.length >= 10) {
              Toast('最多可设置10个皮质')
              return 
           }
           this.shopArr.push(this.shopDes)
           this.shopDes = {}
           localStorage.setItem('SkinPlacement', JSON.stringify(this.shopArr));
        },
    }
}
</script>

<style scoped>
.skinPlacement-wrapper {
    width: 100%;
    height: 100vh;
}
   .skinPlacement-content {
       width: 100%;
       height: 91vh;
       margin-top: 3vh;
       position: relative;
   }
   .Company {
    font-size: 1.5vw;
    margin: 0 6vw;
    color: #949494;
    display: flex;
    justify-content: space-between;
   }
   .skinPlacement-content .shop{
       width: 100%;
       height: 55vw;
       overflow: auto;
   }
   .skinPlacement-content .shop>ul {
       margin:2% 4%;
   }
   .skinPlacement-content .shop>ul li{
       display: flex;
       justify-content: space-between;
       border-bottom: 1px solid #949494;
       font-size: 1.2vw;
       align-items: center;
       /* width: 80%; */
   }
   .skinPlacement-content .shop>ul li div{
       padding:2vw 0;
       /* width: 50%; */
   }
   .skinPlacement-content .shop>ul li div:first-child  {
       width: 70%;
       padding-left: 2vw;
   }
    .skinPlacement-content .shop>ul li div:last-child {
        width: 30%;
        text-align: center;
        color: red;
    }
    footer {
        position: absolute;
        bottom: 2vw;
        right: 0vw;
    }
    .hand img{
        width: 40%;
        cursor: pointer;
    }
    .removeItem {
        display: inline-block;
        width: 6vw;
        background: #c84645;
        color: #fff;
        line-height: 3vw;
        height: 3vw;
        text-align: center;
        border-radius: 10%;
    }
</style>