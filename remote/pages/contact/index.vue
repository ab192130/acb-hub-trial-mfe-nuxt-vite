<template>
  <div class="remote-bg">
    <h1>Score Reports</h1>
    <div>
      <div class="store-item">
        <div class="">
          Score (Local): {{ count }}
        </div>
        <button type="button" @click="count++">
          Increment
        </button>
      </div>
      <div class="store-item">
        <div class="">
          Score (Pinia): {{ counter.$state.count }}
        </div>
        <button type="button" @click="handleIncrementPinia">
          Increment
        </button>
      </div>
    </div>
    <div class="links">
      <NuxtLink to="/">Go back to home</NuxtLink>
      <!--        <NuxtLink to="/about">About</NuxtLink>-->
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCounter } from "@/stores/counter"
const counter = useCounter()
const count = ref(0)

const emit = defineEmits<{
  (e: "increment", count: number): void
}>()

const handleIncrementPinia = () => {
  counter.increment()
  emit("increment", counter.$state.count)
}
</script>
<style scoped>
.remote-bg {
  background-color: aquamarine;
}

.store-item {
  display: flex;
  gap: 0.5rem;
}

.links {
  display: flex;
  gap: 2rem;
}
</style>
