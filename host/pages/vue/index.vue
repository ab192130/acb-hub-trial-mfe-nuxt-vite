<script setup lang="ts">
// import remote button component here

import { defineAsyncComponent } from "vue"

const HelloWorld = defineAsyncComponent(
  // @ts-expect-error mfe
  () => import("vue/HelloWorld")
)
</script>

<template>
<div class="flex flex-col">
  [vue-app-index]

  <client-only>
    <Suspense>
      <template #default>
        <div class="">
          <HelloWorld/>
        </div>
      </template>
      <template #fallback>
        <div>Loading Remote Component...</div>
      </template>
    </Suspense>
  </client-only>
</div>
</template>