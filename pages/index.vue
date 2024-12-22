<template>
   <div>
      <div
         class="mt-20 md:mt-32 lg:mt-44 xl:mt-40 mx-auto w-[94%] lg:w-[78%] xl:w-[63%] border border-gray-300 dark:border-stone-700 rounded-md  hover:outline-purple-400  dark:hover:outline-purple-400 hover:outline hover:outline-4 transition-all duration-75">
         <div class="grid grid-cols-2 md:p-8 p-2">
            <div class="col-span-2 md:col-span-1  order-2 md:order-1 place-items-start mt-5 md:mt-0">
               <div class="flex flex-col text-start">
                  <h2 class="text-4xl"> Hello! ✨ </h2>
                  <div class="flex text-4xl">
                     <h2>
                        I'm
                        <NuxtLink to="/" class="text-violet-400 font-violet ms-1">violet</NuxtLink>
                     </h2>
                  </div>
                  <p class="leading-7">Currently focus on Java during work, and enjoy anything interesting in my free
                     time.</p>
                  <div class="flex">
                     <p>Living and working in</p>
                     <NuxtLink to="/" class="text-violet-500 ml-1 hover:underline custom-underline">Xi'an</NuxtLink>
                  </div>
                  <div class="flex gap-x-4 mt-3">
                     <NuxtLink to="/">
                        <NuxtImg class="my-icon" src="/images/Github-icon.svg" layout="responsive" width="25"
                           height="25"></NuxtImg>
                     </NuxtLink>
                     <NuxtLink to="/">
                        <NuxtImg class="my-icon" src="/images/telegram-icon.svg" layout="responsive" width="25"
                           height="25"></NuxtImg>
                     </NuxtLink>
                     <NuxtLink to="/">
                        <NuxtImg class="my-icon" src="/images/instagram-icon.svg" layout="responsive" width="25"
                           height="25"></NuxtImg>
                     </NuxtLink>
                     <NuxtLink to="/">
                        <NuxtImg class="my-icon" src="/images/whatsapp-icon.svg" layout="responsive" width="25"
                           height="25"></NuxtImg>
                     </NuxtLink>
                  </div>
               </div>
            </div>
            <div class="col-span-2 md:col-span-1  md:place-items-end order-1 md:order-2 place-items-center">
               <NuxtImg src="/images/site-favicon.ico"
                  class="rounded-full shadow-md h-[200px] w-[200px] transition-all hover:shadow-xl lg:h-[250px] lg:w-[250px] md:h-[250px] md:w-[250px] sm:h-[200px] sm:w-[200px] xl:h-[250px] xl:w-[250px]">
               </NuxtImg>
            </div>
         </div>
      </div>
      <!---------------------------------------------Start Components articleCard ------------------------------------------------>
      <ArticleCard />
      <!---------------------------------------------End Components articleCard ------------------------------------------------>
      <div class="mt-32">
         <ShortCard />
      </div>
   </div>
</template>
<script setup>
</script>