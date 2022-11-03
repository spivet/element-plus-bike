// 不同尺寸所对应的页面宽度和每行 ElFormItem 个数
export const DifferentSizeData = {
  xl: { width: 1200, quantity: 4, span: 6 }, // large
  lg: { width: 992, quantity: 3, span: 8 }, // middle
  md: { width: 768, quantity: 2, span: 12 }, // small
  sm: { width: 0, quantity: 1, span: 24 }, // less than small
};

export const FormInjectionKey = Symbol('dx-query-from');
