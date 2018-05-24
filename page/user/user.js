// page/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '',
    nickName: '未知'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    wx.getUserInfo({
      success(res) {
        // console.log(res)
        this.setData({
          avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName
        })
      }
    })
  }
})