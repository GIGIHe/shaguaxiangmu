<template>
  <div class="course">
    <mt-header :fixed=true>
        <mt-button
          icon="back"
          @click="back"
          slot="left"
        >返回</mt-button>
      <mt-button
        icon="more"
        slot="right"
      ></mt-button>
    </mt-header>
    <!-- 课程视频 -->
    <div class="course_video">
      <!-- <div @click="handle"></div> -->
      <video
        :src="video"
        controls="controls"
        :poster="img"
        autoplay="autoplay"
      ></video>
    </div>
    <!-- 课程详情介绍 -->
    <!-- 导航栏卡部分 -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">简介</mt-tab-item>
      <mt-tab-item id="2">文档</mt-tab-item>
      <mt-tab-item id="3">聊天</mt-tab-item>
      <mt-tab-item id="4">问答</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!-- 课程基本信息 -->
        <div class="introduce bgc-w">
          <h2 class="course_title">{{courseData.title}}</h2>
          <div class="course_time">
            <span>{{courseData.time}}</span>
          </div>
        </div>
        <!-- 课程讲师以及介绍 -->
        <div class="course_details bgc-w">
          <!-- 讲师介绍 -->
          <div class="lecturer">
            <div class="name_info">
              <i class="iconfont icon-tubiao-"></i>
              <span>{{courseData.teacher}}</span>
            </div>
            <div class="lecturer_desc">
              <p>{{courseData.teacher_info}}</p>
            </div>
          </div>

          <!-- 分割线 -->
          <div class="border"></div>
          <!-- 课程简介 -->
          <div class="course_introduce">
            <h3>课程简介</h3>
            <p>{{courseData.course_info}}</p>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">

      </mt-tab-container-item>
      <mt-tab-container-item id="3">

      </mt-tab-container-item>
      <mt-tab-container-item id="4">

      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "1",
      courseData: "", //课程数据
      video: "",
      img: ""
    };
  },
  methods: {
    back() {
      this.$router.history.go(-1);
    },
    getData() {
      let id = this.$route.query.id; //获取课程的id
      let data = this.$store.state.course; //获取课程的全部信息
      data.forEach((item, index) => {
        if (item.id == id) {
          this.courseData = item;
          this.video = item.video_url;
          this.img = item.imgUrl;
        }
      });
    }
  },
  created() {
    // console.log(this.$route.params.id);
    this.getData();
    // console.log("course", this.courseData);
    // console.log(this.video);
  },
  mounted() {}
};
</script>

<style scoped lang = "scss">
.course {
  /deep/ .mint-header {
    height: 0.6rem;
  }
  /* 课程视频部分 */
  .course_video {
    margin-top: 0.64rem;
    /* border: 1px solid #00f; */
    height: 2rem;
    video {
      height: 100%;
      width: 100%;
    }
  }
  /* 课程基本信息 */
  .introduce {
    margin-top: 4px;
    margin-bottom: 6px;
    height: 0.6rem;
    box-sizing: border-box;
    padding: 0 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .course_title {
      /* font-size: 16px; */
      font-weight: 600;
      color: #262626;
      margin-bottom: 4px;
    }
    .course_time {
      color: #666;
    }
  }
  .course_details {
    /* border: 1px solid #f00; */
    color: #555;
    padding: 14px;
    .name_info {
      font-size: 16px;
      /* border: 1px solid #00f; */
    }
    /deep/ .icon-tubiao- {
      font-size: 22px;
      color: #1a8cff;
    }
    .lecturer_desc {
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 15px;
      line-height: 1.6;
    }
  }
  .border {
    height: 1px;
    background-color: #999;
    margin-bottom: 10px;
  }
  .course_introduce {
    font-size: 16px;
    padding-bottom: 12px;
    p {
      margin-top: 4px;
      font-size: 14px;
      line-height: 1.6;
      line-height: 1.6;
    }
  }
}
</style>
