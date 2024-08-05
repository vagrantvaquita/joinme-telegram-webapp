<template>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
</template>

<script setup>
import { ref, onMounted } from "vue"
const message = ref("")

onMounted(() => {
    console.log(window.Telegram.WebApp);
    window.Telegram.WebApp.MainButton.setParams({
        text: "Create Event",
        is_active: true,
        is_visible: true,
    });
    window.Telegram.WebApp.onEvent("mainButtonClicked", () => {
        window.Telegram.WebApp.sendData(JSON.stringify({"message": message}))
        window.Telegram.WebApp.close()
    });
})

</script>