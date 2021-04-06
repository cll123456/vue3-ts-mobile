<template>
  <div class="header-container">
    <div v-if="showBtn" class="icon-container" @click="goLastPage">
      <van-icon name="arrow-left" />
    </div>
    <span>{{ title }}</span>
  </div>
</template>

<script lang='ts'>
import { useRouter } from "vue-router";
export default {
  props: {
    // 头部标题
    title: String,
    // 是否显示返回按钮
    showBtn: Boolean,
  },
  setup() {
    const router = useRouter();
    /**
     * 返回上一页
     */
    const goLastPage = () => {
      console.log(3232);
      
      router.go(-1);
    };
    return {
      goLastPage,
    };
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  height: 60px;
  background: linear-gradient(45deg, #fc9681, #409EFF);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #fff;
  position: relative;

  .icon-container {
    position: absolute;
    height: 100%;
    left: 10px;
    font-size: 20px;
    display: flex;
    align-items: center;

    &:hover,
    &:focus,
    &:active {
      color: mix(#fff, #000, 80);
    }
  }
}
</style>