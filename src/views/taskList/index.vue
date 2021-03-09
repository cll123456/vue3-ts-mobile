<template>
  <layout-header :title="'任务明细'" showBtn />
  <van-tabs
    v-model:active="active"
    animated
    swipeable
    sticky
    title-active-color="#f37b1d"
  >
    <van-tab title="待处理" :name="ENavTypes.willDeal"> 待处理 </van-tab>
    <van-tab title="已处理" :name="ENavTypes.didDeal"> 已处理 </van-tab>
  </van-tabs>
  <layout-footer :msgNum="10" />
</template>

<script lang="ts">
import LayoutHeader from "@/Layout/LayoutHeader/index.vue";
import LayoutFooter from "@/Layout/LayoutFooter/index.vue";
import { defineComponent, ref } from "vue";
import { ENavTypes } from "./../../types/taskListTypes";
export default defineComponent({
  name: "TaskList",
  components: {
    LayoutHeader,
    LayoutFooter,
  },
  setup() {
    const activeRef = ref(ENavTypes.willDeal);
    return {
      active: activeRef,
      ENavTypes, // 切换枚举值
    };
  },
});
</script>

<style lang="scss" scoped>
:deep() .van-tabs__line {
  width: 45%;
}
</style>