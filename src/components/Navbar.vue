<script setup>
</script>

<template>
        <!-- Navigation -->
        <nav class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <div class="hexagon bg-gradient-to-r from-indigo-500 to-emerald-500 w-10 h-10 flex items-center justify-center">
                    <span class="font-bold text-white">YP</span>
                </div>
                <span class="font-bold text-xl">Your<span class="gradient-text">Portfolio</span></span>
            </div>
            
            <div class="hidden md:flex space-x-8">
                <a href="#home" class="nav-link active-nav">Home</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#projects" class="nav-link">Projects</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#contact" class="nav-link">Contact</a>
            </div>
            
            <div class="md:hidden">
                <button id="menu-toggle" class="text-white">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
        
        <!-- Mobile menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
            <div class="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <a href="#home" class="py-2 px-4 hover:bg-slate-800 rounded">Home</a>
                <a href="#about" class="py-2 px-4 hover:bg-slate-800 rounded">About</a>
                <a href="#projects" class="py-2 px-4 hover:bg-slate-800 rounded">Projects</a>
                <a href="#skills" class="py-2 px-4 hover:bg-slate-800 rounded">Skills</a>
                <a href="#contact" class="py-2 px-4 hover:bg-slate-800 rounded">Contact</a>
            </div>
        </div>
    </nav>
</template>