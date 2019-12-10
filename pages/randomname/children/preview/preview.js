// pages/randomname/children/preview/preview.js
import sexName from '../../../../assets/json/sexname.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    sex: sexName.sex,
    name: sexName.name,
    sexNameArr: [],
    isRemoveBtnDisable: true,
    waitClearSexName: []
  },

  //函数复用
  checkIsRemoveBtnDisable(){

    this.data.waitClearSexName.length == 0 ? this.setData({
      isRemoveBtnDisable: this.data.isRemoveBtnDisable = true
    }) : this.setData({
      isRemoveBtnDisable: this.data.isRemoveBtnDisable = false
    })

    
  },

  

  //事件函数
  moveScrollBox(event){

    const scrollNum = event.currentTarget.dataset.scrollNum-0;
    this.setData({
      active: this.data.active = scrollNum
    })
  },

  clearSelectName(event){
    if (event.detail.isSelect) {
      this.data.waitClearSexName.push(event.detail.sexName);
    } else {
      let arrIndex = this.data.waitClearSexName.indexOf(event.detail.sexName);
      this.data.waitClearSexName.splice(arrIndex, 1);
    }

    this.checkIsRemoveBtnDisable();

  },


  removeHireNameItem(){
    
    for (let item of this.data.waitClearSexName){
      let arrIndex = this.data.sexNameArr.indexOf(item);
      this.data.sexNameArr.splice(arrIndex, 1);
      
    }
    wx.setStorageSync('hireName', this.data.sexNameArr)
    this.setData({
      sexNameArr: this.data.sexNameArr,
      waitClearSexName: this.data.waitClearSexName = []
    })
   
    let objectArr = this.selectAllComponents('.idItem');
    for (let item of objectArr) {
      item.changeData()
    }

    this.checkIsRemoveBtnDisable();
  },

  removeAllHireName(){

    const that = this;

    wx.showModal({
      title: '全部删除',
      content: '您确定要删除所有已使用的名字吗',
      success: function(res){
        if(res.confirm){
          that.setData({
            sexNameArr: that.data.sexNameArr = [],
            waitClearSexName: that.data.waitClearSexName = []
          })
          wx.setStorageSync('hireName', [])
          that.checkIsRemoveBtnDisable();
        }
      }
    })

    
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      sexNameArr: this.data.sexNameArr = wx.getStorageSync('hireName')
    })

    this.checkIsRemoveBtnDisable();
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