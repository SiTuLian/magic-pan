// components/features/features.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    features: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击图标进入对应页面
    toNewPage(event){
      const itemIndex = event.currentTarget.dataset.index;
      switch (itemIndex){
        case 0:
          wx.navigateTo({
            url: '/pages/randomname/randomname',
          })
          break;
        case 1:
          wx.navigateTo({
            url: '/pages/storytime/storytime',
          })
          break;
        case 2:
          wx.navigateTo({
            url: '/pages/characterrelationships/characterrelationships',
          })
          break;
        case 3:
          wx.navigateTo({
            url: '/pages/atlas/atlas',
          })
          break;
        case 4:
          wx.navigateTo({
            url: '/pages/noveloutline/noveloutline',
          })
          break;
        case 5:
          wx.navigateTo({
            url: '/pages/dataediting/dataediting',
          })
          break;
      }
    
    }
  }
})
