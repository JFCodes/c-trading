<script setup lang="ts">
import { E_ROUTER_PAGES } from '@/router'
</script>

<template>
  <RouterLink :to="{ name: E_ROUTER_PAGES.SYMBOLS }">
    Symbols
  </RouterLink>
</template>
