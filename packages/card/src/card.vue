<template>
    <div class="dx-card">
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    name: 'DxCard',
}
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
