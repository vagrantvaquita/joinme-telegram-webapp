<template>
    <div>
        <p>Message is: {{ message }}</p>
        <input v-model="message"  placeholder="Title">
        <input placeholder="Description">
        <input placeholder="URL">
        <input type="date" min="2024-08-01">
        <input type="time">
    </div>
</template>

<script setup>

import { ref, onMounted } from "vue";

const message = defineModel({default: ""});

onMounted(() => {

    window.Telegram.WebApp.MainButton.setParams({
        text: "Create Event",
        is_active: true,
        is_visible: true,
    });

    window.Telegram.WebApp.onEvent("mainButtonClicked", () => {
        window.Telegram.WebApp.showConfirm(
            "Are you sure you want to create this event?",
            (continue) => {
                if (continue) {
                    window.Telegram.WebApp.sendData(JSON.stringify({message: message}));
                    window.Telegram.WebApp.close();
                }
            }
        )
    });
})

</script>