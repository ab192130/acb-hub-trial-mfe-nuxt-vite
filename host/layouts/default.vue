<template>
  <div>
    <div class="layout">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/contact">FinScore Reports</NuxtLink>
      <NuxtLink to="/contact/properties">FinScore Credits</NuxtLink>
      <NuxtLink to="/vue">Vue</NuxtLink>
    </div>

    <div class="custom-layout">
      <slot />
      <div>[host-footer]</div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  gap: 0.5rem;
}
.custom-layout {
  display: flex;
  flex-direction: column; /* Equivalent to flex-col */
  gap: 0.5rem; /* Equivalent to Tailwind's gap-4 */
}
</style>
<script setup lang="ts">
</script>