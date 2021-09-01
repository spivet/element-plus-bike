### 基础表格

通过 `columns` 属性配置表格列，配置参考 [el-table-column attributes](https://element-plus.gitee.io/#/zh-CN/component/table#table-column-attributes)。

```vue demo
<template>
  <DmTable
    :columns="columns"
    :data="tableData"
  />
</template>

<script setup>
const statusMap = {
  0: '在职',
  1: '休假'
}
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
    formatter: (row) => {
      return statusMap[row.status]
    }
  },
];
const tableData = [
  {name: '张三', phone: '15328292918', address: '四川省成都市', job: '教师', status: 1},
  {name: '李四', phone: '15324122918', address: '北京市朝阳区', job: '医生', status: 0},
  {name: '王小二', phone: '15323532918', address: '四川省成都市', job: '司机', status: 1},
]
</script>
```

### loading 状态

```vue demo
<template>
  <DmTable
    :columns="columns"
    :loading="loading"
  />
</template>

<script setup>
const statusMap = {
  0: '在职',
  1: '休假'
}
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
    formatter: (row) => {
      return statusMap[row.status]
    }
  },
];
const loading = true
</script>
```

### 空数据状态

```vue demo
<template>
  <DmTable
    :columns="columns"
    :data="tableData"
  />
</template>

<script setup>
const statusMap = {
  0: '在职',
  1: '休假'
}
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
    formatter: (row) => {
      return statusMap[row.status]
    }
  },
];
const tableData = []
</script>
```

### 索引表格

想要添加索引列，只需给 `columns` 属性添加一项 `type` 值为 `index` 的列就行。

```vue demo
<template>
  <DmTable
    :columns="columns"
    :data="tableData"
  />
</template>

<script setup>
const statusMap = {
  0: '在职',
  1: '休假'
}
const columns = [
  {
    label: '序号',
    type: 'index',
  },
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
    formatter: (row) => {
      return statusMap[row.status]
    }
  },
];
const tableData = [
  {name: '张三', phone: '15328292918', address: '四川省成都市', job: '教师', status: 1},
  {name: '李四', phone: '15324122918', address: '北京市朝阳区', job: '医生', status: 0},
  {name: '王小二', phone: '15323532918', address: '四川省成都市', job: '司机', status: 1},
]
</script>
```

### 多选表格

添加选择列，只需给 `columns` 属性添加一项 `type` 值为 `selection` 的列就行。表格事件与 [el-table events](https://element-plus.gitee.io/#/zh-CN/component/table#table-events) 相同。

```vue demo
<template>
  <DmTable
    :columns="columns"
    :data="tableData"
    @selection-change="handleSelectionChange"
  />
</template>

<script setup>
const statusMap = {
  0: '在职',
  1: '休假'
}
const columns = [
  {
    type: 'selection',
  },
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
    formatter: (row) => {
      return statusMap[row.status]
    }
  },
];
const tableData = [
  {name: '张三', phone: '15328292918', address: '四川省成都市', job: '教师', status: 1},
  {name: '李四', phone: '15324122918', address: '北京市朝阳区', job: '医生', status: 0},
  {name: '王小二', phone: '15323532918', address: '四川省成都市', job: '司机', status: 1},
]

const handleSelectionChange = (val) => {
  console.log(val)
}
</script>
```

### 表格设置

除了通过 `columns` 配置每一列的属性外，`cc-table` 组件还可以直接接收与 `el-table` 组件相同的属性进行设置，属性参考 [el-table-column attributes](https://element-plus.gitee.io/#/zh-CN/component/table#table-column-attributes)。

```vue demo
<template>
  <DmTable
    :columns="columns"
    :data="tableData"
    stripe
    border
  />
</template>

<script setup>
const statusMap = {
  0: '在职',
  1: '休假'
}
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
    formatter: (row) => {
      return statusMap[row.status]
    }
  },
];
const tableData = [
  {name: '张三', phone: '15328292918', address: '四川省成都市', job: '教师', status: 1},
  {name: '李四', phone: '15324122918', address: '北京市朝阳区', job: '医生', status: 0},
  {name: '王小二', phone: '15323532918', address: '四川省成都市', job: '司机', status: 1},
  {name: '刘铁柱', phone: '15323124518', address: '上海市', job: '牙医', status: 0},
]
</script>
```

### 自定义表格列

```vue demo
<template>
  <DmTable
    :columns="columns"
    :data="tableData"
  >
    <template #status="{row}">
      <el-tag
        :type="row.status === '休假' ? 'danger' : 'success'"
        disable-transitions>
        {{row.status}}
      </el-tag>
    </template>
    <template #action>
      <el-button type="text">
        编辑
      </el-button>
    </template>
  </DmTable>
</template>

<script setup>
const statusMap = {
  0: '在职',
  1: '休假'
}
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
    formatter: (row) => {
      return statusMap[row.status]
    }
  },
  {
    label: '操作',
    prop: 'action'
  }
];
const tableData = [
  {name: '张三', phone: '15328292918', address: '四川省成都市', job: '教师', status: '在职'},
  {name: '李四', phone: '15324122918', address: '北京市朝阳区', job: '医生', status: '休假'},
  {name: '王小二', phone: '15323532918', address: '四川省成都市', job: '司机', status: '在职'},
  {name: '刘铁柱', phone: '15323124518', address: '上海市', job: '牙医', status: '休假'},
]
</script>
```

### 表格分页

通过 `pagination` 设置分页属性，支持 `v-model`。

```vue demo
<template>
  <DmTable
    v-model:pagination="pagination"
    :columns="columns"
    :data="tableData"
    stripe
    border
  />
</template>

<script setup>
import {ref} from 'vue';

const pagination = ref({
  total: 0,
  pageSize: 10,
  currentPage: 1,
});
const statusMap = {
  0: '在职',
  1: '休假'
}
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
    formatter: (row) => {
      return statusMap[row.status]
    }
  },
];
const tableData = [
  {name: '张三', phone: '15328292918', address: '四川省成都市', job: '教师', status: 1},
  {name: '李四', phone: '15324122918', address: '北京市朝阳区', job: '医生', status: 0},
  {name: '王小二', phone: '15323532918', address: '四川省成都市', job: '司机', status: 1},
  {name: '刘铁柱', phone: '15323124518', address: '上海市', job: '牙医', status: 0},
]
</script>
```

### Table Attributes

| 参数        | 说明         | 类型         | 可选值       | 默认值       |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| loading  | 表格加载状态      | Boolean     | --           | false       |
| columns  | 配置表格列，每一项所包含的属性与 [el-table-column attributes](https://element-plus.gitee.io/#/zh-CN/component/table#table-column-attributes) 相同       | Array | -- | -- |
| pagination  | 设置分页组件，配置与 [el-pagination attributes](https://element-plus.gitee.io/#/zh-CN/component/pagination#attributes) 相同。       | String/Number/Boolean | -- | -- |
| --       | `el-table` 的任意[属性](https://element-plus.gitee.io/#/zh-CN/component/table#table-attributes)       | -- | -- | -- |

### Table Slot

| name        | 说明         |
| ----------- | ----------- |
| --           | slot 的 `name` 值与 `columns` 字段的 `prop` 属性一一对应 |
