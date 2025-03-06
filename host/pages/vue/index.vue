<script setup lang="ts">
// import remote button component here
</script>

<template>
<div class="flex flex-col">
  [index]

  <Suspense>
    <template #default>
      <div class="">
        [add remote button component here]
      </div>
    </template>
    <template #fallback>
      <div>Loading Remote Component...</div>
    </template>
  </Suspense>
</div>
</template>

<style scoped>

</style>