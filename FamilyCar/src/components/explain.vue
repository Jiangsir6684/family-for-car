<template>
  <div class="explain">
    <div class="message">积分说明</div>
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
  background-color: rgb(48, 21, 202);
  .message{
    background-color: rgb(230, 39, 188);
  }
}
</style>
