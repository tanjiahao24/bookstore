<template>
  <div class="content">
    <div class="tosearch">
      <i class="iconfont icon-Magnifier"></i>
      <div class="tosearch-keyword">
        <input type="text" placeholder="顿感力" />
        <i class="iconfont icon-saomiao"></i>
      </div>
    </div>
    <div class="message">
      <i class="iconfont icon-xiaoxi"></i>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang="scss">
  .content {
    display: flex;
    align-items: center;
    margin: 0 0.18rem;
    width: 5.04rem;
    height: 0.85rem;
    .tosearch {
      display: flex;
      align-items: center;
      width: 4.32rem;
      height: 0.67rem;
      border-radius: 1rem;
      background-color: #f6f6f6;
      .icon-Magnifier {
        font-size: 0.32rem;
        margin: 0 0.2rem;
      }
      .tosearch-keyword {
        display: flex;
        align-items: center;
        width: 3.3rem;
        height: 0.63rem;
        input {
          background: none;
          outline: 0;
          border: none;
          font-size: .25rem;
          width: 2.6rem;
        }
        .icon-saomiao {
          font-size: .32rem;
          margin: 0 0.2rem;
        }

      }
    }
    .message {
      height: 0.85rem;
      line-height: 0.85rem;
      margin-left: .16rem;
      .icon-xiaoxi {
        font-size: 0.42rem;
      }
    }
  }
</style>