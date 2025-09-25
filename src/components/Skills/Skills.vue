<script setup>

import SkillsBar from './SkillsBar.vue';
import SkillBadge from './SkillBadge.vue';
import SkillDomain from './SkillDomain.vue';

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
                        
                        <SkillsBar title="Frontend Development" percentage="90" />
                        <SkillsBar title="Backend Development" percentage="80" />
                        <SkillsBar title="DevOps" percentage="70" />
                        <SkillsBar title="Smart Contract Development" percentage="85" />
                        <SkillsBar title="UI/UX Design" percentage="75" />
                        
                    </div>
                </div>
                
                <div>
                    <h3 class="text-2xl font-bold mb-6">Technologies</h3>
                    
                    <div class="flex flex-wrap gap-3">
                        <SkillBadge label="Vue.js" bgColor="bg-indigo-900/50" textColor="text-indigo-300" />
                        <SkillBadge label="React" bgColor="bg-emerald-900/50" textColor="text-emerald-300" />
                        <SkillBadge label="Solidity" bgColor="bg-rose-900/50" textColor="text-rose-300" />
                        <SkillBadge label="Ethers.js" bgColor="bg-indigo-900/50" textColor="text-indigo-300" />
                        <SkillBadge label="Web3.js" bgColor="bg-emerald-900/50" textColor="text-emerald-300" />
                        <SkillBadge label="Hardhat" bgColor="bg-rose-900/50" textColor="text-rose-300" />
                        <SkillBadge label="Truffle" bgColor="bg-indigo-900/50" textColor="text-indigo-300" />
                        <SkillBadge label="Node.js" bgColor="bg-emerald-900/50" textColor="text-emerald-300" />
                        <SkillBadge label="TypeScript" bgColor="bg-rose-900/50" textColor="text-rose-300" />
                        <SkillBadge label="GraphQL" bgColor="bg-indigo-900/50" textColor="text-indigo-300" />
                        <SkillBadge label="IPFS" bgColor="bg-emerald-900/50" textColor="text-emerald-300" />
                        <SkillBadge label="Docker" bgColor="bg-rose-900/50" textColor="text-rose-300" />
                        <SkillBadge label="Tailwind CSS" bgColor="bg-indigo-900/50" textColor="text-indigo-300" />
                        <SkillBadge label="The Graph" bgColor="bg-emerald-900/50" textColor="text-emerald-300" />
                        <SkillBadge label="Figma" bgColor="bg-rose-900/50" textColor="text-rose-300" />
                    </div>
                    
                    <h3 class="text-2xl font-bold mt-10 mb-6">Area of Expertise</h3>
                    
                    <div class="flex flex-wrap gap-3">
                        <SkillDomain label="Decentralized Applications (dApps)" bgColor="bg-indigo-900/50" textColor="text-indigo-300" />
                        <SkillDomain label="Web Development" bgColor="bg-emerald-900/50" textColor="text-emerald-300" />
                        <SkillDomain label="Mobile Development" bgColor="bg-rose-900/50" textColor="text-rose-300" />
                        <SkillDomain label="UI/UX Design" bgColor="bg-indigo-900/50" textColor="text-indigo-300" />
                        <SkillDomain label="Smart Contracts & Blockchain" bgColor="bg-emerald-900/50" textColor="text-emerald-300" />
                        <SkillDomain label="DevOps & Cloud Infrastructure" bgColor="bg-rose-900/50" textColor="text-rose-300" />
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
