<script setup>
defineProps({
  title: String,
  description: String,
  technologies: Array,
  liveDemo: String,
  sourceCodeFrontEnd: String,
  sourceCodeBackEnd: String,
  image: String,
})

const techColors = [
  'bg-indigo-900/50 text-indigo-300',
  'bg-emerald-900/50 text-emerald-300',
  'bg-rose-900/50 text-rose-300',
]
</script>

<template>
  <div class="project-card gradient-border p-1">
    <div class="bg-slate-800 p-6 rounded-md flex flex-col">
      <!-- Thumbnail -->
      <div class="h-48 mb-4 overflow-hidden rounded-md bg-slate-700 flex items-center justify-center">
        <img v-if="image && image.trim() !== ''" :src="image" alt="Project image" class="w-full h-full object-cover" />
        <svg v-else class="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="project1-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.2" />
              <stop offset="100%" stop-color="#10b981" stop-opacity="0.2" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#project1-bg)" />
          <circle cx="300" cy="50" r="30" fill="#6366f1" opacity="0.3" />
          <circle cx="350" cy="150" r="20" fill="#10b981" opacity="0.3" />
          <path d="M50,100 Q200,50 350,100" stroke="#6366f1" stroke-width="3" fill="none" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="bold">
            {{ title }}
          </text>
        </svg>
      </div>

      <!-- Title -->
      <h3 class="text-xl font-bold mb-2">{{ title }}</h3>

      <!-- Description -->
      <p class="text-slate-300 mb-4 flex-grow">{{ description }}</p>

      <!-- Technologies -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="(tech, index) in technologies"
          :key="tech"
          :class="`${techColors[index % techColors.length]} text-xs px-3 py-1 rounded-full`"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Links -->
      <div class="flex justify-between items-start">
        <a
          v-if="liveDemo && liveDemo.trim() !== ''"
          :href="liveDemo"
          target="_blank"
          class="text-indigo-400 hover:text-indigo-300 flex items-center"
        >
          <span>Live Demo</span>
          <i class="fas fa-external-link-alt ml-1"></i>
        </a>

        <div class="flex flex-col items-end space-y-2 ml-auto">
          <a
            v-if="sourceCodeFrontEnd && sourceCodeFrontEnd.trim() !== ''"
            :href="sourceCodeFrontEnd"
            target="_blank"
            class="text-indigo-400 hover:text-indigo-300 flex items-center"
          >
            <span>Source Code Frontend</span>
            <i class="fab fa-github ml-1"></i>
          </a>
          <a
            v-if="sourceCodeBackEnd && sourceCodeBackEnd.trim() !== ''"
            :href="sourceCodeBackEnd"
            target="_blank"
            class="text-indigo-400 hover:text-indigo-300 flex items-center"
          >
            <span>Source Code Backend</span>
            <i class="fab fa-github ml-1"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
