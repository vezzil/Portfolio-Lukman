<script setup>
import SocialMedia from './SocialMediaButtons/SocialMedia.vue';
import socialLinks from '../dataset/socialmedia.json'
</script>

<template>
    <!-- Footer -->
    <footer class="py-10 border-t border-slate-800 fade-in-hidden">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-6 md:mb-0">
                    <div class="flex items-center space-x-2">
                        <div class="hexagon bg-gradient-to-r from-indigo-500 to-emerald-500 w-8 h-8 flex items-center justify-center">
                            <span class="font-bold text-white text-xs">LH</span>
                        </div>
                        <span class="font-bold">Lukman <span class="gradient-text">Hakim</span></span>
                    </div>
                </div>
                
                <div class="flex space-x-8 mb-6 md:mb-0">
                    <a href="#home" class="hover:text-indigo-400 transition-colors">Home</a>
                    <a href="#about" class="hover:text-indigo-400 transition-colors">About</a>
                    <a href="#projects" class="hover:text-indigo-400 transition-colors">Projects</a>
                    <a href="#skills" class="hover:text-indigo-400 transition-colors">Skills</a>
                    <a href="#contact" class="hover:text-indigo-400 transition-colors">Contact</a>
                </div>
                
                <div class="flex space-x-6">
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
