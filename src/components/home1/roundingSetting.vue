
<template>
    <div class="materialScience-wrapper">
        <header-wrapper :fatherText="fatherText"></header-wrapper>
        <div class="materialScience-content">
         <van-cell-group v-for="(item ,index) in setinterArr" :key="index">
            <van-switch-cell @change="handelSet(item,index)" v-model="item.integerType" active-color="#5ef509" :title="item.title" />
         </van-cell-group>
        </div>
        <set-alert v-if="this.$root.handelSetAlertType"></set-alert>
    </div>
</template>
<script>
import { Toast } from 'vant'
export default {
    data () {
        return {  
            fatherText:"取整设置",
            setinterArr: [
                {
                  integerType:true,
                  title:'向下取整'
                },
                {
                  integerType:false,
                  title:'向下取十分位'
                },
                {
                 integerType:false,
                 title:'整数(四舍五入)'
                },
            ]
        }
    },
    methods : {
        handelSet (item,index) {
            this.setinterArr = this.setinterArr.map((items,indexs) => {
                if (index !== indexs) {
                    items.integerType = false
                }
                    return items
            })
        },
        goback () {
            let count = 0;
            this.setinterArr.forEach((item) => {
                if (!item.integerType) {
                    count+=1
                }
            })
            if (count === 3) {
                Toast('请选择取整方式')
                return 
            } 
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
  .materialScience-content{
      margin-top: 3vw;
  }
</style>