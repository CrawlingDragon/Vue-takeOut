<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" class="star-item" :class="itemClass" track-by="$index"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  const LENGTH = 5;
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';
  export default {
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {   // vue的计算属性
      starType() {  // 指定starType = 根据size形成不同的class，来区分48 36 24的尺寸
        return 'star-' + this.size;
      },
      itemClasses() {                                 // itemClass 在数组中循坏，也是每个星的class
        let result = [];
        let score = Math.floor(this.score * 2) / 2;  // 分数的向下取整到0.5
        let hasDecimal = score % 1 !== 0;           // 判断是否有余数，余数只会是0.5
        let integer = Math.floor(score);            // 向下取整，代表全星的个数
        for (let i = 0; i < integer; i++) {         // 循坏全星的个数，为数组添加itemClass
          result.push(CLS_ON);
        }
        if (hasDecimal) {                           // 如果有余数，就添加半星
          result.push(CLS_HALF);
        }
        while (result.length < LENGTH) {            // 如果添加完全星和半星之后，数组的长度还是小于总数，就把全无星添加到数组
          result.push(CLS_OFF);
        }
        return result;                              // 最后返回数组
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";
  .star
    font-size: 0
    .star-item
      display: inline-block
      background-repeat: no-repeat
      font-size: 12px
    &.star-48
      .star-item
        width: 20px
        height: 20px
        margin-right: 22px
        background-size: 20px 20px
        &.on
          bg-image('star48_on')
        &.half
          bg-image('star48_half')
        &.off
          bg-image('star48_off')
    &.star-36
      .star-item
        width: 15px
        height: 15px
        margin-right: 6px
        background-size: 15px 15px
        &.lst-child
          margin-right: 0
        &.on
          bg-image('star36_on')
        &.half
          bg-image('star36_half')
        &.off
          bg-image('star36_off')
    &.star-24
      .star-item
        width: 10px
        height: 10px
        margin-right: 3px
        background-size: 10px 10px
        &.on
          bg-image('star24_on')
        &.half
          bg-image('star24_half')
        &.off
          bg-image('star24_off')
</style>
