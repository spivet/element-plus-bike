<template>
  <div>
    <template v-if="parentName === 'el-select'">
      <el-option
        v-for="option in options"
        :key="option.value"
        v-bind="option"
        :label="option.label"
        :value="option.value"
      />
    </template>

    <template v-if="parentName === 'el-checkbox-group'">
      <el-checkbox
        v-for="option in options"
        :key="option.value"
        v-bind="option"
        :label="option.value"
      >
        {{ option.label }}
      </el-checkbox>
    </template>

    <template v-if="parentName === 'el-radio-group'">
      <el-radio
        v-for="option in options"
        :key="option.value"
        v-bind="option"
        :label="option.value"
      >
        {{ option.label }}
      </el-radio>
    </template>
  </div>
</template>

<script setup>
defineProps({
  options: {
    type: Array,
    default: () => []
  },
  parentName: {
    type: String,
    default: ''
  }
});
</script>
