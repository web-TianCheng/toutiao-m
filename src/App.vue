<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted () {
    // this.$http({
    //   method: 'post',
    //   url: '/v1_0/authorizations',
    //   data: {
    //     mobile: '13911111111',
    //     code: '246810'
    //   }
    // }).then(result => {
    //   console.log(result)
    // })
  }
}
</script>
<style lang="less">
</style>
