<template>
    <form class="max-w-full mx-auto">

        <div class="mb-6">
            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select id="category" v-model="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected disabled value="">Choose a category</option>
                <option>⚽ Sports</option>
                <option>✈️ Travel</option>
                <option>🎤 Concerts</option>
                <option>🍛 Food/Drink</option>
                <option>🎥 Cinema/Theatre</option>
                <option>🎨 Art</option>
                <option>🏃 Health</option>
                <option>😜 Fun</option>
                <option>✨ Tech/Business</option>
                <option>Other</option>
            </select>
        </div>

        <div class="mb-6">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Let your friend's now the name of the event:</label>
            <input id="title" type="text" placeholder="Title" v-model="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div> 

        <div class="mb-6">
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Describe what the event is about:</label>
            <input id="description" type="text" placeholder="Description" v-model="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div> 

        <div class="mb-6">
            <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Where is going to happen?:</label>
            <input id="location" type="text" placeholder="Location" v-model="location" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div> 

        <div class="mb-6">
            <label for="dt" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">When your friends should be there?:</label>
            <input id="dt" type="datetime-local" v-model="datetime" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div> 

        <div class="mb-6">
            <label for="url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add a telegram group so people can join:</label>
            <input id="url" type="url" placeholder="URL" v-model="url" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div> 

    </form>
</template>

<script setup>

import { ref, onMounted } from "vue";

const category = ref("");
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
                        category: category.value,
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
/* form {
    padding: 0 25px 0 25px;
}

input, select {
    display: block;
    box-sizing: border-box;
    margin: 20px 0 20px 0;
    padding: 5px;
    width: 100%;
    font-size: 16px;
} */

input, select {
    font-size: 16px;
}
</style>