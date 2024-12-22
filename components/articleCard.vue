<template>
    <div>
        <div class="container w-full lg:w-[78%] xl:w-[67%] mt-32">
            <h3 class="font-semibold text-2xl text-violet-400">Featured Article</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <!--------------------- pending ------------------------------->
                <div v-if="pending" class="col-span-3 place-items-center">
                <div class="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-violet-500"></div>
                </div>
                <!--------------------------------------------------  Start Error data request  ----------------------->
                <div v-else-if="error" class="text-red-500 font-bold">
                    {{ error.message }}
                </div>
                <!------------------------------------   End Error data request  ------------------------------------------------------------>
                
                <!---------------------------- Dynamic Routes --------------------------------->
                <NuxtLink :to="`/posts/${post.id}`" v-else v-for="post in posts" :key="post.id"
                    class=" lg:col-span-1 border border-gray-200 dark:border-stone-700 hover:outline-purple-400  dark:hover:outline-purple-400 hover:outline hover:outline-4 transition-all duration-75 py-5 px-4 rounded-md mt-3">
                    <h4 class="font-bold text-red-500">id:{{ post.id }}</h4>
                    <h4 class="font-semibold text-justify"><span class="text-violet-500 font-bold">title:</span> {{
                        post.title }}</h4>
                    <p class="text-gray-500"><span class="text-blue-600 font-bold me-1 text-justify">body:</span>{{
                        post.body }}</p>
                </NuxtLink>
            </div>
            <div class="flex items-center justify-between whitespace-nowrap">
                <button
                    class=" py-2 px-3 border border-gray-200 dark:border-stone-700 rounded-md hover:outline-purple-400  dark:hover:outline-purple-400 hover:outline hover:outline-4 transition-all duration-75 mt-3">
                    <NuxtLink to="/blog" class="flex items-center font-bold">see More
                        <NuxtImg class="colored-svg ms-1" src="/images/arrow-left.svg" width="25" height="25"></NuxtImg>
                    </NuxtLink>
                </button>
                <div class="flex gap-x-2">
                    <button @click="Previous"
                        class=" ms-1 py-2 px-3 border border-gray-200 dark:border-stone-700 rounded-md  hover:outline-purple-400  dark:hover:outline-purple-400 hover:outline hover:outline-4 transition-all duration-75 mt-3">
                    <NuxtImg class="my-icon" src="/images/pagination-next.svg" width="20" height="20"></NuxtImg>
                </button>
                    <button @click="next"
                        class=" ms-1 py-2 px-3 border border-gray-200 dark:border-stone-700 rounded-md  hover:outline-purple-400  dark:hover:outline-purple-400 hover:outline hover:outline-4 transition-all duration-75 mt-3">
                        <NuxtImg class="my-icon" src="/images/pagination-prve.svg" width="20" height="20"></NuxtImg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const pagination = ref(0);
const { data: posts, error, refresh,pending } = await useFetch(() => `https://jsonplaceholder.typicode.com/posts?_start=${pagination.value}&_limit=6`);
function Previous() {
    pagination.value -= 5
    refresh()
}
function next() {
    pagination.value += 5
}
</script>