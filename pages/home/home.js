// pages/home/home.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      banners: [
         { src: "http://img4.imgtn.bdimg.com/it/u=2350302849,3323337377&fm=26&gp=0.jpg" },
         { src: "http://127.0.0.1:13598/__pageframe__/icon/t2.png" },
         { src: "http://127.0.0.1:13598/__pageframe__/icon/t2.png" },
      ],
      hiddenName: true
   },
   method:{
   click: function (e) {
      this.setData({
         hiddenName: !this.data.hiddenName
      })
   }
   },
   
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      const that = this;
      wx.request({
         url: 'http://lskaogu.bjlitian.com:8123/api/bannerInfo', 
         data: {
            x: '',
            y: ''
         }, 
         header: {
            'content-type': 'application/json', // 默认值
            'token': 'yyx'
         },
         success(res) {
           console.log(res.data.banner_id);
         }
      })
   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function () {

   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow: function () {

   },

   /**
    * 生命周期函数--监听页面隐藏
    */
   onHide: function () {

   },

   /**
    * 生命周期函数--监听页面卸载
    */
   onUnload: function () {

   },

   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh: function () {

   },

   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom: function () {

   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage: function () {

   }
})