<script setup>
defineProps({
  label: String,
  bgColor: { type: String, default: 'bg-indigo-900/50' },
  textColor: { type: String, default: 'text-indigo-300' },
})
</script>

<template>
  <span :class="`skill-pill ${bgColor} ${textColor} px-4 py-2 rounded-full`">
    {{ label }}
  </span>
</template>
