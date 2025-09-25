<script setup>
import ProjectCard from './ProjectCard.vue'

// Example: could also come from API or JSON
const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio built with Vue and Tailwind.',
    image: '/images/portfolio.png',
    link: 'https://myportfolio.com',
  },
  {
    id: 2,
    title: 'E-commerce Store',
    description: 'Full-stack e-commerce store with cart & checkout.',
    image: '/images/store.png',
    link: 'https://mystore.com',
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'Markdown-powered blog with user authentication.',
    image: '/images/blog.png',
    link: 'https://myblog.com',
  },
]
</script>

<template>
  <!-- Projects Section -->
  <section id="projects" class="py-20 bg-slate-900/50 fade-in-hidden">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold mb-4">
          My <span class="gradient-text">Projects</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto"></div>
        <p class="mt-4 text-slate-300 max-w-2xl mx-auto">
          Explore my latest work spanning Web3, decentralized applications, and modern web
          experiences.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :link="project.link"
        />
      </div>

      <div class="text-center mt-12">
        <button
          id="view-more-btn"
          class="border border-slate-700 hover:border-indigo-500 px-6 py-3 font-medium transition-colors"
        >
          View More Projects
        </button>
      </div>
    </div>
  </section>
</template>
