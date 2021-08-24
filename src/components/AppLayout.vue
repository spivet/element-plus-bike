<template>
  <el-container class="container">
    <el-header class="header">
      <a href="/" class="logo">
        Demi
      </a>
    </el-header>
    <el-container class="content">
      <el-aside class="aside" width="200px">
        <AppMenu />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import AppMenu from './AppMenu.vue';
</script>

<style scoped>
.container {
    height: 100%;
}
.header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    box-shadow: 0 2px 8px #f0f1f2;
}
.logo {
    font-weight: 700;
    font-size: 18px;
    color: #1890ff;
    text-decoration: none;
}

.content {
    overflow: auto;
}
.aside {
    border-right: 1px solid rgb(230, 230, 230);
}
</style>