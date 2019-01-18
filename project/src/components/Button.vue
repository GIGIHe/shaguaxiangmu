<template>
  <div>
    <button class="submit">{{title}}</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style scoped lang = "scss">
.submit {
  display: block;
  width: 50%;
  height: 0.4rem;
  /* margin: 0 auto; */
  margin-right: auto;
  margin-left: auto;
  outline: none;
  border: none;
  background-color: #409eff;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
}
</style>
