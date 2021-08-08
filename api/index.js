const { api, delay, mock } = require("apite");
api.get("/list", async (ctx) => {
  await delay(1000);
  return mock({
    'total': 100,
    'list|10': [{
      'name': '@name',
      'phone|11': '1',
      'address': '@county(true)',
      'job': '@word(3)',
      'status|1': false,
    }]
  });
});