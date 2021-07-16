import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/register'

Vue.use(Router)

const router = new Router({
  routes: [
    //  登录页
    {
      path: '/',
      name: 'register',
      component: register
    },
    //  登录页（接口地址配置）
    {
      path: '/firewalld',
      name: 'Firewalld',
      component: () => import('@/components/firewalld')
    },
    //  首页
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/components/home')
    },

    // （采购入库）选择项目
    {
      path: '/option',
      name: 'Option',
      component: () => import('@/components/home1/option')
    },
    // （采购入库）绑定设备
    {
      path: '/equipment',
      name: 'Equipment',
      component: () => import('@/components/home1/equipment')
    },
    // （采购入库）采购入库
    {
      path: '/godown',
      name: 'Godown',
      component: () => import('@/components/home1/godown')
    },
    // （采购入库）订单详情
    {
      path: '/lineItem',
      name: 'lineItem',
      component: () => import('@/components/home1/lineItem')
    },
    // （采购入库）订单收货
    {
      path: '/staffCanteen',
      name: 'staffCanteen',
      component: () => import('@/components/home1/staffCanteen')
    },
    // （采购入库）货品收货
    {
      path: '/Receiving',
      name: 'receiving',
      component: () => import('@/components/home1/receiving')
    },
    // （采购入库）货品搜索
    {
      path: '/SearchForGoods',
      name: 'SearchForGoods',
      component: () => import('@/components/home1/SearchForGoods')
    },
    // （采购入库）货品收货 
    {
      path: '/GoodsReceiving',
      name: 'GoodsReceiving',
      component: () => import('@/components/home1/GoodsReceiving')
    },
    // （采购入库）入库验收 
    {
      path: '/warehouse',
      name: 'warehouse',
      component: () => import('@/components/home1/warehouse')
    },
    // （采购入库）入库验收 - 审核 
    {
      path: '/audit',
      name: 'audit',
      component: () => import('@/components/home1/audit')
    },
    // （采购入库）菜品生产 - 列表 
    {
      path: '/FoodProduction',
      name: 'FoodProduction',
      component: () => import('@/components/home1/FoodProduction')
    },
    // （采购入库）菜品生产 - 添加 
    {
      path: '/addition',
      name: 'addition',
      component: () => import('@/components/home1/addition')
    },
    // （采购入库）添加 - 称重
    {
      path: '/weigh',
      name: 'weigh',
      component: () => import('@/components/home1/weigh')
    },
    // （采购入库）菜品生产 - 详情
    {
      path: '/particulars',
      name: 'particulars',
      component: () => import('@/components/home1/particulars')
    },
    // （采购入库）菜品生产 - 已记录
    {
      path: '/recorded',
      name: 'recorded',
      component: () => import('@/components/home1/recorded')
    },
    // （采购入库）原料浪费记录
    {
      path: '/RawMaterialWaste',
      name: 'RawMaterialWaste',
      component: () => import('@/components/home1/RawMaterialWaste')
    },
    // （采购入库）原料浪费记录 - 添加 
    {
      path: '/RawAddition',
      name: 'RawAddition',
      component: () => import('@/components/home1/RawAddition')
    },
    // （采购入库）原料浪费记录 - 添加 - 记录
    {
      path: '/RawAdditions',
      name: 'RawAdditions',
      component: () => import('@/components/home1/RawAdditions')
    },
    // 原材料浪费-详情
    {
      path: '/RawAdditionDetails',
      name: 'RawAdditionDetails',
      component: () => import('@/components/home1/RawAdditionDetails')
    },
    // 原材料浪费-已记录
    {
      path: '/materialScience',
      name: 'materialScience',
      component: () => import('@/components/home1/materialScience')
    },
    //称重     
    {
      path: '/weighDetail',
      name: 'weighDetail',
      component: () => import('@/components/home1/weighDetail')
    },
    //  取整设置   
    {
      path: '/roundingSetting',
      name: 'roundingSetting',
      component: () => import('@/components/home1/roundingSetting')
    },
      //  置皮   
      {
        path: '/skinPlacement',
        name: 'skinPlacement',
        component: () => import('@/components/home1/skinPlacement')
      },
      //  链接设备
      {
        path: '/bindingDevice',
        name: 'bindingDevice',
        component: () => import('@/components/home1/bindingDevice')
      },
  ]
})
//默认所有设置弹框状态
// router.afterEach((to,form) => {
  // console.log(this)
  // alert(123)
  // this.$root.handelSetAlertType = false
// })
export default router