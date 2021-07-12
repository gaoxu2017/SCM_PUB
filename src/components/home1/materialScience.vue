<template>
    <div class="materialScience-wrapper">
        <div class="top">
        <van-icon name="arrow-left" size="3vh" />菜品生产记录<img
            src="../../assets/img/蓝牙.png"
            alt=""
        /><img src="../../assets/img/设置.png" alt="" />
        </div>
        <div class="materialScience-content">
           <ul>
               <li v-for = "item in 10">
                  <div class="materialScience-detail">
                    <div>
                        <span style="padding-left:1.5vw">白萝卜</span> <span class="shop" style="padding:0 1vw;">(散)</span><span class="shop">(500g)</span>
                    </div>
                    <div>
                        <p><span class="shop">单价:</span>￥0.9</p>
                        <p><span class="shop">入库:</span>48</p>
                        <p><span class="shop">浪费:</span>7.85</p>
                        <p><span class="shop">总金额:</span>￥6899</p>
                    </div>
                  </div>

                  <div class="materialScience-type">
                      <img style="width:150px;height:100px" src="" alt="">
                       <div class="title">
                          <p>浪费原因:残渣浪费</p>
                          <p>浪费原因:正常损耗</p>
                       </div>
                  </div>
               </li>
           </ul>
        </div>
        <div class="bottom2">
        <span>
            <img src="../../assets/img/48a28422651b5fdef21ad246656baed.png" alt="">
            <span>已记录</span>
            <span>共12条记录</span>
            <span>16</span>
        </span
        >
        <span
          :class="bottom2_class == '1' ? 'bottom2_class' : ''"
          @click="bottom2_class = 1"
          >确认完成并审核</span
        >
      </div>
    </div>
</template>
<script>
export default {
    data () {
       return {
            bottom_1_class: "0",
            bottom2_class:'1'
       }
    }
}
</script>
<style scoped>
.shop{
    font-size: 22px;
    color:#666;
}
.materialScience-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
}
.materialScience-content {
    width: 100%;
    height: 83vh;
    background: #fff;
    margin-top: 3vh;
    font-size: 24px;
    overflow: auto;
}
.materialScience-content ul li .materialScience-detail {
   width: 55%; 
   padding-bottom: 3vw;
}
.materialScience-content ul li .materialScience-type{
    flex:1;
    display: flex;
    padding-left: 6vw;
}
.materialScience-content ul li .materialScience-type .title {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 2vw;
}
.materialScience-content ul li{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #999;
    margin: 0 3vw;
}
 .materialScience-detail div:last-child{
    display: flex;
    justify-content: space-around;
}
 .materialScience-detail>div span:first-child{
    /* padding-left:5vw; */
}
.materialScience-detail>div {
    padding:22px 0;
}
.bottom2 {
  height: 8vh;
  border-top: 1px solid #ccc;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.bottom2>span:nth-child(2) {
  display: block;
  text-align: center;
  color: rgb(226, 50, 49);
  line-height: 8vh;
  width: 50%;
  float: left;
  font-size: 1.5vw;
}
.bottom2_class {
  background: rgb(226, 50, 49);
  color: #fff !important;
}
.bottom2>span:nth-child(1){
    display: block;
    width: 50%;
    float: left;
    display: flex;
    height: 8vh;
    align-items:center;
    position: relative;
    background:#fff;
}
.bottom2>span:nth-child(1) img{
    width: 4vw;
    margin-left: 2vw;
}
.bottom2>span:nth-child(1) span:nth-child(2){
    color: rgb(226, 50, 49);
    padding: 0 1vw;
    margin-top: 1vh;
    border-right: 1px solid #ccc;
}
.bottom2>span:nth-child(1) span:nth-child(3){
    color: #ccc;
    padding: 0 1vw;
    margin-top: 1vh;
}
.bottom2>span:nth-child(1) span:nth-child(4){
    position: absolute;
    left: 5vw;
    top: 1vh;
    width: 1.5vw;
    height: 1.5vw;
    border-radius: 50%;
    text-align: center;
    line-height: 1.5vw;
    color: rgb(226, 50, 49);
    background: #fff;
    border: 1px solid #ccc;
}
</style>
