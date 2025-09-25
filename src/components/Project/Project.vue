<script setup>
import ProjectCard from './ProjectCard.vue'
import { ref, computed } from 'vue'

// Helper to load images
function getImage(filename) {
  return new URL(`../../assets/images/${filename}`, import.meta.url).href
}

// Categories
const categories = [
  'All',
  'Full-stack Web',
  'Full-stack Mobile',
  'Blockchain / Web3',
  'Other / Utilities',
]

// Selected category
const selectedCategory = ref('All')

// Projects
const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Personal portfolio built with Vue and Tailwind.',
    technologies: ['Vue.js', 'Tailwind CSS', 'Golang', 'Redis'],
    category: 'Full-stack Web',
    liveDemo: 'https://portfolio-website.com',
    sourceCode: 'https://github.com/vezzil/portfolio-website',
    image: getImage('portfolio1.PNG'),
  },
  {
    id: 2,
    title: 'E-commerce Store',
    description: 'Full-stack e-commerce store with cart & checkout.',
    technologies: ['Vue.js', 'Tailwind CSS'],
    category: 'Full-stack Web',
    liveDemo: '',
    sourceCode: 'https://github.com/vezzil/ecommerce-store',
    image: getImage('portfolio2.PNG'),
  },
  {
    id: 3,
    title: 'Crypto Wallet',
    description: 'Web3 wallet with Ethers.js integration.',
    technologies: ['React.js', 'Ethers.js', 'IPFS'],
    category: 'Blockchain / Web3',
    liveDemo: '',
    sourceCode: 'https://github.com/vezzil/crypto-wallet',
    image: getImage('portfolio3.PNG'),
  },
  {
    id: 4,
    title: 'Utility Script',
    description: 'CLI tool to automate backups.',
    technologies: ['Golang', 'CLI'],
    category: 'Other / Utilities',
    liveDemo: '',
    sourceCode: 'https://github.com/vezzil/backup-script',
    image: getImage('portfolio4.PNG'),
  },
]

// Filtered projects
const filteredProjects = computed(() =>
  selectedCategory.value === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory.value),
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
            {{ cat }}
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
