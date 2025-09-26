<script setup>
import ProjectCard from './ProjectCard.vue'
import { ref, computed } from 'vue'
import projectsData from '../../dataset/projects.json'

const categories = projectsData.categories
const selectedCategory = ref('All')

// Compute projects with full image URLs
const projectsWithImages = computed(() =>
  projectsData.projects.map(project => ({
    ...project,
    image: new URL(`../../assets/images/${project.image}`, import.meta.url).href
  }))
)

// Filtered projects based on selected category
const filteredProjects = computed(() =>
  selectedCategory.value === 'All'
    ? projectsWithImages.value
    : projectsWithImages.value.filter(p => p.category === selectedCategory.value)
)
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
            {{ cat
             }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <transition-group
        name="fade-slide"
        tag="div"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
      >
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <ProjectCard
            :title="project.title"
            :description="project.description"
            :technologies="project.technologies"
            :liveDemo="project.liveDemo"
            :sourceCode="project.sourceCode"
            :image="project.image"
          />
        </div>
      </transition-group>
    </div>
  </section>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
