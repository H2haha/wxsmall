//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    imgUrl:"",
    add:"",
    lists:''
  },
 onLoad: function(){
   var icon =app.globalData.joinCar
   if(icon.length ==0){
      this.setData({
       imgUrl:"../../img/icon1.png",
       add:"去添加点什么吧"
      });
   }else if(icon.length!=0){
     this.setData({
       imgUrl: "",
       add: "去添加点什么吧",
       lists:icon
     });
   }







 }










})
