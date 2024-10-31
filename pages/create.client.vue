<template>
    <div class="h-dvh w-dvw z-10 relative">
        <form class="max-w-full mx-auto p-3">

            <div class="mb-6">
                <label for="category" class="text-label">Category *</label>
                <select id="category" v-model="form.category" class="text-box">
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
                <label for="location" class="text-label">Name your event *</label>
                <input id="location" type="text" placeholder="Name" v-model="form.title" class="text-box" required />
            </div> 

            <div class="mb-6">
                <label for="url" class="text-label">Create and put a Telegram group chat link *</label>
                <input
                    id="url"
                    type="url"
                    placeholder="Group link"
                    v-model="form.url"
                    class="text-box"
                    pattern="https://t.me/.*"
                    required
                />
            </div> 

            <div class="mb-6">
                <label for="description" class="text-label">Let people know more details *</label>
                <input
                    id="description"
                    type="text"
                    placeholder="Description"
                    v-model="form.description"
                    class="text-box"
                    required
                />
            </div> 

            <div class="grid gap-1 mb-6 grid-cols-2">
                <div>
                    <label for="date" class="text-label">Choose a date *</label>
                    <input id="date" type="date" v-model="form.date" class="text-box" required />
                </div> 

                <div>
                    <label for="time" class="text-label">Choose a time *</label>
                    <input id="time" type="time" v-model="form.time" class="text-box" required />
                </div> 
            </div>

            <div class="mb-6">
                <label for="location" class="text-label">Where is it happening? *</label>
                <input id="location" type="text" placeholder="Location" v-model="form.location" class="text-box" required />
            </div> 

        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const checkedNames = ref<string[]>([])

const form = ref<{
    user_id?: string,
    category?: string,
    title?: string,
    url?: string,
    description?: string,
    date?: string,
    time?: string,
    location?: string
}>({})

const done = computed(() => {
    return Object.keys(form.value).length == 7
})

const url_not_ok = computed(() => {
    return !form.value?.url.startsWith("https://t.me/")
})

onMounted(() => {
    window.Telegram.WebApp.expand();

    window.Telegram.WebApp.MainButton.setParams({
        text: "Create Event",
        color: "#ff186d",
        is_active: true,
        is_visible: true,
    });

    window.Telegram.WebApp.onEvent("mainButtonClicked", () => {
        window.Telegram.WebApp.showConfirm(
            "Are you sure you want to create this event?",
            (ok) => {
                if (ok && url_not_ok.value) {
                    window.Telegram.WebApp.showAlert("URL Should be proper telegram link")
                }
                if (ok && done.value && !url_not_ok.value) {
                    const user_id = window.Telegram.WebApp.initDataUnsafe.user.id
                    const { data } = useFetch(`/api/create/${user_id}`, {
                        query: form.value
                    })
                    window.Telegram.WebApp.close();
                } else {
                    window.Telegram.WebApp.showAlert("Complete All fields before creating!")
                }
            }
        )
    });
})

</script>

<style scoped>
.text-box {
    @apply w-full;
    @apply block p-2.5;
    @apply bg-white;
    @apply rounded-lg border border-gray-300;
    @apply text-gray-900 text-base;
    @apply focus:ring-red-500 focus:border-red-500;
    @apply active:ring-red-500 active:border-red-500;
    @apply hover:ring-red-500 hover:border-red-500;
}

.text-label {
    @apply block mb-2;
    @apply text-sm font-semibold text-gray-900;
}
</style>
