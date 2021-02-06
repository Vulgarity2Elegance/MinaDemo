// pages/img/img.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"hello mina",
    num: 0,
    isGirl: false,
    person: {
      age: 20,
      height: 180,
      weight: 74,
      name: "Lord Ember"
    },
    list: [
      {
        id: 0,
        name: "A"
      },
      {
        id: 1,
        name: "B"
      },
      {
        id: 2,
        name: "C"
      },
    ]

  },
  handleInput(e) {
    console.log(e.detail.value)
    this.setData({
      num: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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