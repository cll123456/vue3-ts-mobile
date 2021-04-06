<template>
  <layout-header :title="'主页面'" showBtn />
  <div class="index-body-container">
    <van-grid :column-num="3">
      <van-grid-item icon="photo-o" text="功能1" />
      <van-grid-item icon="photo-o" text="功能2" />
      <van-grid-item icon="photo-o" text="功能3" />
      <van-grid-item icon="photo-o" text="功能4" />
       <van-grid-item icon="photo-o" text="功能1" />
      <van-grid-item icon="photo-o" text="功能2" />
      <van-grid-item icon="photo-o" text="功能3" />
      <van-grid-item icon="photo-o" text="功能4" />
    </van-grid>
  </div>
  <layout-footer :msgNum="10"/>
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