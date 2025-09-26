<script setup>
import SocialMedia from './SocialMediaButtons/SocialMedia.vue';
import heroData from '../dataset/hero.json'
import socialLinks from '../dataset/socialmedia.json'

const heroTitle = heroData.title
const heroDescription = heroData.description

</script>


<template>
  <!-- Hero Section -->
  <section id="home" class="min-h-screen flex items-center pt-20 fade-in-hidden">
    <div class="container mx-auto px-4 py-16">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            {{ heroTitle[0] }}
            <span class="gradient-text">{{ heroTitle[1] }}</span>
            {{ heroTitle[2] }}
          </h1>
          <p class="text-xl text-slate-300 mb-8">
            {{ heroDescription }}
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#projects" class="gradient-border glow px-6 py-3 font-medium">
              View Projects
            </a>
            <a
              href="#contact"
              class="border border-slate-700 hover:border-indigo-500 px-6 py-3 font-medium transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div class="mt-12 flex items-center space-x-6">
            <SocialMedia
              v-for="(social, index) in socialLinks"
              :key="index"
              :url="social.url"
              :iconClass="social.iconClass"
              :iconSize="social.iconSize"
            />
          </div>
        </div>

        <div class="md:w-1/2 flex justify-center">
          <div class="relative">
            <div class="gradient-border p-1 rounded-full">
              <div class="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
                <img 
                  src="/profilepic.png" 
                  alt="Profile Picture" 
                  class="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div class="absolute -bottom-4 -right-4 bg-slate-900 px-4 py-2 rounded-full border border-slate-700">
              <span class="flex items-center">
                <span class="h-3 w-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Available for work
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
