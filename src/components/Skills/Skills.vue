<script setup>
import SkillsBar from './SkillsBar.vue'
import SkillBadge from './SkillBadge.vue'
import SkillDomain from './SkillDomain.vue'

import skillsData from '../../dataset/skills.json'

const skillBars = skillsData.skillBars
const skillBadges = skillsData.skillBadges
const skillDomains = skillsData.skillDomains
</script>


<template>
    <!-- Skills Section -->
    <section id="skills" class="py-20 fade-in-hidden">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold mb-4">My <span class="gradient-text">Skills</span></h2>
                <div class="w-24 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto"></div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h3 class="text-2xl font-bold mb-6">Technical Skills</h3>
                    
                    <div class="space-y-6">
                        <SkillsBar v-for="skillBar in skillBars" :key="skillBar.title" :title="skillBar.title" :percentage="skillBar.percentage" />
                    </div>
                </div>
                
                <div>
                    <h3 class="text-2xl font-bold mb-6">Technologies</h3>
                    
                    <div class="flex flex-wrap gap-3">
                        <SkillBadge v-for="skillBadge in skillBadges" :key="skillBadge.label" :label="skillBadge.label" :bgColor="skillBadge.bgColor" :textColor="skillBadge.textColor" />
                    </div>
                    
                    <h3 class="text-2xl font-bold mt-10 mb-6">Area of Expertise</h3>
                    
                    <div class="flex flex-wrap gap-3">
                        <SkillDomain v-for="skillDomain in skillDomains" :key="skillDomain.label" :label="skillDomain.label" :bgColor="skillDomain.bgColor" :textColor="skillDomain.textColor" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
