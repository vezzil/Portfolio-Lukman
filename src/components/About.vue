<script setup>
const journeyParagraphs = [
  "I'm a back-end focused software developer with 2 years of experience in building scalable systems and optimizing performance. I specialize in Golang, API development, and delivering efficient back-end solutions for high-traffic applications.",
  "Throughout my career, I have developed various systems including project management tools, haulage management platforms, and marketplace applications, improving efficiency through database optimization, caching, and workflow automation.",
  "I am passionate about continuous learning and collaboration, contributing to open-source projects, exploring emerging technologies, and applying best practices in system design, microservices, and cloud infrastructure."
];

// AboutSectionData.js or inside <script setup>
const experienceEducation = [
  {
    title: "Junior Backend Developer L2",
    company: "PROTEUS DT Sdn.Bhd",
    period: "Nov 2023 – July 2025",
  },
  {
    title: "Software Engineer Internship/Contract",
    company: "ABS Innovations Sdn.Bhd",
    period: "March 2023 – Oct 2023",
  },
  {
    title: "Bachelor of Information Technology (Hons)",
    company: "Universiti Teknologi MARA (UiTM) Shah Alam",
    period: "March 2021 – June 2023",
    description: [
      "Graduated with CGPA: 3.44."
    ]
  }
];

</script>

<template>
  <section id="about" class="py-20 fade-in-hidden">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold mb-4">About <span class="gradient-text">Me</span></h2>
                <div class="w-24 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto"></div>
            </div>
            
                <div class="flex flex-col md:flex-row gap-10">
                    <div class="md:w-1/2">
                        <h3 class="text-2xl font-bold mb-4">My Journey</h3>
                        <div v-for="(paragraph, index) in journeyParagraphs" :key="index" class="text-slate-300 mb-6">
                            {{ paragraph }}
                        </div>
                </div>

                <div class="md:w-1/2">
                    <div class="gradient-border p-6">
                        <h3 class="text-2xl font-bold mb-6">Experience & Education</h3>
                        
                        <div v-for="(item, index) in experienceEducation" :key="index" class="mb-8">
                            <div class="flex justify-between items-center mb-2">
                                <h4 class="font-bold">{{ item.title }}</h4>
                                <span class="text-sm text-slate-400">{{ item.period }}</span>
                            </div>

                            <p class="text-emerald-400 mb-2">{{ item.company }}</p>
                            <div v-for="(desc, idx) in item.description" :key="idx" class="text-slate-300 mb-1">
                            {{ desc }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
