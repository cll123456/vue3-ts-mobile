<template>
  <van-tabbar route active-color="#fc9681" inactive-color="#ccc" safe-area-inset-bottom>
    <van-tabbar-item replace to="/" icon="wap-home-o">主页面</van-tabbar-item>
    <van-tabbar-item
      v-if="msgNum > 0"
      replace
      to="/mine"
      icon="manager-o"
      :badge="msgNum"
    >
      个人中心
    </van-tabbar-item>
    <van-tabbar-item v-else replace to="/mine" icon="manager-o">
      个人中心
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    msgNum: Number,
  },
});
</script>

<style>
</style>