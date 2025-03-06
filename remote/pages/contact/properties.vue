<template>
  <div class="remote-bg">
    <h1>Credits</h1>

    <div class="" style="display: flex; flex-direction: column; gap: 0.5rem;">
      <div>
        <div class="">Credits (Local): {{ counter }}</div>
        <button type="button" @click="handleClick">Add Credit</button>
      </div>
      <div class="links">
        <NuxtLink to="/">Go back to home</NuxtLink>
<!--        <NuxtLink to="/about">About</NuxtLink>-->
      </div>
    </div>
  </div>
</template>
<script setup>
const counter = ref(0)

const handleClick = () => {
  counter.value += 2
}

definePageMeta({
  name: "contact-properties"
})
</script>

<style scoped>
.remote-bg {
  background: gainsboro;
}
.links {
  display: flex;
  gap: 2rem;
}
</style>
