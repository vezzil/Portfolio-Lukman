<script setup>
import ProjectCard from './ProjectCard.vue'

function getImage(filename) {
  return new URL(`../../assets/images/${filename}`, import.meta.url).href
}

// Project data
const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio built with Vue and Tailwind.',
    technologies: ['Vue.js', 'Tailwind CSS', 'Golang', 'Redis'],
    liveDemo: 'https://portfolio-website.com',
    sourceCode: 'https://github.com/vezzil/portfolio-website',
    image: getImage('portfolio1.PNG'),
  },
  {
    id: 2,
    title: 'E-commerce Store',
    description: 'Full-stack e-commerce store with cart & checkout.',
    technologies: ['Vue.js', 'Tailwind CSS'],
    liveDemo: 'https://ecommerce-store.com',
    sourceCode: 'https://github.com/vezzil/ecommerce-store',
    image: getImage('portfolio1.PNG'),
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'Markdown-powered blog with user authentication.',
    technologies: ['Vue.js', 'Tailwind CSS'],
    liveDemo: 'https://blog-platform.com',
    sourceCode: 'https://github.com/vezzil/blog-platform',
    image: getImage('portfolio1.PNG'),
  },
]

const ProjectParagraph =
  "Explore my backend-focused and full-stack projects, showcasing efficient APIs, scalable architectures, and modern web applications built with Golang, Vue.js, React.js, and Redis."

const onViewMore = () => {
  alert('This would load more projects in a real portfolio.')
}
</script>

<template>
  <section id="projects" class="py-20 bg-slate-900/50 fade-in-hidden">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold mb-4">
          My <span class="gradient-text">Projects</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto"></div>
        <p class="mt-4 text-slate-300 max-w-2xl mx-auto">{{ ProjectParagraph }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :technologies="project.technologies"
          :liveDemo="project.liveDemo"
          :sourceCode="project.sourceCode"
          :image="project.image"
        />
      </div>

      <div class="text-center mt-12">
        <button
          id="view-more-btn"
          class="border border-slate-700 hover:border-indigo-500 px-6 py-3 font-medium transition-colors"
          @click="onViewMore"
        >
          View More Projects
        </button>
      </div>
    </div>
  </section>
</template>
