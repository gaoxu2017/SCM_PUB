
<template>
    <div class="weighDetail-wrapper">
        <div class="top">
            <van-icon name="arrow-left" size="3vh" />称重
            <img src="../../assets/img/蓝牙.png"/>
            <img src="../../assets/img/设置.png" alt="" />
        </div>
        <div class="weighDetail-content">
            <div>
                <span>去皮重量: 斤</span>
                <span style="padding-left:2vw;">称重单位: 斤</span>
            </div>
            <div class="weighDetail-content-num">
                2.3685
            </div>
        </div>
        <div class="btn-Handel">
            <van-button  color="linear-gradient(to right, #ee0a24, #ff6034)" size="normal">
                去皮
            </van-button>
            <van-button color="linear-gradient(to right, #ee0a24, #ff6034)" size="normal">
                累加
            </van-button>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {

        }
    }
}
</script>
<style scoped>
   .weighDetail-wrapper{
       width: 100%;
       height: 100%;
   }
   .weighDetail-content {
       height: 94vh;
       display: flex;
       align-items: center;
       justify-content: center;
       position: relative;
   }
   .weighDetail-content div:first-child{
       position: absolute;
       top: 10vw;
       right: 6vw;
       font-size: 2vw;
       color: rgb(100, 100, 100);
   }
   .weighDetail-content-num {
       color: #eb002a;
       font-size: 80px;
       font-weight: bold;
   }
   .btn-Handel{
       width: 100%;
       height: 10vh;
       position: absolute;
       bottom: 15vw;
       text-align: center;
       display: flex;
       justify-content: space-around;
       
   }
   .btn-Handel button {
       width: 25%;
       height: 10vh;
       font-size: 4vw;
   }
</style>