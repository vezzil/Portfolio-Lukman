<script setup></script>

<template>
  <!-- Background wrapper -->
  <div class="relative">
    <!-- Fixed background layer -->
    <div class="fixed inset-0 -z-10 overflow-hidden grid-bg">
      <div class="blur-bg bg-indigo-500" style="top: 10%; left: 20%"></div>
      <div class="blur-bg bg-emerald-500" style="bottom: 30%; right: 10%"></div>
      <div class="blur-bg bg-rose-500" style="bottom: 10%; left: 30%"></div>
    </div>

    <!-- Slot for your actual page content -->
    <slot />
  </div>
</template>
