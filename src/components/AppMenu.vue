<template>
  <el-menu
    default-active="form"
    class="el-menu-vertical-demo"
    :router="true"
  >
    <el-menu-item-group>
      <template #title>
        数据
      </template>
      <el-menu-item index="form">
        表单
      </el-menu-item>
      <el-menu-item index="table">
        表格
      </el-menu-item>
    </el-menu-item-group>
  </el-menu>
</template>


<style scoped>
.el-menu {
    border: 0
}
.el-menu-item {
    height: 40px;
    line-height: 40px;
}
</style>
