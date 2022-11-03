import {
  ref, watchEffect, Ref, DefineComponent,
} from 'vue';

type ComponentInstance = InstanceType<DefineComponent>
export default function useForm(props:any, emit:any) {
  const searchForm: Ref<null | ComponentInstance> = ref(null);
  const formData = ref({ ...props.modelValue });
  watchEffect(() => {
    emit('update:modelValue', formData.value);
  });

  return {
    searchForm,
    formData,
  };
}
