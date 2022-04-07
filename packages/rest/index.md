### 表格操作栏

通过 `limit` 可以控制默认展示的元素个数，`String` 或者 `Number` 类型均可。

```vue demo
<template>
  <PlTable
    :columns="columns"
    :data="tableData"
    :showTableSetting="true"
    @columnsChange="handleColumnsChange"
  >
    <template #action>
        <pl-rest limit="2">
          <el-button v-if="false">
            无权限
          </el-button>
          <el-button type="text">
            编辑
          </el-button>
          <el-button v-if="true" type="text">
            查看
          </el-button>
          <el-button type="text">
            转派
          </el-button>
          <el-button type="text">
            删除
          </el-button>
        </pl-rest>
    </template>
  </PlTable>
</template>

<script setup>
const columns = [
  {
    label: '姓名',
    prop: 'name',
  },
  {
    label: '电话',
    prop: 'phone',
  },
  {
    label: '地址',
    prop: 'address',
  },
  {
    label: '职业',
    prop: 'job',
  },
  {
    label: '状态',
    prop: 'status',
  },
  {
    label: '操作',
    prop: 'action',
  },
];
const tableData = [
  {
    name: '张三',
    phone: '',
    address: '四川省成都市',
    job: '教师',
    status: '在职',
  },
  {
    name: '李四',
    phone: '15324122918',
    address: '北京市朝阳区',
    job: '医生',
    status: '休假',
  },
  {
    name: '王小二',
    phone: '15323532918',
    address: '四川省成都市',
    job: '司机',
    status: '在职',
  },
  {
    name: '刘铁柱',
    phone: '15323124518',
    address: '上海市',
    job: '医生',
    status: '休假',
  },
];
const handleColumnsChange = (columnsProp) => {
  console.log(columnsProp)
}
</script>
```

### Table-Action Attributes

| 参数        | 说明         | 类型      | 可选值  | 默认值  |
| ---------- | ------------ | -------- | ------ | ------ |
| limit    | 默认展示的元素个数   | String/Number               | --     | 3  |


