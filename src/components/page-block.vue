<template>
  <div class="page-block-root">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PageBlock',
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.page-block-root {
  padding: 16px 24px;
  margin-bottom: 16px;
  background-color: #fff;
  box-shadow: 0 2px 7px 0 rgba(0, 25, 55, 0.1);
  border-radius: 10px;

  &::-webkit-scrollbar {
    display: none;
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover::-webkit-scrollbar {
    display: block;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #999;
  }
}
</style>
