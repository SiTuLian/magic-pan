// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    background: ['swiper-item1', 'swiper-item2','swiper-item3'],
    circular: true,
    interval: 3000,
    duration: 500,


    //功能区数据
    features: [
      {
        iconPath: "/assets/features/jiqi.png",
        featuresName: "随机起名"
      },
      {
        iconPath: "/assets/features/time.png",
        featuresName: "故事时间线"
      },
      {
        iconPath: "/assets/features/guanxi.png",
        featuresName: "人物关系图"
      },
      {
        iconPath: "/assets/features/xiangce.png",
        featuresName: "图册"
      },
      {
        iconPath: "/assets/features/dagang.png",
        featuresName: "小说大纲"
      },
      {
        iconPath: "/assets/features/bianji.png",
        featuresName: "资料编辑"
      }
    ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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