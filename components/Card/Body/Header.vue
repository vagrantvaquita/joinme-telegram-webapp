<template>
    <div class="flex justify-between">
        <div class="font-bold text-lg text-slate-900 my-auto">
            {{ title }}
        </div>
        <div class="tag my-auto" >
            {{ category }}
        </div>
    </div>
</template>

<script setup>
defineProps(['title', 'category'])
</script>

<style scoped>
.tag {
    @apply font-light text-xs;
    @apply bg-blue-50;
    @apply rounded-md px-2 py-1;
}

</style>