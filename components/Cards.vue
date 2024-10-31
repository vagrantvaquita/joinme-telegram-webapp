<template>
    <div class="flex flex-col space-y-5 py-5">
        <div v-for="event in events" class="px-5">
        <CardBody :event="event"/>
    </div>
    </div>

</template>

<script setup>
defineProps(['events'])

function pairwise(arr) {
    return arr.slice(1).map((k, i) => [arr[i], k])
}
</script>
