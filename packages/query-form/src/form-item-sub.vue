<template>
    <div>
        <template v-if="parentName === 'a-select'">
            <a-option
                v-for="option in options"
                :key="option.label"
                v-bind="option"
                :label="option.label"
                :value="option.value"
            />
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
    </div>
</template>

<script lang="ts" setup>
import type { FieldOptions } from './type';

defineProps<{
    options: Array<FieldOptions>,
    parentName: string
}>();
</script>
