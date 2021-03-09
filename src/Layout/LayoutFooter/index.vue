<template>
  <van-tabbar route active-color="#ee0a24" inactive-color="#ccc" safe-area-inset-bottom>
    <van-tabbar-item replace to="/" icon="apps-o">首页</van-tabbar-item>
    <van-tabbar-item
      v-if="msgNum > 0"
      replace
      to="/taskList"
      icon="orders-o"
      :badge="msgNum"
    >
      任务
    </van-tabbar-item>
    <van-tabbar-item v-else replace to="/taskList" icon="orders-o">
      任务
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