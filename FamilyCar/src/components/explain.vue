<template>
  <div class="explain">
    <el-container>
      <el-header>
        <h1>积分说明文档</h1>
      </el-header>
      <el-main class="mainStyle">
        <div class="partOne">
          <el-row>
            <el-col :span="24">
                <el-tag class="h3Style" type="warning">积分构成:</el-tag>
            </el-col>
            <el-col :span="24">
              <ul>
                <li><el-tag class="h3Style">基础分</el-tag></li>
                <li>主申请人:2分</li>
                <li>副申请人:1分</li>
              </ul>
            </el-col>
            <el-col :span="24">
              <ul>
                <li><el-tag class="h3Style">倍数</el-tag></li>
                <li>权重系数（即 成员与主申请人为夫妻关系的）：* 2</li>
                <li>家庭代数（即 参与家庭摇号为几代同堂，最多为3代，最低1代）：*1 ～ *3</li>
              </ul>
            </el-col>
            <el-col :span="24">
              <ul>
                <li><el-tag class="h3Style">阶梯或轮候积分</el-tag></li>
                <li>油车：摇号倍数（可在北京市小客车指标调控管理信息系统）中查询</li>
                <li>电车：根据申请编号查询编号到申请前一年的12.31日</li>
                <li>油转电：油车倍数+电车轮候分</li>
              </ul>
            </el-col>
          </el-row>
        </div>
        <div class="partTwo">
          <el-tag class="h3Style" type="warning">积分计算:</el-tag>
          <el-col :span="24">
            <ul>
              <li>家庭总积分=[(主申请人总积分+配偶总积分)*权重系数(1～2)+上代积分总和+下代积分总和*家庭代数(1～3)</li>
              <li>家庭总积分=</li>
              <li>家庭总积分=</li>
              <li>家庭总积分=</li>
            </ul>
          </el-col>
        </div>
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
    text-align:left;
  }
  .h3Style{
    font-size: 20px;
    font-family: Times, serif;
    font-weight:bold;
    margin-left: 0px;
  }
}
</style>
