<template>
    <div>
        <CardBodyText label="Date" :text="epochToDate(datetime)"/>
        <CardBodyText label="Location" :text="location"/>
        <CardBodyText label="Description" :text="description"/>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    "datetime": String,
    "location": String,
    "description": String
});

</script>

<script lang="ts">
function epochToDate(ds): string {
    const dt = new Date(ds)
    return `${dt.toDateString()} at ${dt.toLocaleTimeString()}`
}
</script>

<style>
.label {
    @apply font-semibold text-blue-900;
}
</style>