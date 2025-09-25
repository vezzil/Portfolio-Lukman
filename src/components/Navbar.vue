<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobileOpen = ref(false)
const activeSection = ref('home')

const scrollToId = (id) => {
  const el = document.querySelector(id)
  if (!el) return
  const y = window.scrollY + el.getBoundingClientRect().top - 80
  window.scrollTo({ top: y, behavior: 'smooth' })
  isMobileOpen.value = false
}

let observer
const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id')
      if (id) activeSection.value = id
    }
  })
}

onMounted(() => {
  const sections = document.querySelectorAll('section[id]')
  observer = new IntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: '-100px 0px -60% 0px',
    threshold: 0.1,
  })
  sections.forEach((s) => observer.observe(s))
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <!-- Navigation -->
  <nav
    class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800"
  >
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <div
          class="hexagon bg-gradient-to-r from-indigo-500 to-emerald-500 w-10 h-10 flex items-center justify-center"
        >
          <span class="font-bold text-white">LH</span>
        </div>
        <span class="font-bold text-xl">Lukman <span class="gradient-text">Hakim</span></span>
      </div>

      <div class="hidden md:flex space-x-8">
        <a
          href="#home"
          class="nav-link"
          :class="{ 'active-nav': activeSection === 'home' }"
          @click.prevent="scrollToId('#home')"
          >Home</a
        >
        <a
          href="#about"
          class="nav-link"
          :class="{ 'active-nav': activeSection === 'about' }"
          @click.prevent="scrollToId('#about')"
          >About</a
        >
        <a
          href="#projects"
          class="nav-link"
          :class="{ 'active-nav': activeSection === 'projects' }"
          @click.prevent="scrollToId('#projects')"
          >Projects</a
        >
        <a
          href="#skills"
          class="nav-link"
          :class="{ 'active-nav': activeSection === 'skills' }"
          @click.prevent="scrollToId('#skills')"
          >Skills</a
        >
        <a
          href="#contact"
          class="nav-link"
          :class="{ 'active-nav': activeSection === 'contact' }"
          @click.prevent="scrollToId('#contact')"
          >Contact</a
        >
      </div>

      <div class="md:hidden">
        <button id="menu-toggle" class="text-white" @click="isMobileOpen = !isMobileOpen">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      id="mobile-menu"
      class="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-800"
      :class="{ hidden: !isMobileOpen }"
    >
      <div class="container mx-auto px-4 py-4 flex flex-col space-y-4">
        <a
          href="#home"
          class="py-2 px-4 hover:bg-slate-800 rounded"
          @click.prevent="scrollToId('#home')"
          >Home</a
        >
        <a
          href="#about"
          class="py-2 px-4 hover:bg-slate-800 rounded"
          @click.prevent="scrollToId('#about')"
          >About</a
        >
        <a
          href="#projects"
          class="py-2 px-4 hover:bg-slate-800 rounded"
          @click.prevent="scrollToId('#projects')"
          >Projects</a
        >
        <a
          href="#skills"
          class="py-2 px-4 hover:bg-slate-800 rounded"
          @click.prevent="scrollToId('#skills')"
          >Skills</a
        >
        <a
          href="#contact"
          class="py-2 px-4 hover:bg-slate-800 rounded"
          @click.prevent="scrollToId('#contact')"
          >Contact</a
        >
      </div>
    </div>
  </nav>
</template>
