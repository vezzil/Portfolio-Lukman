<script setup>
import ProjectCard from './ProjectCard.vue'
import { ref, computed, onMounted } from 'vue'
import projectsData from '../../dataset/projects.json'

const categories = projectsData.categories
const selectedCategory = ref('All')

// Compute projects with full image URLs (only when image is non-empty)
const projectsWithImages = computed(() =>
  projectsData.projects.map((project) => ({
    ...project,
    image:
      project.image && project.image.trim() !== ''
        ? new URL(`../../assets/images/${project.image}`, import.meta.url).href
        : '',
  })),
)

// Filtered projects based on selected category
const filteredProjects = computed(() =>
  selectedCategory.value === 'All'
    ? projectsWithImages.value
    : projectsWithImages.value.filter((p) => p.category === selectedCategory.value),
)

onMounted(() => {
  // Add staggered animation to project cards
  const cards = document.querySelectorAll('.project-card')
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
    card.classList.add('fade-in-up')
  })
})
</script>

<template>
  <section id="projects" class="py-20 bg-slate-900/50 fade-in-hidden">
    <div class="container mx-auto px-4">
      <div class="text-center mb-8">
        <h2 class="text-3xl md:text-5xl font-bold mb-4">
          My <span class="gradient-text">Projects</span>
        </h2>

        <!-- Category Buttons -->
        <div class="flex flex-wrap justify-center gap-3 mt-4">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              'px-4 py-2 rounded-full font-medium transition-colors duration-300',
              selectedCategory === cat
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-slate-700 text-slate-300 hover:bg-indigo-500 hover:text-white',
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div v-for="project in filteredProjects" :key="project.id" class="project-card">
          <ProjectCard
            :title="project.title"
            :description="project.description"
            :technologies="project.technologies"
            :liveDemo="project.liveDemo"
            :sourceCodeFrontEnd="project.sourceCodeFrontEnd"
            :sourceCodeBackEnd="project.sourceCodeBackEnd"
            :image="project.image"
          />
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="text-center py-16">
        <div
          class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-full flex items-center justify-center"
        >
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-white mb-2">No projects found</h3>
        <p class="text-slate-400">No projects match the selected category.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>
