<template>
  <div>
    <!-- 头部 -->
    <Header></Header>
    <!-- 轮播图 -->
    <div class="swiperList">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in swiperData" :key="index">
          <router-link :to="{name:'index',params:{id:item.url}}">
            <img :src="item.imgUrl">
            <p class="img-text">{{item.title}}</p>
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- <div class="red-packet">
      <img src="../../../static/img/banner.png" alt="">
    </div> -->

    <!-- 底部 -->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      swiperData: [], //轮播图数据
      swiperOption: {
        //轮播图设置
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          loop: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  methods: {
    getSwiperData() {
      axios.get("/swiper").then(res => {
        this.swiperData = res.data.data;
        console.log(res.data);
      });
    },
    handleSign(){
      window.location.href = "https://www.wenjuan.com/s/uaeUBnZE/"
    }
  },
  created() {
    this.getSwiperData();
  }
};
</script>

<style scoped lang = "scss">
.swiperList {
  margin-top: 50px;
  height: 200px;
  /* border: 1px solid #f00; */
  img {
    width: 100%;
    height: 200px;
    position: relative;
  }
  p {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2px;
    height: 20px;
    color: #fff;
    text-indent: 2em;
    font-size: 14px;
    background-color: rgba($color: #c4b3db, $alpha: 0.5);
  }
}
/* banner */
.red-packet {
  img {
    margin-top: 4px;
    width: 100%;
    height: 30px;
  }
}

</style>
