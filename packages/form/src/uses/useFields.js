import {watchEffect, ref} from 'vue';
import { DifferentSizeData } from '../constant';

export default function useFields(isCollapase, fields) {
  // 获取每一行表单字段的数量
  const getPerLineFieldQuantity = () => {
    const documentScrollWidth = document.documentElement.scrollWidth;
    const size = Object.values(DifferentSizeData).find((item) => documentScrollWidth >= item.width);
    return size.quantity;
  };
  // 展开/收起时，实际展示的表单字段
  let actualFields = ref([]);
  watchEffect(() => {
    // if(isSearchMode.value && formOperation.value?.isCollapse) {
    if(isCollapase) {
      const quantity = getPerLineFieldQuantity();
      actualFields.value = fields.slice(0, quantity - 1);
    } else {
      actualFields.value = fields;
    }
  }, {flush: 'post'});

  return {
    actualFields
  };
}