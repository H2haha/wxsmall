//index.js

Page({
  
  data: {
    poster:"http://image.so.com/v?src=360pic_strong&z=1&i=0&cmg=d90387beaf00b2371944862ec3f2adea&q=%E5%9B%BE%E7%89%87&correct=%E5%9B%BE%E7%89%87&cmsid=9ebd27cbd1bf20d171d954451a68dd78&cmran=0&cmras=6&cn=0&gn=0&kn=50#src=360pic_strong&z=1&i=0&q=%E5%9B%BE%E7%89%87&correct=%E5%9B%BE%E7%89%87&cn=0&gn=0&kn=50&lightboxindex=34&id=cde3c17cc99fe085018d84a28aa4ccef&multiple=0&itemindex=0&dataindex=144&prevsn=0&currsn=110&jdx=144&fsn=110&gsrc=1",
    name:"此时此刻",
    author:"许巍",
    src:"http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46",
   imgUrl:[
          "../../../img/1.jpg",
          "../../../img/2.jpg",
          "../../../img/3.jpg"
          ], 
      able:true,
      hobby:[
       "打篮球",
       "看书",
       "玩电脑",
       "工作"
      ],
      sex:["男","女"],
      city:[
        "北京","上海","广州","烟台"
      ],
      index:[0,1,2,3]

  },
  //事件处理函数
  upper:function(){
    console.log("change")
  },
  changeable:function(){
      this.setData({
      able:false
      })
  },
  changecity:function(e){
     console.log("改变城市",e.detail.value)
     this.setData({
        index:e.detail.value
     })
  },
   sumFn:function(e){

       console.log("提交成功",e.detail.value)

   },
   onReady: function () {
     this.audioCtx = wx.createAudioContext('myAudio')
     this.audioCtx.play();
     var context =wx.createContext('myCanvas')
     context.setStrokeStyle('blue')
     context.rect(0,0,200,200)
     context.stroke();
      wx.drawCanvas({
             canvasId:'myCanvas',
             actions: context.getActions()
      });

   },
   audioPlay: function () {
     this.audioCtx.play()
   },
   audioPause:function(){
        this.audioCtx.pause()
       
   }

})
