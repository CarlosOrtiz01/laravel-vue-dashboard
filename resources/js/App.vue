<template>
  <ThemeProvider>
    <!-- Páginas de autenticación usan FullScreenLayout (sin sidebar) -->
    <component 
      v-if="currentComponent && isAuthPage" 
      :is="currentComponent" 
    />
    <!-- Páginas normales usan SidebarProvider -->
    <SidebarProvider v-else-if="currentComponent && !isAuthPage">
      <component :is="currentComponent" />
    </SidebarProvider>
    <div v-else-if="isLoading" class="flex items-center justify-center h-screen">
      <div class="text-gray-500">Cargando...</div>
    </div>
  </ThemeProvider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from './router'
import ThemeProvider from './components/layout/ThemeProvider.vue'
import SidebarProvider from './components/layout/SidebarProvider.vue'

const { currentComponent, isLoading, currentPath } = useRouter()

// Determinar si es una página de autenticación
const isAuthPage = computed(() => {
  const path = currentPath.value
  return path === '/signin' || path === '/signup'
})
</script>
