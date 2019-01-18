<template>
  <div class="news-details">
    <mt-header>
      <mt-button
        icon="back"
        @click="back"
        slot="left"
      >返回</mt-button>
    </mt-header>
    <div class="total-content bgc-w mt mb">
      <div
        v-html="content.title"
        class="title"
      ></div>
      <div class="strip">
        <span>时间：</span>
        <span v-html="content.time"></span>
        <span class="read_num">阅读量：</span>
        <span v-html="content.num">0</span>
      </div>
      <!-- <div class="img_box">
        <img :src="content.img" alt="">
      </div> -->
      <div
        v-html="content.content"
        class="content"
      ></div>
    </div>
    <div class="footer">
      <input type="text">
      <div class="operate">
        <i class="iconfont icon-yuyin"></i>
        <i class="iconfont icon-xin2"></i>
        <i class="iconfont icon-pengyouquan"></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      content: "",
      id: ""
    };
  },
  methods: {
    getData() {
      this.id = this.$route.query.id;
      let news = this.$store.state.news;
      news.forEach(item => {
        if (item.id == this.id) {
          this.content = item;
        }
      });
      console.log(this.content);
    },
    back() {
      this.$router.history.go(-1);
    }
  },
  created() {
    this.getData();
    // let id = this.$route.query.id;
    // console.log("fjfj", id);
  },
  mounted() {
    this.$back();
  }
};
</script>

<style scoped lang = "scss">
.news-details {
  /deep/ .mint-header {
    background-color: #fff;
    color: #666;
    height: 46px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
  /deep/ h2 {
    text-align: center;
    font-weight: 600;
    font-size: 22px;
  }
  /deep/ p {
    font-size: 16px;
    text-indent: 2em;
    color: #666;
    line-height: 2;
  }
  .total-content {
    /* margin-top: 4px; */
    box-sizing: border-box;
    padding-top: 30px;
  }
  .title {
    font-size: 16px;
    text-align: center;
  }
  .content {
    padding: 12px;
    /* /deep/ img{
       width: 3.75rem;
    box-sizing: border-box;
    padding: 12px;
    } */
  }
  .strip {
    margin-top: 4px;
    /* border: 1px solid #eff; */
    text-align: center;
    height: 30px;
    line-height: 30px;
    .read_num {
      margin-left: 10px;
    }
  }
  /* .img_box {
    width: 3.75rem;
    box-sizing: border-box;
    padding: 12px;
    img {
      width: 100%;
    }
  } */
  /deep/ img {
    display: block;
    width: 3rem;
    box-sizing: border-box;
    margin: auto;
  }
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.5rem;
  background-color: #fff;
  /* border: 1px solid #333; */
  display: flex;
  input {
    outline: none;
    border-radius: 2px;
    border: none;
    text-indent: 1em;
  }
  .operate {
    height: 0.5rem;
    /* border: 1px solid #333; */
    flex: 1;
    /* margin-left: 150px; */
    display: flex;
    justify-content: space-around;
  }
  /deep/ .icon-yuyin,
  .icon-xin2 {
    color: #666;
    font-size: 30px;
    line-height: 1.6;
  }
  /deep/ .icon-pengyouquan {
    color: #09bb07;
    font-size: 30px;
    line-height: 1.6;
  }
}
</style>
