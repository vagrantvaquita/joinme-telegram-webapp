<template>

    <div v-for="event in cards.events" class="card">
        <Card
        :event="event"
        />
    </div>
</template>

<script setup>
const cards = defineModel("cards")
</script>

<style scoped>
.card {
    margin: 20px;

}
</style>