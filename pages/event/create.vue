<template>
    <form>
        <input type="text" v-model="title" placeholder="Title">
        <input type="text" v-model="description" placeholder="Description">
        <input type="text" v-model="location" placeholder="Location">
        <input type="datetime-local" v-model="datetime">
        <input type="url" v-model="url" placeholder="URL">
    </form>
</template>

<script setup>

import { ref, onMounted } from "vue";

const title = ref("");
const description = ref("");
const location = ref("");
const datetime = ref("");
const url = ref("");

onMounted(() => {
    window.Telegram.WebApp.expand();

    window.Telegram.WebApp.MainButton.setParams({
        text: "Create Event",
        is_active: true,
        is_visible: true,
    });

    window.Telegram.WebApp.onEvent("mainButtonClicked", () => {
        window.Telegram.WebApp.showConfirm(
            "Are you sure you want to create this event?",
            (ok) => {
                if (ok) {
                    window.Telegram.WebApp.sendData(JSON.stringify({
                        title: title.value,
                        description: description.value,
                        location: location.value,
                        datetime: datetime.value,
                        url: url.value
                    }));
                    window.Telegram.WebApp.close();
                }
            }
        )
    });
})

</script>

<style>
form {
    padding: 0 25px 0 25px;
}
input {
    display: block;
    box-sizing: border-box;
    margin: 20px 0 20px 0;
    padding: 5px;
    width: 100%;
    font-size: 16px;
}
</style>