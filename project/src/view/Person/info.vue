<template>
  <div class="info_wraper">
    <div class="info_head">
      <mt-header title="人员列表">
        <router-link
          to="/person"
          slot="left"
        >
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <ul class="news_wrap mt bgc-w">
      <li
        v-for="(item,index) in personData"
        :key="index"
        class="news_item"
      >
        <div class="imgbox">
          <img
            :src="item.img"
            alt=""
          >
        </div>
        <div class="news">
          <div class="title">
            <div><span>{{item.name}}</span>
              <span>{{item.age}}</span>
              <span>{{item.address}}</span></div>
            <div class="special_job">待岗</div>
          </div>
          <div class="date">
            <span class="experence">{{item.experence}}年工作经验&nbsp;|</span>
            <span class="current_job">{{item.job}}</span>
          </div>
          <div class="special">
            <span>{{item.special}}</span>
          </div>
        </div>
      </li>
    </ul>
    <p class="footer">到底了哟</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      personData: []
    };
  },
  methods: {
    getData() {
      axios.get("/info").then(res => {
        this.personData = res.data.data;
        console.log(this.personData);
        console.log(res.data.data);
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang = "scss">
.info_wraper {
  /deep/ .mint-header {
    height: 46px;
  }
  .info_head {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 999;
  }
  /* .news_wrap {
    margin-top: 6px;
  } */
  .news_item {
    height: 0.9rem;
    box-sizing: border-box;
    padding: 8px 0;
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
      height: 0.72rem;
      flex: 1;
      padding-right: 22px;
      /* border: 1px solid #f00; */
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        display: flex;
        justify-content: space-between;
        font-size: 15px;
        font-weight: 700;
        /* overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;//行数
        -webkit-box-orient: vertical; */
      }
      .experence,
      .special {
        font-size: 14px;
        font-family: Helvetica;
        color: #555;
      }
      .special_job,
      .current_job {
        text-align: center;
        font-size: 12px;
      }
      .special_job {
        width: 0.4rem;
        line-height: 1.5;
        border: 1px solid #409eff;
        border-radius: 2px;
        color: #409eff;
        font-weight: 700;
      }
      .date,
      .special {
        display: flex;
        justify-content: space-between;
        color: #666;
      }
    }
  }
  .footer {
    text-align: center;
    height: 0.3;
    line-height: 0.3rem;
    color: #666;
  }
}
</style>
