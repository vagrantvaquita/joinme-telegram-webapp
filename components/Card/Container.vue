<template>
    <div class="flex flex-col h-dvh px-5 py-5 space-y-5">
        <CardBody v-for="event in eventpair" :event="event"/>
    </div>
</template>

<script setup>
defineProps(['eventpair'])
</script>