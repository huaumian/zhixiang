var util = require('../util/util.js')

Page({
  data: {
    list: [],
    index: 0,
    hhh:" "
  },
res: function (e) {
  console.log(e)
  const db = wx.cloud.database()

  var that = this
  db.collection('hhhh').add({
    data: {
     content:e.detail.value.content,
     createTime: db.serverDate(),
      time: util.formatTime(new Date())
    },
    success: res => {

      wx.showToast({
        title: '新增记录成功',
      })
      console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
    },
    fail: err => {
      wx.showToast({
        icon: 'none',
        title: '新增记录失败'
      })
      console.error('[数据库] [新增记录] 失败：', err)
    }
  })
},
read: function (options) {
  let that = this
  const db = wx.cloud.database()
  const _ = db.command
  let { list, index, num } = this.data;
  const MAX_LIMIT = 20
  db.collection('hhhh').orderBy('createTime', 'desc').skip(index).limit(MAX_LIMIT).where({
  }).get().then(res => {
    console.log(res);
    if (res.data.length) {
      list.push(...res.data)
      var hh=0;
      var max=res.data.length;
      for(var i=0;i<max;i++)
      {
        hh = hh +parseInt(res.data[i].content)
        console.log(hh)
      }
      this.setData({
        list,
        hhh:hh,
      })
      
    } else {
      this.setData({
        isOver: true
      })
    }
  })
}

})