<template>
  <a
    :href="href"
    :class="className"
    @click.prevent="handleClick"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { navigate } from '@/router'
import type { RouteDefinition } from '@/wayfinder'
import * as routes from '@/routes'

interface Props {
  to: string | RouteDefinition<'get'>
  class?: string
}

const props = defineProps<Props>()

// Función helper para obtener la URL desde Wayfinder o string
const getUrl = (to: string | RouteDefinition<'get'>): string => {
  if (typeof to === 'string') {
    // Intentar usar Wayfinder si existe una función para esta ruta
    const routeName = to.replace('/', '').replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
    const routeFunction = (routes as any)[routeName] || (routes as any)[to.replace('/', '')]
    if (routeFunction && typeof routeFunction.url === 'function') {
      return routeFunction.url()
    }
    return to
  }
  return to.url
}

const href = computed(() => getUrl(props.to))

const className = computed(() => props.class || '')

const handleClick = (e: MouseEvent) => {
  e.preventDefault()
  const url = getUrl(props.to)
  navigate(url)
}
</script>
