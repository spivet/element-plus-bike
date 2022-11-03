import { watchEffect, ref, Ref } from 'vue';
import { getConfig } from '../../../utils/config';
import { DifferentSizeData } from '../constant';

export default function useFields(props: any, isCollapase: Ref<boolean>) {
  // 获取每一行表单字段的数量
  const getPerLineFieldQuantity = () => {
    const documentScrollWidth = document.documentElement.scrollWidth;
    const size = Object.values(DifferentSizeData).find((item) => documentScrollWidth >= item.width);
    return size!.quantity;
  };
  // 展开/收起时，实际展示的表单字段
  let actualFields: any = ref([]);
  watchEffect(() => {
    if (isCollapase.value) {
      const quantity = getPerLineFieldQuantity();
      actualFields.value = props.fields.slice(0, quantity - 1);
    } else {
      actualFields.value = props.fields;
    }
  }, { flush: 'post' });

  const getFormFieldProps = (fieldName:any, props: any) => {
    const formFieldConfig: any = getConfig('formField');
    return { ...formFieldConfig[fieldName], ...props };
  };

  return {
    actualFields,
    getFormFieldProps,
  };
}
