//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:[
      {imgUrl:'../../img/icon2.png',check:'全部订单'},
      { imgUrl: '../../img/icon1.png',check:'代付款' },
      { imgUrl: '../../img/icon4.png', check: '待收货' },
      { imgUrl: '../../img/icon3.png', check: '售后订单' }
    ],
    list2: [
      { imgUrl: '../../img/icon2.png', check: '开心豆' },
      { imgUrl: '../../img/icon1.png', check: '购物车' },
      { imgUrl: '../../img/icon4.png', check: '账户余额' },
      { imgUrl: '../../img/icon3.png', check: '优惠券' }
    ]
  }
  
})
