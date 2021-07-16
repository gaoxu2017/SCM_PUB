<!--
 * @Author: gaoxu
 * @Date: 2021-06-21 17:59:40
 * @LastEditors: g05047
 * @LastEditTime: 2021-07-16 12:17:37
 * @Description: file content
-->

<template>
    <div class="materialScience-wrapper">
        <header-wrapper :fatherText="fatherText"></header-wrapper>
        <div class="materialScience-content">
         <van-cell-group v-for="(item ,index) in setinterArr" :key="index">
            <van-switch-cell v-model="item.checked" active-color="#5ef509" :title="item.description" />
         </van-cell-group>
        </div>
        <set-alert v-if="this.$root.handelSetAlertType"></set-alert>
    </div>
</template>
<script>
import { Toast } from 'vant'
export default {
    beforeRouteLeave(to, form, next) {
    next()
    localStorage.setItem("set_rounding", JSON.stringify(this.setinterArr))
  },
    data () {
        return {  
            fatherText:"取整设置",
            setinterArr: [
                // {
                //   integerType:true,
                //   title:'向下取整'
                // },
                // {
                //   integerType:false,
                //   title:'向下取十分位'
                // },
                // {
                //  integerType:false,
                //  title:'整数(四舍五入)'
                // }
            ]
        }
    },
    methods : {
        // handelSet (item,index) {
            // this.setinterArr = this.setinterArr.map((items,indexs) => {
            //     if (index !== indexs) {
            //         items.integerType = false
            //     }
            //         return items
            // })
            // if (item.integerType) {
                // console.log(this.setinterArr)
                // localStorage.setItem("set_rounding", JSON.stringify(this.setinterArr))
                // this.$store.dispatch('set_rounding',JSON.stringify(this.setinterArr))
            // }else{
            //     this.$store.dispatch('set_rounding','')
            // }
        // },
        goback () {
            // let count = 0;
            // this.setinterArr.forEach((item) => {
            //     if (!item.checked) {
            //         count+=1
            //     }
            // })
            // conosle.log(count)
            // if (count == 0) {
            //     Toast('请选择取整方式')
            //     return 
            // } 
            this.$router.go(-1)
        },
        initData (){
            this.$API.settingRounding().then((res)=>{
                const { result } = res.result
                this.setinterArr = res.roundList
                const localShop = JSON.parse(localStorage.getItem('set_rounding'))
                this.setinterArr = res.roundList.map((item) => {
                    item.choosetypes = false
                    item.suotype = false
                    return item
                })
                if (localShop.length == this.setinterArr.length && this.setinterArr.length > 0) {
                    this.setinterArr = localShop
                }
            })
        }
    },
    mounted () {
        this.$root.handelSetAlertType = false
        this.initData()
        // this.$store.dispatch('set_rounding',this.setinterArr[0].title)
    }
}
</script>
<style scoped>
  .materialScience-content{
      margin-top: 3vw;
  }
</style>