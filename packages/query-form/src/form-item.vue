<template>
    <a-form-item
        v-for="item in fields"
        :key="item.field"
        v-bind="item"
    >
        <component
            :is="item.component"
            v-bind="item.componentAttrs">
            <FormItemSub
                v-if="item.options"
                :parent-name="item.component"
                :options="item.options"
            />
        </component>
    </a-form-item>
</template>

<script setup lang="ts">
import FormItemSub from './FormItemSub.vue';
import type { BaseProps, FieldOptions } from './type';
import { FormItemInstance } from '@arco-design/web-vue/es/form';

type FormItemProps = Omit<FormItemInstance['$props'], keyof BaseProps>
interface Field extends FormItemProps {
    component?: any,
    componentAttrs?: any,
    options?: FieldOptions[]
}

defineProps<{
    fields: Array<Field>,
    formData: Record<string, any>,
}>();
</script>
