<template>
    <div v-if="user" class="container h-screen flex items-center">
        <div class="text-center md:w-2/3 border border-gray-200 dark:border-gray-700 mx-auto p-5 h-[400px] rounded-md">
            <h1 class="text-4xl mb-5 font-bold text-gray-400">Users</h1>
            <span class="text-red-500 font-bold text-2xl">id:{{ user.id }}</span>
            <h1 class="font-bold my-10 "><span class="text-emerald-500  font-bold text-xl me-1">name:</span>{{ user.name
                }}</h1>
            <p class=" text-gray-500"><span class="text-cyan-400 font-bold me-1">email:</span>{{ user.email }}</p>
            <NuxtLink to="/blog" class="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">GoToBlogPage</NuxtLink>
        </div>
    </div>
    <div v-else>
        <p>not found page</p>
    </div>
</template>
<script setup>
const route = useRoute()
const userId = route.params.id
const { data: user, error } = await useFetch(() => `https://jsonplaceholder.typicode.com/comments/${userId}`)
definePageMeta({
    layout: false
})
</script>