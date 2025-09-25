<script setup>
</script>

<template>
     <section id="contact" class="py-20 bg-slate-900/50 fade-in-hidden">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold mb-4">Get In <span class="gradient-text">Touch</span></h2>
                <div class="w-24 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto"></div>
                <p class="mt-4 text-slate-300 max-w-2xl mx-auto">
                    Interested in working together? Feel free to reach out for collaborations or just a friendly chat.
                </p>
            </div>
            
            <div class="flex flex-col md:flex-row gap-10">
                <div class="md:w-1/2">
                    <div class="gradient-border p-6">
                        <h3 class="text-2xl font-bold mb-6">Contact Information</h3>
                        
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="bg-indigo-900/50 p-3 rounded-full mr-4">
                                    <i class="fas fa-envelope text-indigo-400"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold">Email</h4>
                                    <p class="text-slate-300">hello@yourportfolio.com</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="bg-emerald-900/50 p-3 rounded-full mr-4">
                                    <i class="fas fa-map-marker-alt text-emerald-400"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold">Location</h4>
                                    <p class="text-slate-300">San Francisco, CA</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="bg-rose-900/50 p-3 rounded-full mr-4">
                                    <i class="fas fa-globe text-rose-400"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold">Social Media</h4>
                                    <div class="flex space-x-4 mt-2">
                                        <a href="#" class="text-slate-400 hover:text-white transition-colors">
                                            <i class="fab fa-github text-xl"></i>
                                        </a>
                                        <a href="#" class="text-slate-400 hover:text-white transition-colors">
                                            <i class="fab fa-twitter text-xl"></i>
                                        </a>
                                        <a href="#" class="text-slate-400 hover:text-white transition-colors">
                                            <i class="fab fa-linkedin text-xl"></i>
                                        </a>
                                        <a href="#" class="text-slate-400 hover:text-white transition-colors">
                                            <i class="fab fa-discord text-xl"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="md:w-1/2">
                    <form id="contact-form" class="gradient-border p-1">
                        <div class="bg-slate-800 p-6 rounded-md">
                            <div class="mb-6">
                                <label for="name" class="block mb-2 font-medium">Name</label>
                                <input type="text" id="name" class="w-full bg-slate-700 border border-slate-600 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Your name">
                            </div>
                            
                            <div class="mb-6">
                                <label for="email" class="block mb-2 font-medium">Email</label>
                                <input type="email" id="email" class="w-full bg-slate-700 border border-slate-600 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Your email">
                            </div>
                            
                            <div class="mb-6">
                                <label for="subject" class="block mb-2 font-medium">Subject</label>
                                <input type="text" id="subject" class="w-full bg-slate-700 border border-slate-600 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Subject">
                            </div>
                            
                            <div class="mb-6">
                                <label for="message" class="block mb-2 font-medium">Message</label>
                                <textarea id="message" rows="5" class="w-full bg-slate-700 border border-slate-600 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Your message"></textarea>
                            </div>
                            
                            <button type="submit" class="w-full bg-gradient-to-r from-indigo-500 to-emerald-500 text-white font-medium py-3 px-4 rounded-md hover:opacity-90 transition-opacity">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
