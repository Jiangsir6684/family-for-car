<template>
  <div class="explain">
    <div class="message">积分计算</div>
    <!-- <div>家庭总积分 = ｛｝</div> -->
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog
      title="积分计算问答"
      :visible.sync="dialogVisible"
      width="60%"
      hight="30%"
      :before-close="handleClose">
      <!-- <span>主申请人是否参见过小客车（油车）摇号</span> -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
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
  font-size: 20px;
  .message{
  }
}
</style>
