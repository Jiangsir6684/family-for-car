<template>
  <div class="home">
    <h1>北京家庭汽车摇号积分计算</h1>
    <h2 class="fontstyle-h2" @click="calculate">
      <i class="el-icon-thumb"></i>
        积分计算
      <i class="el-icon-mobile"></i>
    </h2>
    <h2 class="fontstyle-h2" @click="explain">
      <i class="el-icon-thumb"></i>
        积分说明
      <i class="el-icon-reading"></i>
    </h2>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
    calculate () {
      this.$router.push('./calculate')
    },
    explain () {
      this.$router.push('./explain')
    }
  }
}
</script>

<style scoped lang='less'>
.home{
  .fontstyle-h2{
    cursor: pointer;
    color: blue;
  }
}
</style>
