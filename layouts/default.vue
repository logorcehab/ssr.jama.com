<template>
  <div>
    <top-nav />
    <nuxt/>
  </div>
</template>

<script lang="ts">
import TopNav from "~/layouts/partials/TopNav.vue";

export default {
  components: {
    TopNav
  }
};
</script>
