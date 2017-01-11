<template>
  <div>
    <v-header v-bind:seller="seller"></v-header>
    <div class="tab border-1px">
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
  const ERR = 0;

  export default {
    data() {
      return {
        seller: {}
      };
    },
    created() { // 生命周期被创建的时候
      this.$http.get('/api/seller').then((response) => {    // vue-resourse的方法
        response = response.body; // reponse.body 就是数据本身
        if (response.errer === ERR) {
          this.seller = response.data; // 把数据的data赋值给上面函数data() {} 的seller
          console.log(this.seller);
        }
      });
    },
    components: {
      // 注册header组件
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl";
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgb(77, 85, 93))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          font-size: 14px
          color: rgb(77, 85, 93)
          &.active
            color: red
            font-weight: bold
</style>
