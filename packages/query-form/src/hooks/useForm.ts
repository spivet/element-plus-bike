import {
  ref, watchEffect, Ref,
} from 'vue';

import type { FormInstance } from '@arco-design/web-vue'

export default function useForm(props:any, emit:any) {
  const searchForm: Ref<null | FormInstance> = ref(null);
  const formData = ref({ ...props.modelValue });
  watchEffect(() => {
    emit('update:modelValue', formData.value);
  });

  return {
    searchForm,
    formData,
  };
}
