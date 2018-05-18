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

  loadMore () {
    if (!this.data.hasMore) return

    wx.showLoading({
      title: '拼命加载中...',
    })

    // this.setData({subtitle: '加载中...'})

    // return app.douban.find(this.data.type, this.data.page++, this.data.size)
    //   .then(d => {
    //     if (d.subjects.length) {
    //       this.setData({ subtitle: d.title, movies: this.data.movies.concat(d.subjects) })
    //     } else {
    //       this.setData({ subtitle: d.title, hasMore: false })
    //     }
    //     wx.hideLoading()
    //   })
    //   .catch(e => {
    //     this.setData({ subtitle: '获取数据异常' })
    //     console.error(e)
    //     wx.hideLoading()
    //   })

    return app.douban.find('top250', 1, 8)
    .then(d => {
      console.log(d)
    })

    console.log(tasks)

    Promise.all(tasks).then(boards => {
      this.setData({ boards: boards, loading: false })
      wx.hideLoading()
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    this.data.title = params.title || this.data.title

    // 类型： in_theaters  coming_soon  us_box
    this.data.type = params.type || this.data.type

    this.loadMore()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({ title: this.data.title + ' « 电影 « 豆瓣' })
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