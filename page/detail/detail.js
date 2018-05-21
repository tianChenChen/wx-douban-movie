// page/detail/detail.js

// 获取全局应用程序实例对象
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {},
    title: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { id } = options

    wx.showLoading({
      title: '',
    })

    app.douban.findOne(id)
      .then(res => {
        console.log(res)
        this.setData({ title: res.title, movie: res })
        wx.setNavigationBarTitle({ title: res.title })
        wx.hideLoading()
      })
      .catch(e => {
        this.setData({ title: '获取数据异常', movie: {} })
        console.error(e)
        wx.hideLoading()
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