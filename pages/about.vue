<template>
    <div class="mt-20 md:mt-32 lg:mt-32 mx-auto w-[94%] lg:w-[78%]">
        <h1 class="text-6xl text-violet-500 font-bold">About</h1>
        <p class="my-5">
            About me and this site, you can find the contact information here.
        </p>
        <!----------------------------------- tab whoami ------------------------>
        <div>
            <div class="flex items-end font-bold text-3xl gap-2">
                <button @click="tabScroll('data-1')" class="relative group">
                    <span
                        class="absolute -left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">#</span>
                    <span>whoami</span>
                    <span
                        class="absolute w-full h-1 bottom-0 end-0 bg-transparent group-hover:bg-white transition-colors duration-300"></span>
                </button>
            </div>
            <div class="mt-5 scroll-mt-32" id="data-1">
                <p class="text-justify leading-8">
                    Hello! I'm Violet. I'm a recent graduate in computer science. A Java
                    programmer based in Xi'an. I have a passion for exploring everything
                    interesting, ranging from peculiar gadgets like charger,NAS and
                    routers. Additionally, I find great joy in delving into the world of
                    frontend development. Currently residing and working in Xi'an, I
                    document my professional and learning journey through work and study
                    notes, which you can find on this website. Feel free to reach out and
                    connect!
                </p>
            </div>
        </div>
        <!----------------------------------- tab whoami ------------------------>
        <!------------------------------------- tab whatido ---------------------->
        <div>
            <div class="flex items-end font-bold text-3xl gap-2 mt-14">
                <button @click="tabScroll('data-2')" class="relative group">
                    <span
                        class="absolute -left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">#</span>
                    <span>whatido</span>
                    <span
                        class="absolute w-full h-1 bottom-0 end-0 bg-transparent group-hover:bg-white transition-colors duration-300"></span>
                </button>
            </div>
            <div class="mt-5 scroll-mt-32" id="data-2">
                <p>
                    As you can see, I am a programmer, I developing interesting things.
                </p>
            </div>
        </div>
        <!------------------------------------- tab whatido ---------------------->
        <!-------------------------- tab Tech Stack ------------------------------->
        <div>
            <div class="flex items-end font-bold text-3xl gap-2 mt-14">
                <button @click="tabScroll('data-3')" class="relative group">
                    <span
                        class="absolute -left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">#</span>
                    <span>Tech Stack</span>
                    <span
                        class="absolute w-full h-1 bottom-0 end-0 bg-transparent group-hover:bg-white transition-colors duration-300"></span>
                </button>
            </div>
            <div class="mt-5 scroll-mt-32" id="data-3">
                <ul class="list-disc">
                    <li class="mb-3">Language: Java、JavaScript、TypeScript</li>
                    <li class="mb-3">Framework: Spring & SpringCloud、Vue、Nuxt</li>
                    <li class="mb-3">Databases: MySQL、PostgreSQL、MongoDB</li>
                    <li class="mb-3">
                        Middleware: Redis、Elasticsearch、Zookeeper、Kafka、RabbitMQ、Nginx
                    </li>
                    <li class="mb-3">Ops: Docker、Centos、Ubuntu</li>
                </ul>
            </div>
        </div>
        <!-------------------------- tab Tech Stack ------------------------------->
        <div class="my-10">
            <div class="flex items-end font-bold text-3xl gap-2 mt-14">
                <button @click="tabScroll('data-4')" class="relative group">
                    <span
                        class="absolute -left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">#</span>
                    <span>Contact</span>
                    <span
                        class="absolute w-full h-1 bottom-0 end-0 bg-transparent group-hover:bg-white transition-colors duration-300"></span>
                </button>
            </div>
            <div class="mt-5 scroll-mt-32 text-violet-400" id="data-4">
                <ul class="list-disc">
                    <li class="mb-3">
                        <!-- دکمه با Tooltip -->
                        <div class="relative group">
                            <!-- دکمه -->
                            <button class="relative">
                                instagram
                                <span
                                class="absolute w-full h-0.5 bottom-0 end-0 bg-transparent group-hover:bg-violet-400 transition-colors duration-300"></span>
                            </button>

                            <!-- Tooltip -->
                            <div
                                class="absolute bottom-full hidden w-max px-3 py-2 text-sm text-white bg-black border border-gray-700 rounded shadow-lg group-hover:block group-focus-within:block">
                                <NuxtLink to="/" class="text-violet-400  hover:text-violet-500">
                                    Click this link 1
                                </NuxtLink>
                            </div>
                        </div>
                    </li>
                    <li class="mb-3">
                        <!-- دکمه با Tooltip -->
                        <div class="relative group">
                            <!-- دکمه -->
                            <button class="relative">
                                github
                                <span
                                class="absolute w-full h-0.5 bottom-0 end-0 bg-transparent group-hover:bg-violet-400 transition-colors duration-300"></span>
                            </button>

                            <!-- Tooltip -->
                            <div
                                class="absolute bottom-full hidden w-max px-3 py-2 text-sm text-white bg-black border border-gray-700 rounded shadow-lg group-hover:block group-focus-within:block">
                                <NuxtLink to="/" class="text-violet-400  hover:text-violet-500">
                                    Click this link 2
                                </NuxtLink>
                            </div>
                        </div>
                    </li>
                    <li class="mb-3">
                        <!-- دکمه با Tooltip -->
                        <div class="relative group">
                            <!-- دکمه -->
                            <button class="relative">
                                telegram
                                <span
                                class="absolute w-full h-0.5 bottom-0 end-0 bg-transparent group-hover:bg-violet-400 transition-colors duration-300"></span>
                            </button>

                            <!-- Tooltip -->
                            <div
                                class="absolute bottom-full hidden w-max px-3 py-2 text-sm text-white bg-black border border-gray-700 rounded shadow-lg group-hover:block group-focus-within:block">
                                <NuxtLink to="/" class="text-violet-400  hover:text-violet-500">
                                    Click this link 3
                                </NuxtLink>
                            </div>
                        </div>
                    </li>
                    <li class="mb-3">
                        <!-- دکمه با Tooltip -->
                        <div class="relative group">
                            <!-- دکمه -->
                            <button class="relative">
                                linkdin
                                <span
                                class="absolute w-full h-0.5 bottom-0 end-0 bg-transparent group-hover:bg-violet-400 transition-colors duration-300"></span>
                            </button>

                            <!-- Tooltip -->
                            <div
                                class="absolute bottom-full hidden w-max px-3 py-2 text-sm text-white bg-black border border-gray-700 rounded shadow-lg group-hover:block group-focus-within:block">
                                <NuxtLink to="/" class="text-violet-400  hover:text-violet-500">
                                    Click this link 4
                                </NuxtLink>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col gap-5">
        <h2 class="text-3xl font-bold">site</h2>
        <p>Code open source at Github</p>
        <NuxtLink to="/" class="hover:outline-violet-500 hover:outline transition-all duration-75 flex w-2/5 border border-gray-700 rounded-md p-3">
            <NuxtImg src="/images/images-5.svg" class="w-28 h-28 rounded"></NuxtImg>
            <div class="flex flex-col ms-5">
                <span class="font-medium my-1 text-xl">lnbiuc/blog-next-view</span>
                <span class="text-sm">Nuxt full-stack blog.</span>
            </div>
        </NuxtLink>
        </div>
        </div>
</template>
<script setup>
function tabScroll(targetId) {
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
    }
}
</script>
