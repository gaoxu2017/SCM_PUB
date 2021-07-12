<template>
  <div> 
      <header-wrapper :fatherText="fatherText"></header-wrapper>
      <!-- <div class="top"><van-icon @click="back" name="arrow-left" size="3vh"/>选择项目 <img src="../../assets/img/蓝牙.png" alt=""><img src="../../assets/img/设置.png" alt=""></div> -->
      <div class="rightEn">
        <ul>
          <li @click="charCodeAt('')">全部</li>
          <li v-for="(value,index) in arrEn" :key="index" @click="charCodeAt(value)">{{value}}</li>
        </ul>
      </div>
      
      <div class="left">
        <!-- <transition-group name="slide"> -->
         <!-- <div> -->
           <p v-for="(item,index) in arr" :key="index" @click="projectHandel(item,index)" :class="[index == isActive ? 'pitch_p' : ''] ">  {{item.name}} </p>
         <!-- </div> -->
       <!-- </transition-group> -->
      </div>
      <set-alert v-if="this.$root.handelSetAlertType"></set-alert>
  </div>
</template>

<script>
import { searchProject } from "@/request/api";
import { mapGetters } from 'Vuex'
export default {
  data(){
    return{
      fatherText:'选择项目',
      show:false,
      arrEn:[],
      isActive:0,
      params:{
         firstChar:""
      },
      arr:[

      ]
    }
  },
  mounted(){
    this.arrEn = this.generateBig()
  },
  created () {
     this.initList()
  },
  methods:{
    fatherMethods () {
       this.show = !this.show
    },
    // back () {
    //   this.$router.go(-1)
    // },
    initList () {
      this.allData()
    },
    charCodeAt (item) {
      this.params.firstChar = item
       this.allData(this.params)
    },
    allData (item) {
       searchProject(item).then((res)=>{
          this.arr = res.componentList
       })
    },
    generateBig(){
      let ch_big = 'A';
      let str_big = [];
      for(var i=0;i<26;i++){
          str_big.push(String.fromCharCode(ch_big.charCodeAt(0)+i));
      }
      return str_big;
    },
    projectHandel (item,index) {
      this.isActive = index
      let path;
      if (this.$route.query.id) {
          path = '/warehouse'
      }else{
          path = '/godown'
      }
      const time = setTimeout(() => {
        this.$router.push({
          path:path,
          query:{
            id:item.id
          }
        })
      }, 500);
      this.$store.dispatch('asyncaddProject',item)
    }
  }
}
</script>

<style scoped>
/* 
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
} */

.rightEn ul{
  position: fixed;
  right: 0;
  top: 6vh;
  width: 5vw;
  text-align: center;
  color: #eb002a;
  background: #fff;
  height: 94vh;
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

.left{
  width: 95vw;
  height: 94vh;
  display:flex;
  overflow: auto;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.left p{
  /* width: 60%; */
  margin-left:6vw;
  line-height: 5vh;
  padding:0.2vw 4vw;
  font-size: 1.4vw;
  text-align: center;
}
.left .pitch_p{
  background: #fff;
  border-radius: 0.5vw;
  box-shadow: 0px 2px 2px #ccc;
}

</style>