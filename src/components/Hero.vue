<script setup>
</script>

<template>
  <!-- Hero Section -->
  <section id="home" class="min-h-screen flex items-center pt-20 fade-in-hidden">
    <div class="container mx-auto px-4 py-16">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            Building the <span class="gradient-text">Future</span> of Web
          </h1>
          <p class="text-xl text-slate-300 mb-8">
            Full-stack developer specializing in Web3 technologies, creating decentralized
            applications and immersive digital experiences.
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
            <a href="#" class="text-slate-400 hover:text-white transition-colors">
              <i class="fab fa-github text-2xl"></i>
            </a>
            <a href="#" class="text-slate-400 hover:text-white transition-colors">
              <i class="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" class="text-slate-400 hover:text-white transition-colors">
              <i class="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" class="text-slate-400 hover:text-white transition-colors">
              <i class="fab fa-discord text-2xl"></i>
            </a>
          </div>
        </div>

        <div class="md:w-1/2 flex justify-center">
          <div class="relative">
            <div class="gradient-border p-1 rounded-full">
              <div class="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
                  <defs>
                    <linearGradient id="avatar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#6366f1" />
                      <stop offset="100%" stop-color="#10b981" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#avatar-gradient)"
                    d="M48.8,-57.2C62.9,-44.5,74.2,-28.9,76.9,-11.7C79.7,5.5,73.9,24.4,62.4,38.5C50.9,52.7,33.7,62.1,15.2,67.2C-3.3,72.3,-23.1,73.1,-39.9,65.2C-56.7,57.3,-70.5,40.7,-76.3,21.3C-82.1,1.9,-79.9,-20.3,-69.4,-37.1C-58.9,-53.9,-40.1,-65.3,-22.1,-70.1C-4.1,-74.9,13.1,-73.1,29.4,-67.1C45.7,-61.1,61.1,-50.9,48.8,-57.2Z"
                    transform="translate(100 100)"
                  />
                  <text
                    x="50%"
                    y="50%"
                    dominant-baseline="middle"
                    text-anchor="middle"
                    fill="#ffffff"
                    font-size="60"
                    font-weight="bold"
                  >
                    YP
                  </text>
                </svg>
              </div>
            </div>

            <div
              class="absolute -bottom-4 -right-4 bg-slate-900 px-4 py-2 rounded-full border border-slate-700"
            >
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
