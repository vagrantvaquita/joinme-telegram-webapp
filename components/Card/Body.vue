<template>
    <div class="flex flex-col justify-between leading-5 p-4 bg-white hover:bg-slate-50 rounded-lg shadow-xl shadow-black/5 ring-1 ring-slate-700/10 text-sm">
        <CardBodyHeader :title="event.title" :category="event.category"/>
        <CardBodyInfo :datetime="event.datetime" :location="event.location" :description="event.description"/>
        <CardBodyButton :url="event.url" text="Join Event Group"/>
    </div>
</template>

<script setup>
defineProps(['event'])
</script>

<style scoped>
.main {
    @apply flex flex-col justify-between;
    @apply h-1/2;
    @apply bg-white hover:bg-slate-50;
    @apply p-4;
    @apply rounded-lg;
    /* @apply text-sm */
}
</style>
