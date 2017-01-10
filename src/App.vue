<template>
  <div>
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <a v-link="{path:'/goods'}" href="">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/ratings'}" href="">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/seller'}" href="">商家</a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  // 引入组件 header 来自header.vue 文件
  import header from './components/header/header.vue';
  export default {
    components: {
      // 注册header组件
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      .tab-item
        flex: 1
        text-align: center
</style>
