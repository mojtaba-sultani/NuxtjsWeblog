<template>
  <div>
    <form action="">
      <div class="relative w-full flex items-center gap-2">
        <input v-model="search" type="search"
          class="focus:outline-violet-400 transition-all duration-150  ease-in py-2 appearance-none outline-none w-2/3 md:w-[80%] lg:w-[87%] border focus:border-none bg-gray-100 dark:bg-zinc-800 dark:border-zinc-600 border-gray-300 rounded-md dark:focus:border-violet-400 focus:border-violet-400 px-4 md:px-16"
          placeholder="full Text Search" />
        <NuxtImg class="my-icon absolute left-4 top-[30%]" src="/images/searchicon.svg" width="20" height="20">
        </NuxtImg>
        <select
          class=" focus:outline-8 dark:focus:border-violet-400 focus:border-violet-400 text-sm w-1/3  md:w-[20%] lg:w-[13%] items-center border bg-gray-100 border-gray-300 p-3 rounded-lg dark:bg-zinc-800 dark:border-zinc-600">
          <option value="1">short By date</option>
          <option value="2">short By view</option>
        </select>
      </div>
    </form>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
      <NuxtLink :to="`/users/${user.id}`" v-for="user in filteredItems" :key="user.id"
        class="col-span-1 hover:outline hover:outline-violet-400  border border-stone-300 dark:border-stone-600 p-5 rounded-md">
        <h3 class="font-bold text-xl"><span class="text-cyan-600">name:</span>{{ user.name }}</h3>
        <p><span class="font-bold text-orange-600">email:</span>{{ user.email }}</p>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
const { data: users } = await useFetch(() => 'https://jsonplaceholder.typicode.com/users')
const search = ref('')
const filteredItems = computed(() => {
  if (!users.value) return []
  return users.value.filter(user => 
    user.name.toLowerCase().includes(search.value.toLowerCase())
  )
})

</script>