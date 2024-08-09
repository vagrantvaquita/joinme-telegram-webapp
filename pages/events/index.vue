<template>
    <Cards
    :cards="data"
    />
    <!-- <p v-for="event in data.events" class="textwh">
        {{ event }}
    </p> -->
</template>

<script setup>
const { data } = await useFetch('/api/events')
</script>

<style scoped>
.textwh {
    @apply text-white
}
</style>