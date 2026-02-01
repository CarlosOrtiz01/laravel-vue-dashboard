<template>
  <RouterLink :to="'/'" class="lg:hidden">
    <img class="dark:hidden" src="/images/logo/logo.svg" alt="Logo" />
    <img class="hidden dark:block" src="/images/logo/logo-dark.svg" alt="Logo" />
  </RouterLink>
</template>

<script setup>
import RouterLink from '@/components/common/RouterLink.vue'
</script>
