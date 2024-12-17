<template>
<div v-if="card" class="container h-screen flex items-center">
    <div class="text-center w-2/3 border border-gray-200 dark:border-gray-700 mx-auto p-5 h-[300px] rounded-md">
        <span class="text-red-500 font-bold text-2xl">id:{{ card.id }}</span>
    <h1 class="font-bold my-10 "><span class="text-emerald-500  font-bold text-xl me-1">title:</span>{{ card.title }}</h1>
    <p class=" text-gray-500"><span class="text-cyan-400 font-bold me-1">body:</span>{{ card.body }}</p>
    <NuxtLink to="/" class="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">GoToHomePage</NuxtLink>
    </div>
</div>
<div v-else>
    <p>not found page</p>
</div>
</template>
<script setup>
const route = useRoute()
const cardId=route.params.id
const {data:card,error}=await useFetch(()=>`https://jsonplaceholder.typicode.com/posts/${cardId}`)
definePageMeta({
    layout:false
})
</script>