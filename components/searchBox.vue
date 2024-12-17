<template>
<div class="flex gap-5">
    <input type="search" class="p-1 appearance-none outline-none  w-11/12 border-2 bg-gray-50 border-gray-200 rounded-md focus:border-violet-400">
    <div class="relative">
        <div class="relative min-w-[200px]">
  <label for="slct" class="block mb-2 text-gray-700">Select option</label>
  <select id="slct" required class="appearance-none w-full py-2 pl-3 pr-10 border border-[#E8EAED] rounded-lg bg-white shadow-[0_1px_3px_-2px_#9098A9] cursor-pointer text-base font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:ring-2 hover:ring-blue-500 hover:border-blue-500">
    <option value="" disabled selected class="hidden">Select option</option>
    <option value="#">One</option>
    <option value="#">Two</option>
    <option value="#">Three</option>
    <option value="#">Four</option>
    <option value="#">Five</option>
    <option value="#">Six</option>
    <option value="#">Seven</option>
  </select>
  <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-[10px] h-[6px] stroke-[2px] stroke-[#9098A9] fill-none stroke-linecap-round stroke-linejoin-round pointer-events-none">
    <use xlink:href="#select-arrow-down"></use>
  </svg>
</div>

<!-- SVG Sprites -->
<svg class="sprites" style="position: absolute; width: 0; height: 0; pointer-events: none; user-select: none;">
  <symbol id="select-arrow-down" viewBox="0 0 10 6">
    <polyline points="1 1 5 5 9 1"></polyline>
  </symbol>
</svg>

</div>

</div>
</template>
<script setup>
</script>