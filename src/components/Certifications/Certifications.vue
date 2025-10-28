<template>
  <section id="certifications" class="py-20 bg-gray-50 dark:bg-gray-900 fade-in-hidden">
    <div class="container mx-auto px-4 lg:px-8 max-w-7xl">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Professional
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Industry-recognized certifications that validate my expertise in various technologies and
          domains
        </p>
      </div>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-3 mb-8">
        <button
          v-for="category in certificationData.categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105',
            selectedCategory === category
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md',
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- View Toggle -->
      <div class="flex justify-center mb-8">
        <div class="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md">
          <button
            @click="groupByProgram = false"
            :class="[
              'px-4 py-2 rounded-md transition-all duration-300 font-medium',
              !groupByProgram
                ? 'bg-blue-500 text-white shadow-sm'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',
            ]"
          >
            Grid View
          </button>
          <button
            @click="groupByProgram = true"
            :class="[
              'px-4 py-2 rounded-md transition-all duration-300 font-medium',
              groupByProgram
                ? 'bg-blue-500 text-white shadow-sm'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',
            ]"
          >
            Program View
          </button>
        </div>
      </div>

      <!-- Grid View -->
      <div
        v-if="!groupByProgram"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <div
          v-for="certification in filteredCertifications"
          :key="certification.id"
          class="certification-card"
        >
          <CertificationCard :certification="certification" />
        </div>
      </div>

      <!-- Program Grouped View -->
      <div v-else class="space-y-12">
        <div
          v-for="(certs, program) in groupedCertifications"
          :key="program"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <!-- Program Header -->
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ program }}</h3>
              <p class="text-gray-600 dark:text-gray-400">
                {{ certs.length }} certification{{ certs.length > 1 ? 's' : '' }}
              </p>
            </div>
          </div>

          <!-- Certifications in this program -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="certification in certs" :key="certification.id" class="certification-card">
              <CertificationCard :certification="certification" />
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredCertifications.length === 0" class="text-center py-16">
        <div
          class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
        >
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          No certifications found
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          No certifications match the selected category.
        </p>
      </div>

      <!-- Stats Section -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {{ certificationData.certifications.length }}
          </div>
          <div class="text-gray-600 dark:text-gray-400">Total Certifications</div>
        </div>
        <div class="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            {{ activeCertifications }}
          </div>
          <div class="text-gray-600 dark:text-gray-400">Active Certifications</div>
        </div>
        <div class="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
            {{ uniqueCategories }}
          </div>
          <div class="text-gray-600 dark:text-gray-400">Certification Categories</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import CertificationCard from './CertificationCard.vue'
import certificationsData from '../../dataset/certifications.json'

const certificationData = ref(certificationsData)
const selectedCategory = ref('All')
const groupByProgram = ref(false)

const filteredCertifications = computed(() => {
  if (selectedCategory.value === 'All') {
    return certificationData.value.certifications
  }
  return certificationData.value.certifications.filter(
    (cert) => cert.category === selectedCategory.value,
  )
})

const groupedCertifications = computed(() => {
  if (!groupByProgram.value) return null

  const groups = {}
  filteredCertifications.value.forEach((cert) => {
    const programName = cert.program || 'Other Certifications'
    if (!groups[programName]) {
      groups[programName] = []
    }
    groups[programName].push(cert)
  })
  return groups
})

const activeCertifications = computed(() => {
  const currentDate = new Date()
  return certificationData.value.certifications.filter((cert) => {
    if (!cert.expiryDate) return true
    return new Date(cert.expiryDate) > currentDate
  }).length
})

const uniqueCategories = computed(() => {
  return certificationData.value.categories.length - 1 // Exclude 'All'
})

onMounted(() => {
  // Add staggered animation to certification cards
  const cards = document.querySelectorAll('.certification-card')
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
    card.classList.add('fade-in-up')
  })
})
</script>

<style scoped>
.certification-card {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>
