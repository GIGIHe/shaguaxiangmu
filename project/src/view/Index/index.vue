<template>
  <div class="wraper">
    <div class="head">
      <div class="search bgc-w">
        <i class="iconfont icon-sousu"></i>
        <input
          type="text"
          placeholder="搜索简历/公司"
          class="search-box"
        >
      </div>
    </div>
    <!-- navbar -->
    <mt-navbar
      v-model="selected"
      class="selected"
    >
      <mt-tab-item id="1">优选职位</mt-tab-item>
      <mt-tab-item id="2">优选课程</mt-tab-item>
      <mt-tab-item id="3">政策解读</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <!-- <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="(item,index) in tabData" :key="index" :title="item" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell :title="'测试 ' + 2" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell :title="'选项 ' + 3" />
      </mt-tab-container-item>
    </mt-tab-container> -->
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul class="job_list mb">
          <li
            class="job_item bgc-w"
            v-for="(item,index) in jobData"
            :key="index"
            v-show="item.identify"
            @click="handle(item.id)"
          >
            <div class="row">
              <span class="job">{{item.job_name}}</span>
              <span class="salary">{{item.salary}}</span>
            </div>
            <div class="row">
              <span class="requirement">{{item.requirement}}</span>
              <span class="time">{{item.time}}</span>
            </div>
            <div class="row">
              <!-- <span class="treatment" v-for="(a,index) in treatment" :key="index">{{a.name}}</span> -->
              <div class="welfare">
                <span>绩效奖金</span>
                <span>定期体检</span>
              </div>
            </div>
            <div class="row">
              <span class="company">{{item.company}}</span>
              <div v-if="item.identify">
                <i class="iconfont icon-renzheng"></i>
                <span>已认证</span>
              </div>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="2">
        <div class="course mb bgc-w">
          <div
            class="course_item"
            v-for="(item,index) in courseData"
            :key="index"
          >
            <div class="img_box">
              <router-link :to="{name:'course',query:{id:item.id}}"><img
                  :src="item.imgUrl"
                  alt=""
                ></router-link>
              <i><img
                  src="../../image/pause.svg"
                  alt=""
                  class="pause"
                ></i>
            </div>
            <p class="title">{{item.title}}}</p>
            <p class="hot">最近在学{{item.count}}人</p>
          </div>
        </div>
      </mt-tab-container-item>

    </mt-tab-container>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="3">
        <ul class="news_wrap mb bgc-w">
          <li
            v-for="(item,index) in policyData"
            :key="index"
            @.stop
            @click="policy(item.id)"
            class="news_item"
          >
            <div class="imgbox">
              <img
                :src="item.img"
                alt=""
              >
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
      </mt-tab-container-item>

    </mt-tab-container>
    <!-- 底部 -->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selected: "1",
      jobData: [],
      courseData: [],
      policyData: []
    };
  },
  methods: {
    getData() {
      axios.get("/job").then(res => {
        this.jobData = res.data.data;
        // console.log(res.data.data);
      });
    },
    getCourse() {
      axios.get("/video").then(res => {
        this.courseData = res.data.data;
        this.$store.commit("COURSE", res.data.data);
        // console.log(this.courseData);
      });
    },
    getPolicy() {
      axios.get("/policy").then(res => {
        this.policyData = res.data.data;
        this.$store.commit("POLICY", res.data.data);
        // console.log("policyData", this.policyData);
      });
    },
    handle(id) {
      this.$router.push({ name: "recruit", query: { id: id } });
    },
    policy(id) {
      // console.log(id);
      this.$router.push({ name: "newsDetail", query: { id: id } });
    }
  },
  created() {
    this.getData();
    this.getCourse();
    this.getPolicy();
  },
  mounted() {
    // this.$back();
  }
};
</script>

<style>
.selected .mint-tab-item.is-selected {
  border: none;
  border: 1px solid #26a2ff;
  border-radius: 6px;
}
</style>

<style scoped lang = "scss">
.wraper {
  /deep/ .mint-navbar {
    margin-bottom: 10px;
  }
}
.head {
  background: url("../../image/banner.jpg") no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding-top: 10px;
  height: 2rem;
  margin-bottom: 10px;
}
.search {
  display: flex;
  margin: 0px auto 10px;
  width: 80%;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ddd;
  text-indent: 1em;
  border-radius: 20px;
  .search-box {
    display: block;
    margin-left: 10px;
    border: 0;
    outline: 0;
  }
}
.recruit {
  /deep/ .mint-searchbar {
    background: #f44336;
  }
  /deep/ .mint-searchbar-cancel {
    color: #fff;
  }
  /deep/ .mint-search {
    height: 100%;
  }
  .boo {
    height: 2rem;
    margin-top: 4px;
    border: 1px solid #ff0;
  }
}
.job_list {
  /* border: 1px solid transparent; */
  .job_item {
    height: 1.4rem;
    box-sizing: border-box;
    padding: 14px 10px;
    /* border: 1px solid #00f; */
    /* margin-top: 10px; */
    margin-bottom: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .job {
      font-size: 16px;
      font-weight: 700;
    }
    .salary {
      color: #f00;
    }
    /deep/ .icon-renzheng {
      font-size: 20px;
      color: #6ba4f6;
    }
    /* /deep/ .mint-tab-item.is-selected{
      border: 1px solid #26a2ff;
      border-radius: 6px;
    } */
  }
  .row {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid #f00; */
    .welfare {
      span {
        background-color: #eee;
        display: inline-block;
        line-height: 0.2rem;
        text-align: center;
        width: 0.6rem;
        height: 0.2rem;
        line-height: 0.2rem;
        margin-right: 1px;
      }
    }
  }
  .row:nth-of-type(2),
  .row:nth-of-type(3),
  .row:nth-of-type(4) {
    color: #666;
  }
  .company {
    color: #000;
  }
}
/* course */
.course {
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 14px 18px;
  .course_item {
    width: 1.56rem;
    /* border: 1px solid #f00; */
    margin-top: 10px;
    .img_box {
      width: 1.56rem;
      height: 1rem;
      position: relative;
      z-index: 999;
      .pause {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0.4rem;
      }
    }
    img {
      width: 100%;
      height: 100%;
      /* border: 1px solid #00f; */
      border-radius: 6px;
    }
    .title {
      font-size: 14px;
      color: #5e5e5e;
    }
    .hot {
      color: #bbb;
    }
  }
  .course_item::nth-of-type(3),
  .course_item::nth-of-type(4) {
    margin-top: 10px;
  }
}
/* course */
/* news */
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
  /* news */
}
</style>
