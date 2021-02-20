<template>
  <div class="home">
    <!-- 左边 -->
    <div class="left" :hover ="bgc">
      <h1>北京家庭汽车摇号积分计算</h1>
      <h2 class="fontstyle-h2">
        <i class="el-icon-thumb"></i>
        <span @click="calculate">积分计算</span>
        <i class="el-icon-mobile"></i>
      </h2>
      <h2 class="fontstyle-h2">
        <i class="el-icon-thumb"></i>
        <span @click="explain">积分说明</span>
        <i class="el-icon-reading"></i>
      </h2>
    </div>
    <!-- 右边 -->
    <div class="right">
      <h1>北京个人新能源计算</h1>
      <h2 class="fontstyle-h2">
        <i class="el-icon-thumb"  @click="calculate"></i>
          积分计算
        <i class="el-icon-mobile"></i>
      </h2>
      <h2 class="fontstyle-h2">
        <i class="el-icon-thumb" @click="explain"></i>
          积分说明
        <i class="el-icon-reading"></i>
      </h2>
    </div>
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

  .left{
    // float: left;
    margin: 0 auto;
    margin-top: 20px;
    padding: 20px;
    width: 80%;
    // width: 49.9%;
    // background-color: rgb(109, 100, 100);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius:30px;
  }
  .right{
    // float: left;
    margin: 0 auto;
    margin-top: 20px;
    padding: 20px;
    width: 80%;
    // width: 49.9%;
    // background-color: rgb(153, 64, 64);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius:30px;
  }
  .fontstyle-h2{
    cursor: pointer;
    color: blue;
  }
}
</style>
