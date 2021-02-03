<template>
  <div class="explain">
    <!-- <div class="h3Style">积分计算</div>  -->
    <el-container>
      <el-header>
        <h1>积分计算</h1>
      </el-header>
      <el-main class="mainStyle">
        <el-col :span="24">
          <el-tag class="h3Style">主申请人</el-tag>
          <el-checkbox-group
            v-model="checkedCities"
            :min="1"
            :max="2">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-main>
    </el-container>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  data () {
    return {
      dialogVisible: false,
      // cityOptions: ['上海', '北京', '广州', '深圳'],
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      message: '家庭总积分= [(主申请人+配偶)*2+父+母+子+女]*3',
      nunber: '阶梯或基础轮候分 油转电 要 加油倍数  + 基础分'
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style scoped lang='less'>
.explain{
  width: 80%;
  margin:0 auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius:30px;
    .h3Style{
    font-size: 20px;
    font-family: Times, serif;
    font-weight:bold;
    margin-left: 0px;
  }
}
</style>
