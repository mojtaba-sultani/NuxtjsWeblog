<template>
    <div v-if="comment" class="container h-screen flex items-center">
        <div class="text-center w-2/3 border border-gray-200 dark:border-gray-700 mx-auto p-5 h-[300px] rounded-md">
            <span class="text-red-500 font-bold text-2xl">id:{{ comment.id }}</span>
        <h1 class="font-bold my-10 "><span class="text-emerald-500  font-bold text-xl me-1">name:</span>{{ comment.name }}</h1>
        <p class=" text-gray-500"><span class="text-cyan-400 font-bold me-1">email:</span>{{ comment.email }}</p>
        <NuxtLink to="/" class="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">GoToHomePage</NuxtLink>
        </div>
    </div>
    <div v-else>
        <p>not found page</p>
    </div>
    </template>
    <script setup>
    const route = useRoute()
    const commentId=route.params.id
    const {data:comment,error}=await useFetch(()=>`https://jsonplaceholder.typicode.com/comments/${commentId}`)
    definePageMeta({
        layout:false
    })
    </script>