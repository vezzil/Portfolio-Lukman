<script setup>
import { ref } from 'vue'
import SocialMedia from './SocialMediaButtons/SocialMedia.vue'
import socialLinks from '../dataset/socialmedia.json'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

const onSubmit = () => {
  if (!name.value || !email.value || !subject.value || !message.value) {
    alert('Please fill in all fields.')
    return
  }

  const to = 'mlukmanhakim901@gmail.com'
  const trimmedName = name.value.trim()
  const trimmedEmail = email.value.trim()
  const trimmedSubject = subject.value.trim()
  const trimmedMessage = message.value.trim()

  // Use CRLF for better compatibility across mail clients
  const bodyText = `Name: ${trimmedName}\r\nEmail: ${trimmedEmail}\r\n\r\n${trimmedMessage}`
  const subj = encodeURIComponent(trimmedSubject)
  const body = encodeURIComponent(bodyText)
  window.location.href = `mailto:${to}?subject=${subj}&body=${body}`
}

const copyEmail = async () => {
  const address = 'mlukmanhakim901@gmail.com'
  try {
    await navigator.clipboard.writeText(address)
    alert('Email address copied to clipboard.')
  } catch (e) {
    // Fallback for browsers without clipboard permission
    const textarea = document.createElement('textarea')
    textarea.value = address
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    alert('Email address copied to clipboard.')
  }
}
</script>

<template>
  <section id="contact" class="py-20 bg-slate-900/50 fade-in-hidden">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold mb-4">
          Get In <span class="gradient-text">Touch</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto"></div>
        <p class="mt-4 text-slate-300 max-w-2xl mx-auto">
          Interested in working together? Feel free to reach out for collaborations or just a
          friendly chat.
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
                  <p class="text-slate-300">mlukmanhakim901@gmail.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-emerald-900/50 p-3 rounded-full mr-4">
                  <i class="fas fa-map-marker-alt text-emerald-400"></i>
                </div>
                <div>
                  <h4 class="font-bold">Location</h4>
                  <p class="text-slate-300">Selangor, MY</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-rose-900/50 p-3 rounded-full mr-4">
                  <i class="fas fa-globe text-rose-400"></i>
                </div>
                <div>
                  <h4 class="font-bold">Social Media</h4>
                  <div class="flex space-x-4 mt-2">
                    <SocialMedia
                      v-for="(social, index) in socialLinks"
                      :key="index"
                      :url="social.url"
                      :iconClass="social.iconClass"
                      :iconSize="social.iconSize"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="md:w-1/2">
          <form class="gradient-border p-1" @submit.prevent="onSubmit">
            <div class="bg-slate-800 p-6 rounded-md">
              <div class="mb-6">
                <label for="name" class="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="name"
                  required
                  class="w-full bg-slate-700 border border-slate-600 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div class="mb-6">
                <label for="email" class="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  required
                  class="w-full bg-slate-700 border border-slate-600 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Your email"
                />
              </div>

              <div class="mb-6">
                <label for="subject" class="block mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  v-model="subject"
                  required
                  class="w-full bg-slate-700 border border-slate-600 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Subject"
                />
              </div>

              <div class="mb-6">
                <label for="message" class="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  v-model="message"
                  rows="5"
                  required
                  class="w-full bg-slate-700 border border-slate-600 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-gradient-to-r from-indigo-500 to-emerald-500 text-white font-medium py-3 px-4 rounded-md hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>

              <p class="text-sm text-slate-400 mt-3">This opens your default email application.</p>

              <button
                type="button"
                @click="copyEmail"
                class="mt-4 w-full border border-slate-600 text-slate-200 font-medium py-3 px-4 rounded-md hover:bg-slate-700/60 transition-colors"
              >
                Copy email address
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
