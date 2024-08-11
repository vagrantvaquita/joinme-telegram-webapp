<template>
    <p>Hello World! this is index!</p>
    <p>{{  data.status  }} {{ data.pets[0].type }}</p>
    <p>{{ data.events }}</p>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const { data } = await useFetch('/api/events')
console.log(data)

</script>

<style scoped>
.textwh {
    @apply text-white
}
</style>