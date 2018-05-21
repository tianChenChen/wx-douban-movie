// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    page: 1,
    size: 20,
    subtitle: '加载中...',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.loadMovies()
  },

  loadMovies () {

    this.setData({ loading: true})
    return app.douban.find('top250', this.data.page++, this.data.size)
    .then(d => {
      const data = d.subjects
      const movies = this.data.movies

      for (let i = 0; i < data.length; i+=2) {
        movies.push([data[i], data[i+1] ? data[i+1] : null])
      }

      this.setData({ movies, loading: false}) 
    })
  },

  scrollHandler () {
    const { page } = this.data
    this.setData({
      page:page+1
    })
    this.loadMovies()
  },

  gotoDetail (e) {
    console.log(e)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
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
    this.setData({ movies: [], page: 1, hasMore: true })
    this.loadMore()
      .then(() => wx.stopPullDownRefresh())
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})