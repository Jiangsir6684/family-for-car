<template>
  <div class="explain">
    <!-- <div class="message">积分说明</div> -->
    <el-container>
    <el-header class="message">积分说明</el-header>
    <el-main>Main</el-main>
  </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
    btn () {
      var datas = this.post
      this.$store.dispatch('postData', datas)
    }
  }
}
</script>

<style scoped lang='less'>
.explain{
   box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .message{
    background-color: #fff;
  }
}
</style>
