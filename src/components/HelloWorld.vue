<template>
  
  <van-cell-group>
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
  </van-cell-group>
   <van-cell-group>
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
  </van-cell-group>
   <van-cell-group>
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
  </van-cell-group>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    const value = ref('');
    return { count,value };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
p {
  font-size: 50px;
}
</style>
