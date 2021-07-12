/*
 * @Author: gaoxu
 * @Date: 2021-07-08 16:48:20
 * @LastEditors: g05047
 * @LastEditTime: 2021-07-09 10:36:22
 * @Description: 公用的JS文件 
 */
exports.install = function (Vue, options) {
    //全局当行返回
    Vue.prototype.$backMethods = function (){
       this.$router.go(-1)
    }
    //挂载全局变量
    Vue.prototype.$setHandelType = {type:false}
    //全局点设置弹窗
    Vue.prototype.setHandel = function() {
    //    this.setHandelType = !this.setHandelType
       
    }
};