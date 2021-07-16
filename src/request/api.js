/*
 * @Author: your name
 * @Date: 2021-06-24 10:42:19
 * @LastEditTime: 2021-07-15 11:21:11
 * @LastEditors: g05047
 * @Description: In User Settings Edit
 * @FilePath: \SCM_PUB\src\request\api.js
 */

import {
  get,
  post
} from './http'
// 示例：
/*
登录
*/
export const login = params => get('/app/common/welcome', params)
/*
选择项目
*/
export const searchProject = params => post('app/api/instore/componentList', params)
/*
入库采购
*/
export const StockInPurchase = params => post('app/api/instore/supplierOrders', params)
/*
货品详情
*/
export const goodsDetails = params => post('app/api/instore/ordersItems', params)

/*
确认收货
*/
export const configShop = params => post('app/api/instore/confirmCount', params)

/*
货品收货
*/
export const supplierItems = params => post('/app/api/instore/supplierItems', params)

/*
入库验收
*/
export const warehousingAcceptance = params => post('app/api/checkOrders/checkOrdersList', params)

/*
订单收货
*/
export const goodsReceivingDetails = params => post('/app/api/instore/itemOrders', params)

/*
货品确认收货
*/
export const goodsOrdderDetails = params => post('app/api/instore/confirmCount2', params)


/*
审核
*/
export const examineIndex = params => post('/app/api/checkOrders/createInstore', params)

/*
取整设置
*/
export const settingRounding  = params => post('/app/api/round/getRoundList', params)

