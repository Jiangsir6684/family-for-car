<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    // created () {
    //   this.stopF5Refresh()
    // }
  },
  mounted () {
    // created () {
    this.stopF5Refresh()
    // }
  },
  methods: {
    stopF5Refresh () {
      document.onkeydown = function (e) {
        var evt = window.event || e
        var code = evt.keyCode || evt.which
        // 屏蔽F1---F12
        if (code > 111 && code < 124) {
          if (evt.preventDefault) {
            evt.preventDefault()
          } else {
            evt.keyCode = 0
            evt.returnValue = false
          }
        }
      }
      // 禁止鼠标右键菜单
      document.oncontextmenu = function (e) {
        return false
      }
      // 阻止后退的所有动作，包括 键盘、鼠标手势等产生的后退动作。
      history.pushState(null, null, window.location.href)
      window.addEventListener('popstate', function () {
        history.pushState(null, null, window.location.href)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
