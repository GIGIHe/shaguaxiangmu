<template>
  <div>
    <header class="head font-16 bgc-w">
      <img
        src="./image/back.svg"
        class="back"
        @click="$router.back()"
      >
      <span>培训报名</span></header>
    <div class="main mt bgc-w">
      <div class="banner"></div>
      <div class="login_box">
        <!-- <h2 class="login">填写信息</h2> -->
        <div class="select">
          <span class="select_lable">姓名</span>
          <input
            placeholder="请输入您的姓名"
            type="text"
            v-model="formData.username"
            class="username"
          />
        </div>
        <div class="sex">
          <span
            for=""
            class="select_lable"
          >性别</span>
          <div class="sex_box">
            <label class="sex_label">
              <input
                type="radio"
                name="sex"
                id=""
                class="a-radio"
                checked
              >
              <span class="b-radio"></span>男
            </label>
            <label class="sex_label">
              <input
                type="radio"
                name="sex"
                id=""
                class="a-radio"
              >
              <span class="b-radio"></span>女
            </label>
          </div>
        </div>
        <div class="select">
          <span class="select_lable">电话</span>
          <input
            placeholder="请输入您的电话"
            type="tel"
            class="tel"
            v-model="formData.tel"
          />
        </div>
        <div class="select">
          <span class="select_lable">学校</span>
          <select
            name=""
            id=""
            class="selec_box"
          >
            <option value="1">北京职业技能培训中心</option>
            <option value="2">河北涿州职业技能培训中心</option>
            <option value="3">山西运城职业技能培训中心</option>
          </select>
        </div>
        <div class="select">
          <span class="select_lable">开班日期</span>
          <input
            type="date"
            class="bgc-w begin_date"
            id="date"
            v-model="value"
          />
        </div>
        <!-- <div class="select">
          <span class="select_lable">培训课程</span>
          <select class="selec_box">
            <option value="1">家政经理人</option>
            <option value="2">高级月嫂</option>
            <option value="3">家政服务员</option>
            <option value="4">高级顾问</option>
          </select>
        </div> -->
      </div>
    </div>
    <Button
      :title="title"
      class="mb"
      @click.native="submit"
    ></Button>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Button from "../../components/Button";
import { Toast } from "mint-ui";
export default {
  components: {
    Button
  },
  data() {
    return {
      title: "提交信息",
      // pickerValue:''
      value: "2019-01-02",
      formData: {
        username: "",
        tel: ""
      }
    };
  },
  methods: {
    submit() {
      if (this.formData.username && this.formData.tel) {
        if (/^1\d{10}$/.test(this.formData.tel)) {
          Toast("报名成功");
        } else {
          Toast("请输入合法的手机号");
        }
      } else {
        Toast("请完善信息");
      }
    },
    onValuesChange() {
      // this.$refs.picker.open();
    },
    getDate() {
      var now = new Date();
      //格式化日，如果小于9，前面补0
      var day = ("0" + now.getDate()).slice(-2);
      //格式化月，如果小于9，前面补0
      var month = ("0" + (now.getMonth() + 1)).slice(-2);
      //拼装完整日期格式
      var today = now.getFullYear() + "-" + month + "-" + day; //默认的是-
      // console.log(today);
      this.value = today;
      // document.getElementById("date").setAttribute("value", today);
      //完成赋值
    }
  },
  mounted() {
    this.getDate();
    // this.$back();
  }
};
</script>

<style scoped lang = "scss">
.head {
  height: 46px;
  text-align: center;
  line-height: 46px;
  /* margin-bottom: 4px; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  .back {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    width: 0.2rem;
  }
}
/* 重置单选按钮的样式 */
.sex_label {
  margin: 10px;
}
.a-radio {
  display: none;
}
.b-radio {
  display: inline-block;
  border: 1px solid #ccc;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 5px;
  position: relative;
}
.b-radio:before {
  content: "";
  font-size: 0;
  width: 10px;
  height: 10px;
  background: rgb(143, 188, 238);
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -5px;
  margin-top: -5px;
  border-radius: 50%;
  display: none;
}
.a-radio:checked ~ .b-radio:before {
  display: block;
}
/* 重置单选按钮的样式 */
/* 重置input[date]样式 */
.begin_date {
  -webkit-appearance: none;
  outline: none;
  border: 1px solid transparent;
  flex: 1;
  font-size: 16px;
  /* ::-webkit-calendar-picker-indicator {
border: 1px solid #ccc;
border-radius:2px;
box-shadow:inset 0 1px #fff, 0 1px #eee;
background-color: #eee;
background-image: -webkit-linear-gradient(top, #f0f0f0, #e6e6e6);
color: #666;
} */
}
label.hh {
  display: inline-block;
  height: 200px;
  /* widh: 200px; */
  width: 200px;
  border: 1px solid;
}

.main {
  margin-bottom: 20px;
  .banner {
    height: 1.5rem;
    background: url("../../image/train.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .login_box {
    padding: 20px;
    box-sizing: border-box;
    .login {
      text-align: center;
      color: #f00;
      font-weight: 500;
    }
    .username,
    .tel {
      border: transparent;
      outline: none;
      border-bottom: 1px solid #ddd;
      border-radius: 0;
      font-size: 16px;
    }
    .sex,
    .select {
      height: 36px;
      line-height: 36px;
      display: flex;
      padding-left: 10px;
      font-size: 16px;
      margin-top: 10px;
      label {
        width: 1.1rem;
        font-size: 16px;
      }
      .sex_box {
        flex: 1;

        /* border: 1px solid #00f; */
      }
      .select_lable {
        width: 1.1rem;
      }
      /* 下拉菜单重置样式 */
      .selec_box {
        /*清除select默认样式*/
        -webkit-appearance: none;
        /* -ms-appearance:none; */
        background: #fff;
        outline: none;
        border: none;
        /* color: #666; */
        padding: 8px;
        outline: none;
        font-size: 16px;
      }
      /*.selec_box {
        width: 1.5rem;
        outline: none;
        border: none;
         display: none;
      } */
    }
  }
}
</style>
