<script setup lang="ts">
import { defineAsyncComponent } from "vue"

const Button = defineAsyncComponent(
  // @ts-expect-error mfe
  () => import("remoteWithButton/button")
)
</script>

<template>
<div class="flex flex-col">
  [index]

  <Suspense>
    <template #default>
      <Button>Salam</Button>
    </template>
    <template #fallback>
      <div>Loading Remote Component...</div>
    </template>
  </Suspense>
</div>
</template>

<style scoped>

</style>