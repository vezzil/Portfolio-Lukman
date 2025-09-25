<script setup>
defineProps({
  url: { type: String, required: true },
  iconClass: { type: String, required: true },
  linkClass: { type: String, default: 'text-slate-400 hover:text-white transition-colors' },
  iconSize: { type: String, default: 'text-xl' }
})
</script>

<template>
  <a :href="url" :class="linkClass" target="_blank" rel="noopener noreferrer">
    <i :class="`${iconClass} ${iconSize}`"></i>
  </a>
</template>
