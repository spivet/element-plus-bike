## useCrud

封装了 CRUD 页面的常用逻辑。通过提取 `use` 的方式，在减少重复代码的基础上，也保留了灵活性.

### 使用

```javascript
import {useCrud} from 'demi';
// pagination 为分页组件参数
// fetchData 是用于获取数据列表的方法，该方法必须返回列表数据 tableData 以及数据总条数 total。
const {data, loading, onSubmit, onReset} = useCrud(pagination, fetchData);
```

### 示例

```vue demo
<template>
  <div class="table-list-root">
    <el-card style="margin-bottom: 20px">
      <BiForm
        v-model="searchForm"
        mode="search"
        :fields="fields"
        @submit="onSubmit"
        @reset="onReset"
      />
    </el-card>

    <el-card>
      <BiTable
        v-model:pagination="pagination"
        :loading="loading"
        :columns="columns"
        :data="data"
      >
        <template #action>
          <el-button type="text" @click="handleEdit">
            编辑
          </el-button>
        </template>
      </BiTable>
    </el-card>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import axios from 'axios';
import {useCrud} from './use-crud.js';

const addressList = ref([])
const fields = [
  {
    prop: 'name',
    label: '姓名',
    component: 'el-input',
    modifier: 'number',
    componentAttrs: {
      placeholder: '请输入姓名',
    },
  },
  {
    prop: 'address',
    label: '地址',
    component: 'el-select',
    componentAttrs: {
      placeholder: '请输入地址',
      filterable: true,
      remote: true,
      remoteMethod: fetchAddress
    },
    options: addressList
  },
  {
    prop: 'phone',
    label: '电话',
    component: 'el-input',
    props: {
      placeholder: '请输入电话',
    },
  },
  {
    prop: 'job',
    label: '职业',
    component: 'el-input',
    componentAttrs: {
      placeholder: '请输入职业',
    },
  },
  {
    prop: 'status',
    label: '状态',
    component: 'el-select',
    options: [
      {label: '开启', value: 0},
      {label: '关闭', value: 1}
    ]
  },
];
const columns = [
  {
    type: 'selection',
  },
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
  },
  {
    label: '操作',
    prop: 'action',
  },
];

const searchForm = ref({});
const pagination = ref({
  total: 0,
  pageSize: 10,
  currentPage: 1,
});

const editFields = [
  {
    prop: 'name',
    label: '系统名称',
    component: 'el-input',
    modifier: 'number',
    componentAttrs: {
      placeholder: '请输入系统名称',
    },
    formItemAttrs: {
      rules:[
        { required: true, message: '年龄不能为空'},
        { type: 'number', message: '年龄必须为数字值'}
      ]
    }
  },
  {
    prop: 'ip',
    label: '系统地址',
    component: 'el-input',
    props: {
      placeholder: '请输入系统名称',
    },
  },
  {
    prop: 'status',
    label: '状态',
    component: 'el-select',
    options: [
      {label: '开启', value: 0},
      {label: '关闭', value: 1}
    ]
  },
];

const fetchData = async (query, pagination) => {
  const res = await getList();
  const data = res.data;

  return {
    tableData: data.list,
    total: data.total
  };
};
const {data, loading, onSubmit, onReset} = useCrud(pagination, fetchData);

const editDialog = ref('editDialog');
const handleEdit = () => {
  editDialog.value.show({
    title: '编辑'
  });
};

function fetchAddress() {
  setTimeout(() => {
    addressList.value = [
      {label: '云南省 大理白族自治州 其它区', value: 920181},
      {label: '辽宁省 阜新市 清河门区', value: 324171},
      {label: '四川省 乐山市 五通桥区', value: 784627},
    ]
  })
}
function getList() {
  return axios.get('/api/list');
}
</script>
```


### 说明

`useCrud` 函数参数

| 参数        | 说明         | 类型         | 可选值       |
| ----------- | ----------- | ----------- | ----------- |
| fetchData  | 获取数据列表的方法，该方法必须返回列表数据 `tableData` 以及数据总条数 `total`   | Function     | --           |
| pagination  | 分页组件配置  | Object     | --           |

`useCrud` 函数返回值

| 返回值        | 说明         | 类型         | 可选值       |
| ----------- | ----------- | ----------- | ----------- |
| data  | 表格数据  |    Array     | --           |
| loading  | 表格加载状态   |   Boolean     | --           |
| onSubmit  | 当点击确认按钮触发   |   Function     | --           |
| onReset  | 当点击重置按钮触发   |   Function     | --           |
