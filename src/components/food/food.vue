<template>
  <div class="food" v-show="showFlag" transition="fade">
    <div class="food-content">
      <div class="image-header">
        <img :src="food.image" alt="">
        <div class="back" @click="hideDetail">
          <div class="icon-arrow_lift"></div>
        </div>
      </div>
      <div class="content">
        <h1 class="title">{{food.name}}</h1>
        <div class="detail">
          <span class="sell-count">月售{{food.sellCount}}</span>
          <span class="rating">好评率{{food.rating}}</span>
        </div>
        <div class="price">
          <span class="now">￥{{food.price}}</span>
          <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      food: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: false
      };
    },
    methods: {
      show() {
        this.showFlag = true; // 父组件可以调用子组件的方法，但是子组件不能调用父组件的方法
      },
      hideDetail() {
        console.log(1);
        this.showFlag = false;
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .food
    position: fixed
    top: 0;
    left: 0
    bottom: 48px
    width: 100%
    height: 100%
    z-index: 30
    &.fade-transition
      transition: all 0.4s linear
      transform: translate3d(0, 0, 0)
      background: #ffffff
    &.fade-enter, &.fade-leave
      transform: translate3d(100%, 0, 0)
    .image-header
      width: 100%
      padding-top: 100%
      height: 0
      background: #000
      overflow: hidden
      position: relative
      img
        width: 100%
        height: 100%
        position: absolute
        left: 0
        top: 0
      .back
        position :absolute
        top: 10px
        left:0
        .icon-arrow_lift
          display: block
          padding: 10px
          font-size: 20px
          color: #ffffff
</style>
