<template>
    <div>
        <a :href="url" class="join">
            <div class="mt-4 w-full text-center border bg-red-400 hover:bg-red-600  focus:ring-red-100 rounded-xl px-5 py-2.5">
                {{ text }}
            </div>
        </a>
    </div>
</template>

<script setup>
defineProps({
    "text": String,
    "url": String
})

</script>

<style>
.join {
    @apply text-white font-bold text-base;
    /* @apply bg-blue-600 hover:bg-blue-800  focus:ring-blue-300;
    @apply rounded-lg px-5 py-2.5; */
    @apply focus:ring-4 focus:outline-none;
}
</style>