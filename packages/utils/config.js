let config = {
  form: {},
  formField: {},
  table: {}
};

export function setConfig(opt) {
  config = {...config, ...opt};
}

export function getConfig(key) {
  return config[key];
}
