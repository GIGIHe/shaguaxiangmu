<template>
  <div class="positon-wrap">
    <div class="head">
      <div class="search bgc-w">
        <i class="iconfont icon-sousu"></i>
        <input type="text" placeholder="搜索职位/公司" class="search-box">
      </div>
    </div>
    <ul class="job_list mb">
      <li class="job_item bgc-w" v-for="(item,index) in jobData" :key="index">
        <router-link :to="{name:'recruit',query:{id:item.id}}">
          <div class="row">
            <span class="job">{{item.job_name}}</span>
            <span class="salary">{{item.salary}}</span>
          </div>
          <div class="row">
            <span class="requirement">{{item.requirement}}</span>
            <span class="time">{{item.time}}</span>
          </div>
          <div class="row">
            <div class="welfare">
              <span class="treatment" v-for="(el,index) in item.treatment" :key="index">{{el.name}}</span>
            </div>
            <!-- <div class="welfare">
            <span>绩效奖金</span>
            <span>定期体检</span>
          </div> -->
          </div>
          <div class="row">
            <span class="company">{{item.company}}</span>
            <div v-if="item.identify">
              <i class="iconfont icon-renzheng"></i>
              <span>已认证</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      jobData: [],
      treatment: []
    };
  },
  methods: {
    getData() {
      axios.get("/job").then(res => {
        this.jobData = res.data.data;
        // console.log(res.data.data);
      });
    }
    // handle(e){
    //   console.log(e);
    //   console.log(e.currentTarget.dataset.link);
    //   console.log(e.id);
    // }
  },
  created() {
    this.getData();
  },
   mounted(){
      // this.$back()
  }
};
</script>

<style scoped lang = "scss">
.positon-wrap .head {
  padding-top: 15px;
  box-sizing: border-box;
  height: 60px;
  background-color: #409eff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
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
.job_list {
  margin-top: 60px;
  border: 1px solid transparent;
  .job_item a {
    height: 1.4rem;
    box-sizing: border-box;
    padding: 14px 10px;
    /* border: 1px solid #00f; */
    margin-top: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #000;
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
  }
  .row {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid #f00; */
    .welfare {
      span {
        background-color: #eee;
        display: inline-block;
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
</style>
