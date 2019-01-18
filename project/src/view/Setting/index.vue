<template>
  <div class="setting">
    <!-- 头部 -->
    <Header></Header>
    <!-- <input type="number" value="134">
<input type="date" value="2010-10-10" class="mt">
<select name="" id="">
  <option value="1" >1</option>
  <option value="2" selected>2</option>
  <option value="4">3</option>
  <option value="3">4</option>
</select> -->
    <Button :title="title" class="mt"></Button>
    <!-- 底部 -->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Button from "../../components/Button";
export default {
  components: {
    Button
  },
  data() {
    return {
      pickerValue: "",
      title: "退出登录"
    };
  },
  methods: {
    // openPicker() {
    //   this.$refs.picker.open();
    // }
  },
  mounted(){
      // this.$back()
  }
};
</script>

<style scoped lang = "scss">
.setting{
/deep/ .submit{
background-color: #f44f28;
/* background-color: #eee; */
}
}
</style>
