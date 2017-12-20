//index.js
//获取应用实例
var app = getApp();
var a=null;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    title:''
  },
  onLoad:function(e){
     console.log(e);
      a=e;
     this.setData({
       title:e.title
     })},
   join:function(){
    var icon =0;
    for(let i=0;i<app.globalData.joinCar.length;i++){
         if(app.globalData.joinCar.length==0){
              app.globalData.joinCar.push(a);
         }else if(app.globalData.joinCar[0].title == a.title){
          console.log("拒绝重复添加")
          this.joinF();
         }
         if (app.globalData.joinCar[i].title == a.title) { 
              icon+=1;
              console.log("拒绝重复添加");
             this.joinF();
         }
    }
    if (icon == 0) {
      app.globalData.joinCar.push(a);
      console.log("添加课程成功")
      this.joinT();
    }
  },
  
    joinT:function(){
    wx.showModal({
          title:'恭喜',
          content:'成功添加课程至购物车'
    })
    }










})
