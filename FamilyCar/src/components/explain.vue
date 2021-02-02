<template>
  <div class="explain">
    <el-container>
      <el-header>
        <h1>积分说明</h1>
      </el-header>
      <el-main class="mainStyle">
        <div class="partOne">
          <el-row>
            <el-col :span="24">
              <ul>
                <li class="float-l h3Style">积分构成:</li>
                <li class="float-l">基础分</li>
                <li class="float-l">倍数（权重系数、家庭代数）</li>
                <li class="float-l">阶梯或轮候积分</li>
              </ul>
            </el-col>
            <el-col :span="24">
              <ul>基础分
                <li>主申请人</li>
                <li>副申请人</li>
              </ul>
            </el-col>
            <el-col :span="24">
              <ul>倍数
                <li>权重系数</li>
                <li>家庭代数</li>
              </ul>
            </el-col>
            <el-col :span="24">
              <ul>阶梯或轮候积分
                <li>油车</li>
                <li>电车</li>
                <li>油转电</li>
              </ul>
            </el-col>
          </el-row>
          <!-- <ul class="h3Style">积分构成
            <li class="float-l h3Style">积分构成</li>
            <li class="float-2">基础分</li>
            <li class="float-2">倍数（权重系数、家庭代数）</li>
            <li class="float-2">阶梯或轮候积分</li>
          </ul> -->
        </div>
        <div>
          <h3>积分计算</h3>
        </div>
          <!-- <h3>积分构成</h3> -->
          <!-- <span>111</span> -->
          <!-- <el-row :gutter="20">
            <el-col :span="3"><h3>积分构成</h3></el-col>
            <el-col :span="3">基础分</el-col>
            <el-col :span="7">倍数（权重系数、家庭代数）</el-col>
            <el-col :span="5">阶梯或轮候积分</el-col>
          </el-row> -->
          <!-- <p>基础分</p>
          <p>倍数</p>
          <p>阶梯或轮候积分</p> -->
      </el-main>
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
  }
}
</script>

<style scoped lang='less'>
.explain{
  width: 80%;
  margin:0 auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius:30px;
  .mainStyle{
    width: 80%;
    // background-color: rgb(201, 95, 95);
    margin:0 auto;
    .partOne{
      .float-l{
        float: left;
        margin-left: 20px;
      }
      .float-r{
        float: right;
      }
    }
  }
  ul li {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  .h3Style{
    font-size: 20px;
    font-family: Times, serif;
    font-weight:bold;
  }
}
</style>
