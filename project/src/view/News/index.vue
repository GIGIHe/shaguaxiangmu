<template>
  <div>
    <!-- 头部 -->
    <!-- <mt-navbar v-model="selected" class="nav_bar">
      <mt-tab-item id="1">最新</mt-tab-item>
      <mt-tab-item id="2">排行榜</mt-tab-item>
      <mt-tab-item id="3">党政</mt-tab-item>
      <mt-tab-item id="4">惠农</mt-tab-item>
      <mt-tab-item id="5">政策解读</mt-tab-item>
    </mt-navbar> -->
    <!-- <Header></Header> -->
    <swiper :options="swiperOption" class="swiper bgc-w">
      <swiper-slide >
        <img src="../../image/bigdatajpg.jpg">
      </swiper-slide>
      <swiper-slide >
        <img src="../../image/science.jpg">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 新闻列表 -->
    <ul class="news_wrap mb bgc-w">
      <li v-for="(item,index) in newsList" :key="index" @.stop @click="handle(item.id)" class="news_item">
        <div class="imgbox">
          <img :src="item.img" alt="">
        </div>
        <div class="news">
          <div class="title">{{item.title}}</div>
          <div class="date">
            <span>{{item.time}}</span>
            <i class="iconfont icon-z">{{item.num}}</i>
          </div>
        </div>
      </li>
    </ul>
    <!-- 底部 -->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // selected: "1",
      newsList: [],
      swiperData: [
        { "img": "../../image/bigdatajpg.jpg" },
        { "img": "../../image/science.jpg" }
      ], //轮播图数据
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    //获取轮播图数据
    // getSwiperData() {
    //   console.log(9999);
    //   axios.get("/swiper1").then(res => {
    //     this.swiperData = res.data.data;
    //     console.log(res.data);
    //   });
    // },
    // 获取新闻列表
    getNewsList() {
      axios.get("/newsList").then(res => {
        this.newsList = res.data.data;
        this.$store.commit("NEWSLIST", this.newsList);
        console.log(res.data);
      });
    },
    //跳转到新闻详情页
    handle(index) {
      console.log(index);
      this.$router.push({ name: "newsDetail", query: { id: index } });
      // this.$router.push(`/newsDetail/id = ${index}`)
    }
  },
  created() {
    // this.getSwiperData();
    this.getNewsList();
  },
   mounted(){
      // this.$back()
  }
};
</script>
<style>
.icon-dianzan {
  color: gray;
}
.active {
  color: #f44336;
}
</style>

<style scoped lang = "scss">
.nav_bar {
  /deep/ .mint-tab-item-label {
    font-size: 13px;
  }
}
.swiper {
  height: 1.6rem;
  margin-top: 4px;
  margin-bottom: 10px;
  overflow: hidden;
  img {
    width: 96%;
    display: block;
    margin: auto;
    height: 100%;
    border-radius: 10px;
  }
}
.news_wrap {
  margin-top: 6px;
}
.news_item {
  height: 0.8rem;
  box-sizing: border-box;
  padding: 10px 0;
  display: flex;
  padding-left: 10px;
  border-bottom: 1px solid #ddd;
  /* border: 1px solid #f00; */
  .imgbox {
    width: 0.6rem;
    margin-right: 10px;
    img {
      width: 100%;
      height: 0.6rem;
    }
  }
  .news {
    height: 0.6rem;
    flex: 1;
    padding-right: 22px;
    /* border: 1px solid #f00; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      font-size: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      /* 行数 */
      -webkit-box-orient: vertical;
    }
    .date {
      display: flex;
      justify-content: space-between;
      color: #666;
    }
  }
}
</style>
