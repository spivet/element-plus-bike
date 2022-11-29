<template>
    <div class="dx-card">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Card',
})
</script>

<style>
.dx-card {
    padding: 24px;
    background-color: #fff;
    border-radius: 4px;
}
.dx-card ~ .dx-card {
    margin-top: 16px;
}
</style>
