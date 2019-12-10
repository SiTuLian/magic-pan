// components/checkboxsexname/checkboxsexname.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sexNameItem: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isSelect: false,
    isSelectStyle: false
  },

  

  /**
   * 组件的方法列表
   */
  methods: {
    handleSelectName(event){
      
      this.setData({
        isSelect: !this.data.isSelect,
        isSelectStyle: !this.data.isSelectStyle
      })
      
      this.triggerEvent('selectName', { 
        sexName: event.currentTarget.dataset.name,
        isSelect: this.data.isSelect,
        isSelectStyle: this.data.isSelectStyle
        
        },{})
    },

    changeData() {
      this.setData({
        isSelect: this.data.isSelect = false,
        isSelectStyle: this.data.isSelectStyle = false
      })
    }
  }
})
