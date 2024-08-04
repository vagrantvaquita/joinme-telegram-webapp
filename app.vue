<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
import { onMounted } from "vue"

onMounted(() => {
  console.log("Vue has been mounted!")
})

</script>