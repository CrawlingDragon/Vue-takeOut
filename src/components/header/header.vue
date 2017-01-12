<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="" width="62" height="62">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports" @click="showDetail">
        <div class="count">{{seller.supports.length}}个</div>
        <div class="icon-keyboard_arrow_right"></div>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bullentin-title"></span><span class="bullentin-text">{{seller.bulletin}}</span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <div class="detail" v-show="detailShow">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="title">
            <div class="line border-1px"></div>
            <div class="text">商家公告</div>
            <div class="line border-1px"></div>
          </div>
        </div>
      </div>
      <div class="detail-close">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from 'components/star/star';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: false
      };
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'speacial', 'invoice', 'guarantee'];
    },
    components: {
      star
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";
  .header
    color: #ffffff
    background: rgba(7, 17, 27, 0.5)
    position: relative
    overflow: hidden
    .content-wrapper
      position: relative
      padding: 24px 12px 18px 24px
      font-size: 0
      .avatar
        display: inline-block
        vertical-align: top
      .content
        display: inline-block
        margin-left: 16px
        font-size: 14px
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            width: 30px
            height: 18px
            bg-image('brand')
            background-size: 100%
            background-repeat: no-repeat
            vertical-align: top
          .name
            margin-left: 6px
            font-size: 16px
            line-height: 18px
            font-weight: bold
        .description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px
        .support
          .icon
            display: inline-block
            width: 12px
            height: 12px;
            margin-right: 4px
            background-size: 12px 12px
            background-repeat: no-repeat
            vertical-align: middle
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            font-size: 10px
            line-height: 12px
      .support-count
        font-size: 0
        position: absolute
        right: 12px
        bottom: 14px
        padding: 0 8px
        height: 24px
        line-height: 24px
        border-radius: 14px
        background: rgba(0, 0, 0, 0.2)
        text-align: center
        .count
          font-size: 10px
          display: inline-block
          line-height: 24px
        .icon-keyboard_arrow_right
          margin-left: 2px
          line-height: 24px
          font-size: 10px
          display: inline-block
    .bulletin-wrapper
      height: 28px
      line-height: 28px
      padding: 0 22px 0 12px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      position: relative
      background-color: rgba(7, 17, 27, 0.2)
      .bullentin-title
        display: inline-block
        width: 22px
        height: 12px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
        vertical-align: top
        margin-top: 8px
      .bullentin-text
        margin: 0 4px
        font-size: 10px
        vertical-align: top
      .icon-keyboard_arrow_right
        font-size: 10px
        position: absolute
        right 3px
        top: 10px
    .background
      position: absolute
      width: 100%
      height: 100%
      left: 0
      top: 0
      filter: blur(10px)
      z-index: -1

    .detail
      position: fixed
      left: 0
      top: 0
      width: 100%
      height: 100%
      overflow: auto
      background: rgba(7, 17, 27, 0.8)
      z-index: 999
      .detail-wrapper
        min-height: 100%
        padding-top: 64px
        box-sizing: border-box
        width: 100%
        .detail-main
          padding-bottom: 64px
          .name
            line-height: 16px
            text-align: center
            font-size: 16px
            font-weight: 700
          .star-wrapper
            margin-top: 18px
            padding: 2px 0
            text-align: center
          .title
            display: flex
            width: 80%
            margin: 24px auto 20px auto
            .line
              flex: 1
              position: relative
              top: -6px
              border-bottom: solid 1px rgba(255, 255, 255, 0.2)
            .text
              padding: 0 14px
              line-height: 14px
              font-size: 14px
      .detail-close
        position: relative
        width: 32px
        height: 32px
        margin: -64px auto 0 auto
        font-size: 32px
        clear: both

</style>

