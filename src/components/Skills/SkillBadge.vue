<script setup>
import { computed } from 'vue'
import { getPillColors } from '../../utils/colorUtils'

const props = defineProps({
  label: { type: String, required: true },
  index: { type: Number, default: 0 },
})

const colors = computed(() => getPillColors(props.index))
const pillClass = computed(() => `skill-pill ${colors.value.bg} ${colors.value.text} px-4 py-2 rounded-full`)
</script>

<template>
  <span :class="pillClass">{{ label }}</span>
</template>
