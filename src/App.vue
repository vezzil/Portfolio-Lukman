<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Project from './components/Project/Project.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Background from './components/Background.vue'

let fadeObserver
let anchorClickHandler

onMounted(() => {
  // Fade-in animation observer
  const sections = document.querySelectorAll('.fade-in-hidden')
  fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-show')
        fadeObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })
  sections.forEach((s) => fadeObserver.observe(s))

  // Smooth scrolling for all internal anchors
  anchorClickHandler = (e) => {
    const anchor = e.target.closest('a[href^="#"]')
    if (!anchor) return
    const href = anchor.getAttribute('href')
    if (!href || href === '#') return
    const target = document.querySelector(href)
    if (!target) return
    e.preventDefault()
    const y = window.scrollY + target.getBoundingClientRect().top - 80
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
  document.addEventListener('click', anchorClickHandler)
})

onBeforeUnmount(() => {
  if (fadeObserver) fadeObserver.disconnect()
  if (anchorClickHandler) document.removeEventListener('click', anchorClickHandler)
})
</script>

<template>
  <Background>
    <Navbar />
    <Hero />
    <About />
    <Project />
    <Skills />
    <Contact />
    <Footer />
  </Background>
</template>
