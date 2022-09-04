<template>
  <div id="app">
    <div>123</div>
    <i class="toutiao icon-toutiaodianzan"></i>
    <van-cell-group>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$http({
      method: 'post',
      url: '/v1_0/authorizations',
      data: {
        mobile: '13911111111',
        code: '246810'
      }
    }).then(result => {
      console.log(result)
    })
  }
}
</script>
<style lang="less">
</style>
