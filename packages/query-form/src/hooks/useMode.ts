import { computed } from 'vue';

const FormMode = {
  NORMAL: 'normal',
  SEARCH: 'search',
};

export default function useMode(mode: any) {
  const isSearchMode = computed(() => {
    return mode === FormMode.SEARCH;
  });
  const isNormalMode = computed(() => {
    return mode === FormMode.NORMAL;
  });

  return {
    FormMode,
    isSearchMode,
    isNormalMode,
  };
}
