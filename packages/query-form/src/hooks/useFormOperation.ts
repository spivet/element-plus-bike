import { ref } from 'vue';

export default function useFormOpetaion(props: any, emit: any, ctx: any) {
  const formOperation = ref(null);

  const handleSubmit = async () => {
    if (ctx.isSearchMode.value) {
      emit('submit', ctx.formData.value);
      return;
    }

    try {
      await ctx.searchForm.value.validate();
      emit('submit', ctx.formData.value);
    } catch (err) {
      props.onError(err);
    }
  };
  const handleReset = () => {
    ctx.searchForm.value.resetFields();
    emit('reset', ctx.formData.value);
  };

  return {
    formOperation,
    handleSubmit,
    handleReset,
  };
}
