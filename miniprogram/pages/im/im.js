const devicesId = "577437963" // 填写在OneNet上获得的devicesId 形式就是一串数字
const api_key = "N=MhtvbV2ettlcUBoXGQhGtSXGs=" // 填写在OneNet上的 api-key 

Page({
  Read: function () {
    var that = this;
    wx.request({
      url: `https://api.heclouds.com/devices/${devicesId}/datapoints?datastream_id=weight&limit=20`,
      header: {
        'content-type': 'application/json',
        'api-key': api_key
      },
      success: function (res) {
        console.log(res)
        that.setData({
          result: res.data.data.datastreams[0].datapoints[0].value
        })
      },
      fail: function (err) {
        console.log(err)
      },
      complete: function () {
        console.log("a")
      }
    })
  }
})
