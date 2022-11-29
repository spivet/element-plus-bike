import { isObject, mergeDeep } from './util';

let defaultConfig = {
  form: {},
  formField: {
    'el-date-picker': {
      valueFormat: 'x', // 日期选择器组件，时间格式默认用 timestamp 格式
    },
  },
  table: {},
};

export function setConfig(opt: any) {
  if (!isObject(opt)) return;
  defaultConfig = mergeDeep(defaultConfig, opt);
}

export function getConfig(key: keyof typeof defaultConfig) {
  return defaultConfig[key];
}

export function fixComponentName(name: String) {
  return `Dx${name}`
}
