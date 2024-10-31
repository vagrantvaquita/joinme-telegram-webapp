<template>
    <div>
        <Background class="h-dvh w-dvw fixed z-0"/>
        <div class="h-dvh w-dvw relative z-10">
            <CardsEmpty v-if="!data?.length" />
            <Cards :events="data"/>
        </div>
    </div>
</template>

<script setup>

import { onMounted } from "vue";

const { data } = await useFetch('/api/events')

onMounted(() => {
    window.Telegram.WebApp.expand();
})

</script>
