<template>
  <div>
    <h1>Home (Host)</h1>

    <div class="custom-class">
      <p>Count: {{ counter.$state.count }}</p>
      <div class="">
        <button type="button" @click="() => counter.increment()">
          Increment (Pinia)
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCounter } from "@/stores/counter"
const counter = useCounter()
</script>

<style scoped>
.custom-class {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
