<template>
  <layout-header :title="'个人中心'" showBtn />
  <div class="list-container">
    <img src="./../../assets/mine.png" style="width: 100%" />
  </div>
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