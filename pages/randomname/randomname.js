// pages/randomname/randomname.js
import sexName from '../../assets/json/sexname.js'

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    imageSrc: "/assets/features/jiqi.png",
    featuresIntroduction: "在网络小说中，很多龙套，或是一些不太重要的人物，出场不多的重要人物，总要去想这些人的名字，是件很麻烦的事情，所以有了这个随机起名的功能，内置性别为百家姓，拥有单姓和复姓，名字库拥有1544个名字，随机起名的名字默认不重复，但不支持提交新的名字或姓氏，暂不支持该功能。",
    sex: sexName.sex,
    name: sexName.name,
    sexLength: sexName.sex.length,
    nameLength: sexName.name.length,
    sexNameArr: [],
    waitHireSexName: [],
    hireNameDisable: true,
  },

  //逻辑函数
  /**
   * @description 打印随机形式和名字
   * @param [length]  数组长度
   * @param [arr] 数组
   * @return [string] 数组[随机数] 的姓氏或名字
   */
  printRandom(length,arr){
    let randomNum = parseInt(Math.random() * length);
    let string = arr[randomNum]; 
    return string;
  },

  
  /**
   * @description 同名屏蔽
   * @param [name] 随机选出来的名字
   * @return if 被记录 '' else name
   * 
   */
  shieldingSameName(name){
    const hireName = wx.getStorageSync('hireName');

    for ( let item of hireName) {
      if (name == item) {
        return '';
      }
    }

    return name;
  },

  /**
   * @description 随机出一个符合条件的名字
   * @param [printSexNameArr] 待输出的去重数组
   * @param [sex] 速记选出来的姓氏
   * @return [printSexNameArr]
   */
  printName(printSexNameArr, sex){
    
    let hireName = '';
    let name = '';

    //检查名字是否已经录用.直到名字未录用为止
    do{

      name = this.printRandom(this.data.nameLength, this.data.name);
      hireName = this.shieldingSameName(name);

    } while(hireName == '')
  
    const sexName = sex + name;
    printSexNameArr.add(sexName)

    return printSexNameArr;
    
  },

  //事件函数
  printSexName(){

    let printSexNameArr = new Set();
    const printNum = wx.getStorageSync('printNum')


    //将待输出的数组填满
    do{
      //获取一个没被记录的名字
      let sex = this.printRandom(this.data.sexLength, this.data.sex);
      this.printName(printSexNameArr, sex)

    } while (printSexNameArr.size < printNum)

    //三点运算符也叫剩余运算符， ...把数组的元素全部添加进去
    this.data.sexNameArr.push(...printSexNameArr);
    this.setData({
      sexNameArr: this.data.sexNameArr
    })

  },

  clearSexName(){
    if (this.data.sexNameArr.length !== 0){
      this.setData({
        sexNameArr: this.data.sexNameArr = [],
        waitHireSexName: this.data.waitHireSexName = [],
        hireNameDisable: this.data.hireNameDisable = true
      })
    }
  },

  handleSelectName(event){

   
    if (event.detail.isSelect){
      this.data.waitHireSexName.push(event.detail.sexName);
    }else{
      let arrIndex = this.data.waitHireSexName.indexOf(event.detail.sexName);
      this.data.waitHireSexName.splice(arrIndex,1);
    }

    this.data.waitHireSexName.length == 0? this.setData({
      hireNameDisable: this.data.hireNameDisable = true
    }) : this.setData({
        hireNameDisable: this.data.hireNameDisable = false
    })
    
  },

  hireName(){
    let hireNameArr = wx.getStorageSync('hireName');
    hireNameArr.push(...this.data.waitHireSexName);

    wx.setStorageSync('hireName', hireNameArr)

    for (let item of this.data.waitHireSexName){
      let arrIndex = this.data.sexNameArr.indexOf(item)
      this.data.sexNameArr.splice(arrIndex,1)
      
    }

    this.setData({
      sexNameArr: this.data.sexNameArr,
      waitHireSexName: this.data.waitHireSexName = [],
      hireNameDisable: this.data.hireNameDisable = true
    })
    
    let objectArr = this.selectAllComponents('.idItem');
    for (let item of objectArr){
      item.changeData()
    }
  },
  


  //路由跳转
  toPreviewPage() {
    wx.navigateTo({
      url: `/pages/randomname/children/preview/preview`
    })
  },

  toSetPage() {
    wx.navigateTo({
      url: '/pages/randomname/children/set/set',
    })
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