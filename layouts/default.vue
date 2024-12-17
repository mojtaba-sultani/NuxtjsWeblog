<template>
    <header>
        <div class="bg-white w-full py-2 fixed top-0 dark:bg-black">
            <!----------------------------------- Start layout Desktop------------------------------------>
            <div class=" sm:flex sm:justify-between items-center hidden  mt-1 ">
                <NuxtImg src="/images/site-favicon.ico" class="rounded-lg shadow h-10 w-10 aspect-1/1 ml-24"></NuxtImg>
                <div class="flex gap-5 border border-gray-100 dark:border-gray-800 px-5 py-2 rounded-2xl">
                    <ul class="flex gap-x-8">
                        <li>
                            <NuxtLink class="font-bold hover:text-violet-400" to="/">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="font-bold hover:text-violet-400" to="/blog">blog</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="font-bold hover:text-violet-400" to="">short</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="font-bold hover:text-violet-400" to="">about</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="font-bold hover:text-violet-400" to="">friend</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="flex me-28">
                    <button @click="toogleDarkMode" class="border border-gray-300 dark:border-gray-700 rounded-lg p-1">
                        <span v-if="theme">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>

                        </span>
                        <span v-else>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <!----------------------------------- End layout Desktop------------------------------------>
        </div>
        <!----------------------------------- Start layout Mobile------------------------------------>
        <div class="flex justify-between items-center sm:hidden py-3">
            <NuxtImg src="/images/site-favicon.ico" class="rounded-lg shadow h-10 w-10 aspect-1/1 ml-2"></NuxtImg>
            <div class="flex flex-col mr-5 text-end">
                <button @click="changeIconMenu" class=" flex justify-end">
                    <span v-if="menu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </span>
                    <span v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </span>
                </button>
                <div>
                    <ul class="fixed top-[10%] w-full h-screen hidden mt-3 gap-5 inset-0 bg-white dark:bg-black"
                        ref="showMenu">
                        <li class="mr-5">
                            <NuxtLink @click="toggleHiddenMenu" class="font-bold hover:text-violet-400" to="/">Home
                            </NuxtLink>
                        </li>
                        <li class="mr-5">
                            <NuxtLink @click="toggleHiddenMenu" class="font-bold hover:text-violet-400" to="/blog">blog
                            </NuxtLink>
                        </li>
                        <li class="mr-5">
                            <NuxtLink @click="toggleHiddenMenu" class="font-bold hover:text-violet-400" to="">short
                            </NuxtLink>
                        </li>
                        <li class="mr-5">
                            <NuxtLink @click="toggleHiddenMenu" class="font-bold hover:text-violet-400" to="">about
                            </NuxtLink>
                        </li>
                        <li class="mr-5">
                            <NuxtLink @click="toggleHiddenMenu" class="font-bold hover:text-violet-400" to="">friend
                            </NuxtLink>
                        </li>
                        <div class="flex justify-end mr-5">
                            <button @click="toogleDarkMode"
                                class="border border-gray-300 dark:border-gray-700 rounded-lg p-1 hover:bg-gray-50">
                                <span v-if="theme">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                    </svg>
                                </span>
                                <span v-else>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        <!----------------------------------- End layout Mobile------------------------------------>
    </header>
    <slot />
    <!-------------------------- Start Footer layout --------------------------------------------->
    <footer class="border-t border-gray-200 dark:border-gray-700 p-5 mt-64">
        <div class="container text-xs font-normal">
            <div class="grid grid-cols-2 justify-between lg:place-items-center">
                <div class="col-span-2 md:col-span-1 justify-center md:justify-start flex  gap-5">
                    <p class="gap-5 mb-0 text-gray-400">Total PV : <span class="text-violet-500"> 20879</span></p>
                    <p class="gap-5 mb-0 text-gray-400">UV : <span class="text-violet-500"> 4372</span></p>
                </div>
                <div class="col-span-2 md:col-span-1 justify-center flex md:justify-end whitespace-nowrap">
                    <p class="mb-0 text-gray-400">Copyright © 2024 陕ICP备2021015553号-2</p>
                </div>
            </div>
        </div>
    </footer>
    <!-------------------------- End Footer layout --------------------------------------------->
</template>
<script setup>
const hiddenMenu = ref(null);
const showMenu = ref(null);
const theme = ref(false);
const menu = ref(true);
const isDarkMode = ref(false);
onMounted(() => {
    if (process.client) {
        isDarkMode.value = document.documentElement.classList.contains('dark')
    }
})

// Toggle the dark mode
const toogleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    theme.value = !theme.value;
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}
function changeIconMenu() {
    menu.value = !menu.value;
    showMenu.value.classList.toggle('hidden')
    showMenu.value.classList.toggle('flex');
    showMenu.value.classList.toggle('flex-col');
}
function toggleHiddenMenu() {
    showMenu.value.classList.add("hidden");
    showMenu.value.classList ="fixed top-[10%] w-full h-screen hidden mt-3 gap-5 inset-0 bg-white dark:bg-black"
    menu.value = !menu.value;
}
</script>