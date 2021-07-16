<!--
 * @Author: gaoxu
 * @Date: 2021-07-01 14:55:31
 * @LastEditors: g05047
 * @LastEditTime: 2021-07-14 15:30:35
 * @Description: file content
-->

<template>
    <div class="setConfig-wrapper">
       <ul>
         <li><van-icon name="manager" /><span>杨安互</span></li>
         <li><van-icon name="manager" /><span>网络选择</span></li>
         <li class="settext"><van-icon name="manager" /><span>清零</span></li>
         <li class="settext"><van-icon name="manager" /><span>校准</span></li>
         <li class="settext"><van-icon name="cluster-o" /><span>秤重</span></li>
         <li @click="manager" class="settext"><van-icon name="manager" /><span>绑定</span></li>
         <li class="settext" @click="setpiPage"><van-icon name="manager" /><span>置皮</span></li>
         <li @click="setNum" class="settext"><van-icon name="manager" /><span>取整</span></li>
         <li @click="handelIndex" class="settext"><van-icon name="manager" /><span>首页</span></li>
       </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        manager () {
            this.$router.push({
                path:"/bindingDevice"
            })
        },
        setNum () {
          this.$router.push({
            path:'/roundingSetting'
          })
        },
        handelIndex () {
          this.$router.push({
            path:'/home'
          })
        },
        setpiPage () {
           this.$router.push({
             path:'/skinPlacement'
           })
        },
    }
}
</script>
<style scoped>
  .setConfig-wrapper {
    width: 25vw;
    height: 90%;
    background: #cd5f5f;
    position: absolute;
    top: 6vh;
    right: 0;
}
.setConfig-wrapper ul{
  height: 100%;
}
.setConfig-wrapper ul li{
  width: 100%;
  height: 10%;
  font-size: 1.6vw;
  display: flex;
  border-bottom: 1px solid #fff;
  align-items: center;
  color: #fff;
  justify-content: center;
}
.setConfig-wrapper ul li span{
  padding: 0 2vw;
  display: inline-block;
  width: 9vw;
}
.setConfig-wrapper ul .settext span {
  letter-spacing: 2.9vw;
}
.setConfig-wrapper ul li .van-icon {
  padding-left: 15%;
}
</style>