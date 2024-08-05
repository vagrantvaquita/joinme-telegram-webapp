<template>
    <div>
        <input v-model="title" placeholder="Title">
        <input v-model="description" placeholder="Description">

        <input v-model="url" placeholder="URL">
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
const title = ref("")
const description = ref("")
const url = ref("")


onMounted(() => {
    window.Telegram.WebApp.MainButton.setParams({
        text: "Create Event",
        is_active: true,
        is_visible: true,
    });
    window.Telegram.WebApp.onEvent("mainButtonClicked", () => {
        window.Telegram.WebApp.showConfirm(
            "Are you sure you wanna create this event?",
            (ok) => {
                if (ok) {
                    window.Telegram.WebApp.sendData(JSON.stringify({message: message}))
                    window.Telegram.WebApp.close()
                }
            }
        )
    });
})

</script>