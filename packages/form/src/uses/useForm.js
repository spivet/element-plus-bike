import {ref, watchEffect} from 'vue';
export default function useForm(props, emit) {
  const searchForm = ref('searchForm');
  const formData = ref({ ...props.modelValue });
  watchEffect(() => {
    emit('update:modelValue', formData.value);
  });

  return {
    searchForm,
    formData
  };
}