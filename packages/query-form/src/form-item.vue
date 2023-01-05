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

defineProps<{
    fields: Array<any>,
    formData: Record<string, any>,
}>();
</script>
