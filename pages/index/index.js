// 引入文件 路径补全
import {request} from "../../request/index.js"
//Page Object
Page({
  data: {
    //轮播图数组
    swiperList:[],
    //导航数组
    cataList:[],
    //楼层数据
    floorList:[]
  },
  //页面开始加载就会触发
  onLoad: function(options) {
    this.getSwiperList()
    this.getCataList()
    this.getFloorList()
  },

  //获取轮播图数据
  async getSwiperList(){
    // 1. 发送异步请求 
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     this.setData({swiperList:result.data.message})
    //   }
    // });
    // 2. 用promise来优化异步请求
    // request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'})
    // .then(result => {
    //   this.setData({
    //     swiperList: result.data.message
    //   })
    // })
    // 3. async/await syntax sugar 
    const result = await request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'})
    this.setData({
      swiperList: result.data.message
    })
  },

  //获取分类导航数据
  async getCataList(){
    const result = await request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'})
    this.setData({
      cataList: result.data.message
    })
  },


  //获取楼层数据
  async getFloorList(){
    const result = await request({url:'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'})
    this.setData({
      floorList: result.data.message
    })
  }

});
  