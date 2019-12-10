// pages/randomname/children/set/set.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openSameNameShield: true,
    printNum: 1
  },

  //事件函数
  /**
   * 同名屏蔽开关，将改变的值储存到本地
   */
  changeSwitch(){
    this.setData({
      openSameNameShield: !this.data.openSameNameShield
    })
    wx.setStorageSync('bool', this.data.openSameNameShield);
    
  },

  /**
   * 获取input的值
   */
  getInputValue(event){
    const printNum = event.detail.value-0;
    
    if (printNum > 20 || printNum <= 0){
      wx.showToast({
        title: '输出名字请控制在1~20之间',
        icon: 'none'
      })
    }else{
      wx.setStorageSync('printNum', printNum);
    }
   
    
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const bool = wx.getStorageSync('bool');
    const printNum = wx.getStorageSync('printNum');
    
    this.setData({
      bool: this.data.bool = bool,
      printNum: this.data.printNum = printNum
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