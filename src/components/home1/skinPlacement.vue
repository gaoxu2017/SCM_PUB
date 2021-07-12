<template>
    <div class="skinPlacement-wrapper">
       <div class="top">
          <van-icon name="arrow-left" size="3vh" />置皮
          <img src="../../assets/img/蓝牙.png" alt="" />
          <img src="../../assets/img/设置.png" alt="" />
       </div>

       <div class="skinPlacement-content">
          <div class="Company">
              单位:500g
          </div>

          <div class="shop">
            <ul>
                <li v-for="index in 6">
                    <div>
                        土豆
                    </div>
                    <div>
                        1.2
                    </div>
                </li>
            </ul>
          </div>
       </div>

       <footer class="hand" @click="addHandel"><img src="../../assets/img/d755e7f90876c7b146450a2ffb6b87a.png" alt=""></footer>

       <van-dialog v-model="show" title="自定义皮值" confirmButtonColor="red" show-cancel-button width="50%" style="font-size:28px;">
          <div style="display:flex;justify-content: center;flex-direction: column;align-items: center;font-size:26px;margin:2vw 0;color:#ccc;">
            <p style="display:flex;"><span style="padding-right:2vw;">描述:</span><input type="text"></p>
            <p style="display:flex;margin-top:2vw;"><span style="padding-right:2vw;">皮值:</span><input type="text"></p>
          </div>
        </van-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
          show:false
        }
    },
    methods : {
        addHandel () {
            this.show = true
        }
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
    text-align: right;
    font-size: 24px;
    margin-right: 10vw;
    color: #949494;
   }
   .skinPlacement-content .shop{
       width: 100%;

   }
   .skinPlacement-content .shop>ul {
       margin:0 4%;
   }
   .skinPlacement-content .shop>ul li{
       display: flex;
       justify-content: space-between;
       border-bottom: 1px solid #949494;
       font-size: 28px;
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
        bottom: 20vw;
        right: 10vw;
    }
    .hand {
        cursor: pointer;
    }
</style>