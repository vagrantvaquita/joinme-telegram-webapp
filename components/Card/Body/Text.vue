<template>
    <div class="mt-2">
        <div class="label">{{ label }}</div>
        <div class="text-slate-700">{{ text }}</div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    "label": String,
    "text": String
})
</script>