<template>
<div class="relative z-10 p-4">
    <div class="space-y-4">
        <div class="pointer-events-auto w-[21rem] rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 ring-1 ring-slate-700/10">
            <div class="flex justify-between">
                <div class="font-medium text-slate-900">{{ event.title }}</div>
                <div class="font-medium text-slate-900">{{ event.category }}</div>
            </div>
            
            <div class="mt-1 text-slate-700">{{ event.timestamp }}</div>
            <div class="mt-1 text-slate-700">{{ event.location }}</div>
            <div class="mt-1 text-slate-700">{{ event.description }}</div>

            <div class="mt-6 text-slate-900">
                <a href="/" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go to channel</a>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
const event = defineModel("event")
</script>