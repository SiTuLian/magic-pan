// components/introduction/introduction.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imageSrc: {
      type: String,
      value: ''
    },
    featuresIntroduction: {
      type: String,
      value: ''
    },
    btnName: {
      type: String,
      value: ''
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    //功能简介为0隐藏，否则显示
    btnCount: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showText(){
    
      this.data.btnCount===0?this.setData({
        btnCount: this.data.btnCount=1
      }):this.setData({
        btnCount: this.data.btnCount = 0
      })
    }
  }
})
