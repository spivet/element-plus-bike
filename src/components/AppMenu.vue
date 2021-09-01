<template>
  <el-menu
    :default-active="activeRoute"
    class="el-menu-vertical-demo"
    :router="true"
  >
    <el-menu-item-group>
      <template #title>
        数据
      </template>
      <el-menu-item index="/form">
        表单
      </el-menu-item>
      <el-menu-item index="/table">
        表格
      </el-menu-item>
    </el-menu-item-group>

    <el-menu-item-group>
      <template #title>
        Uses
      </template>
      <el-menu-item index="/useCrud">
        useCrud
      </el-menu-item>
    </el-menu-item-group>
  </el-menu>
</template>

<script setup>
import {ref, watch} from 'vue';
import {useRoute} from 'vue-router';

const activeRoute = ref('');
const route = useRoute();
watch(route, (val) => {
  activeRoute.value = val.path;
});
</script>

<style scoped>
.el-menu {
    border: 0
}
.el-menu-item {
    height: 40px;
    line-height: 40px;
}
</style>
