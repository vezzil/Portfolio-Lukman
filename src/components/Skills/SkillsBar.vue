<script setup>
defineProps({
    title: String,
    percentage: Number
})
</script>

<template>
  <div>
    <div class="flex justify-between mb-2">
      <span class="font-medium">{{ title }}</span>
      <span>{{ percentage }}%</span>
    </div>
    <div class="h-2 bg-slate-700 rounded-full">
      <div
        class="h-full w-[90%] bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full"
      ></div>
    </div>
  </div>
</template>
