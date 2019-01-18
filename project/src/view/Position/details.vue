<template>
  <div class="position_details">
    <Header></Header>
    <section class="job_details mt mb bgc-w">
      <div class="news_info">
        <h2 class="job_name font-16">
          <span class="font-w500">{{jobData.job_name}}</span>
          <span class="salary font-16">{{jobData.salary}}</span>
        </h2>
        <!-- <div class="salary font-16">{{jobData.salary}}</div> -->
        <div class="look_num">
          <span class="color-6">{{jobData.look_num}}次浏览</span>
          <div>

            <i class="iconfont icon-fenxiang"></i>
          </div>
        </div>
        <div class="map">
          <h3>
            <i class="iconfont icon-dizhi"></i>
            <span class="font-w500">北京-朝阳区</span>
          </h3>
          <div class="map_address">
            <span class="color-6 workplace">{{jobData.workplace}}</span>
            <i class="iconfont icon-wendangguanlixitong-fanhuitubiao"></i>
          </div>
        </div>
      </div>
      <!-- 基本信息 -->
      <div class="basic_info color-6">
        <table>
          <td style="width:1rem">
            <i class="iconfont icon-shishizixun"></i>
            <span>基本信息</span>
          </td>
          <tr>
            <td>职位:</td>
            <td>{{jobData.job_name}}</td>
          </tr>
          <tr>
            <td>要求:</td>
            <td>招{{jobData.require_num}}人</td>
          </tr>
          <tr>
            <td>所在地:</td>
            <td>{{jobData.workplace}}</td>
          </tr>
          <tr>
            <td>福利待遇:</td>
            <td>
              <span
                v-for="(item,index) in jobData.treatment"
                :key="index"
              >{{item.name}}</span>
            </td>
          </tr>
        </table>
        <!-- <div class="row"><span>职位:</span><span>家政师</span></div>
        <div class="row"><span>要求:</span><span>招200人</span></div>
        <div class="row"><span>所在地:</span><span>通州</span></div>
        <div class="row"><span>福利待遇:</span><span>包住</span></div> -->
      </div>
      <!-- 公司信息 -->
      <div class="job_desc color-6 company">
        <div>
          <i class="iconfont icon-shishizixun"></i>
          <span>公司信息</span>
        </div>
        <div class="info_wrapper">
          <img
            src="../../image/company.svg"
            alt=""
            class="company_img"
          >
          <div class="company_info">
            <h3 class="company_name">{{jobData.company}}</h3>
            <p>
              <span>{{jobData.total_num}}人 |</span>&nbsp;
              <span>股份制企业</span>
            </p>
            <p>
              <span>北京</span>&nbsp;
              <span>在招职位{{jobData.jobs}}个</span>
            </p>
          </div>
        </div>
      </div>
      <!-- 职位信息 -->
      <div class="job_desc color-6">
        <div>
          <i class="iconfont icon-shishizixun"></i>
          <span>职位信息</span>
        </div>
        <ul
          v-html="jobData.desc"
          class="job_require"
        ></ul>
      </div>
    </section>
    <div class="footer color-6">
      <div class="icons">
        <div class="row">
          <i class="iconfont icon-dysmsduanxinfuwu"></i>
          <span>留言</span>
        </div>
        <div class="row">
          <i class="iconfont icon-shoucang"></i>
          <span>收藏</span>
        </div>
        <div class="row">
          <i class="iconfont icon-dianhua"></i>
          <span>电话</span>
        </div>
      </div>
      <div class="apply font-16">申请该职位</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      jobData: ""
      //  id:'',
      //  arr:[]
    };
  },
  methods: {
    getData() {
      axios.get("/job").then(res => {
        // console.log("xiangqing", res.data.data);
        let id = this.$route.query.id;
        // this.id = this.$route.query.id;
        let arr = res.data.data; //所有工作信息
        console.log("id", id);
        arr.forEach(el => {
          if (el.id == id) {
            this.jobData = el;
          }
        });
        // console.log('jdo',this.jobData);
      });
    }
  },
  created() {
    this.getData();
    // console.log('id',this.id);
  },
  mounted() {
    this.$back();
  }
};
</script>

<style scoped lang = "scss">
.job_details {
  /* border: 1px solid #0f0; */
  height: auto;
  padding: 14px;
  .news_info {
    /* height: 1.6rem; */
    .job_name {
      font-weight: 600;
    }
    .salary {
      color: #1988fb;
    }
    .look_num {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
    }
    .job_name,
    .salary,
    .look_num {
      margin-bottom: 10px;
    }
    .map {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid #ddd;
    }
    .map_address {
      margin-top: 4px;
      display: flex;
      justify-content: space-between;
    }
    .workplace {
      font-size: 12px;
    }
  }
  .news_info,
  .basic_info,
  .job_desc {
    border: 1px solid #ddd;
    box-shadow: 1px 1px 2px #eee;
    box-sizing: border-box;
    padding: 10px;
    font-size: 14px;
  }
  /* 公司信息 */
 .company {
      margin: 9px 0;
    }
  .info_wrapper {
    display: flex;
    .company_img {
      width: 0.5rem;
      height: 0.8rem;
      display: block;
    }
    .company_info {
      margin-left: 20px;
      margin-top: 20px;
    }
    .company_name {
      margin-bottom: 6px;
    }
  }
  /* 基本信息 */
  .basic_info {
    margin-top: 10px;
    .row {
      display: flex;
      justify-content: space-between;
    }
    td {
      height: 0.3rem;
      line-height: 0.3rem;
    }
  }
  /deep/ .icon-dizhi,
  .icon-shishizixun {
    color: #409eff;
  }
  /deep/ .job_require li {
    line-height: 3;
  }
}
.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  height: 0.5rem;
  background-color: #fff;
  display: flex;
  .icons {
    flex: 1;
    /* border: 1px solid #000; */
    display: flex;
    text-align: center;
    justify-content: space-around;
    .row {
      /* flex: 1; */
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    /deep/ .icon-dysmsduanxinfuwu,
    .icon-shoucang,
    .icon-dianhua {
      color: #409eff;
      font-weight: 700;
    }
  }
  .apply {
    width: 1.6rem;
    line-height: 0.5rem;
    background-color: #409eff;
    color: #fff;
    text-align: center;
  }
}
</style>
