<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <!-- Certificate Badge/Image -->
    <div class="flex justify-center mb-4">
      <div
        class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
      >
        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>

    <!-- Certificate Name -->
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
      {{ certification.name }}
    </h3>

    <!-- Issuer -->
    <p class="text-lg text-blue-600 dark:text-blue-400 font-semibold text-center mb-3">
      {{ certification.issuer }}
    </p>

    <!-- Category Badge -->
    <div class="flex justify-center mb-3">
      <span
        class="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
      >
        {{ certification.category }}
      </span>
    </div>

    <!-- Issue Date -->
    <div class="text-center mb-3">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Issued: {{ formatDate(certification.issueDate) }}
      </p>
      <p class="text-sm text-gray-600 dark:text-gray-400" v-if="certification.expiryDate">
        Expires: {{ formatDate(certification.expiryDate) }}
      </p>
    </div>

    <!-- Skills -->
    <div class="mb-4">
      <div class="flex flex-wrap justify-center gap-2">
        <span
          v-for="skill in certification.skills"
          :key="skill"
          class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
        >
          {{ skill }}
        </span>
      </div>
    </div>

    <!-- Credential ID -->
    <div class="text-center mb-4">
      <p class="text-xs text-gray-500 dark:text-gray-400">ID: {{ certification.credentialId }}</p>
    </div>

    <!-- Verify Button -->
    <div class="text-center">
      <a
        :href="certification.verificationUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
        Verify Certificate
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  certification: {
    type: Object,
    required: true,
  },
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  })
}
</script>
