// page/subject/subject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    types: [
      {
        name: '正在热映',
        type: 'in_theaters',
        img: '/assets/image/xiju.png'
      },
      {
        name: '即将上映',
        type: 'coming_soon',
        img: '/assets/image/dongzuo.png'
      },
      {
        name: '新片榜',
        type: 'new_movies',
        img: '/assets/image/kehuan.png'
      },
      {
        name: 'Top250',
        type: 'top250',
        img: '/assets/image/aiqing.png'
      },
      {
        name: '口碑榜',
        type: 'weekly',
        img: '/assets/image/donghua.png'
      },
      {
        name: '北美票房榜',
        type: 'us_box',
        img: '/assets/image/donghua.png'
      }
    ]
  },

  typeHandler (e) {
    const type = e.currentTarget.dataset.type
    wx.navigateTo({
      url: '../subject-list/subject-list?type=' + type,
    })
    console.log(type)
  }
})