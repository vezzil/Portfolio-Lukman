<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Project from './components/Project/Project.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Background from './components/Background.vue'
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
