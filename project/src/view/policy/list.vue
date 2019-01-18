<template>
  <div>
<List :content="content"></List>
  </div>
</template>

<script>
import List from '../../components/List.vue'
// 可以使用
  export default {
components:{
List
},
methods:{
   getData() {
      this.id = this.$route.query.id;
      let news = this.$store.state.news;
      news.forEach(item => {
        if (item.id == this.id) {
          this.content = item;
        }
      });
      // console.log(this.content);
    },
},
created(){
  this.getData()
},
 mounted(){
  }
  }
</script>

<style scoped>

</style>
