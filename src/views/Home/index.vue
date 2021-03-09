<template>
  <layout-header :title="'工作台'" showBtn />
  <div class="index-body-container">
    <van-grid :column-num="3">
      <van-grid-item icon="photo-o" text="采购" />
      <van-grid-item icon="photo-o" text="退垫支" />
      <van-grid-item icon="photo-o" text="保险事项变更" />
      <van-grid-item icon="photo-o" text="保险事项变更" />
    </van-grid>
  </div>
  <layout-footer />
</template>

<script lang="ts">
import LayoutHeader from "@/Layout/LayoutHeader/index.vue";
import LayoutFooter from "@/Layout/LayoutFooter/index.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {
    LayoutHeader,
    LayoutFooter,
  },
});
</script>

<style lang="scss" scoped>
.index-body-container {
  background: #e8e8ed;
  :deep() .van-grid-item__content:focus {
    background-color: #ccc;
  }
}
</style>