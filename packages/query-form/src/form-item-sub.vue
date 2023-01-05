<template>
    <template v-if="parentName === 'a-select'">
        <a-option
            v-for="option in options"
            :key="option.label"
            v-bind="option"
            :value="option.value"
        >
            {{option.label}}
        </a-option>
    </template>

    <template v-if="parentName === 'a-checkbox-group'">
        <a-checkbox
            v-for="option in options"
            :key="option.label"
            v-bind="option"
            :label="option.value"
        >
            {{ option.label }}
        </a-checkbox>
    </template>

    <template v-if="parentName === 'a-radio-group'">
        <a-radio
            v-for="option in options"
            :key="option.label"
            v-bind="option"
            :label="option.value"
        >
            {{ option.label }}
        </a-radio>
    </template>
</template>

<script lang="ts" setup>
import type { FieldOptions } from './type';

defineProps<{
    options: Array<FieldOptions>,
    parentName: string
}>();
</script>
