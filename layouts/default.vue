<template>
  <div id="app">
    <Navbar v-if="$route.path != '/'" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
