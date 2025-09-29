<script setup>
import SocialMedia from './SocialMediaButtons/SocialMedia.vue'
import socialLinks from '../dataset/socialmedia.json'
</script>

<template>
  <!-- Footer -->
  <footer class="py-10 border-t border-slate-800 fade-in-hidden">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center md:relative">
        <div class="flex space-x-8 mb-12 md:mb-0 md:absolute md:left-1/2 md:-translate-x-1/2">
          <a href="#home" class="hover:text-indigo-400 transition-colors">Home</a>
          <a href="#about" class="hover:text-indigo-400 transition-colors">About</a>
          <a href="#projects" class="hover:text-indigo-400 transition-colors">Projects</a>
          <a href="#skills" class="hover:text-indigo-400 transition-colors">Skills</a>
          <a href="#contact" class="hover:text-indigo-400 transition-colors">Contact</a>
        </div>

        <div class="flex space-x-6 md:ml-auto">
          <SocialMedia
            v-for="(social, index) in socialLinks"
            :key="index"
            :url="social.url"
            :iconClass="social.iconClass"
            :iconSize="social.iconSize"
          />
        </div>
      </div>

      <div class="text-center mt-8 text-slate-400 text-sm">
        <p>&copy; 2025 Mohamad Lukman Hakim Mohamad Hanif. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
