import { ref, computed } from 'vue'
import type { Component } from 'vue'
import * as routes from '@/routes'

// Mapeo de rutas a componentes usando las funciones de Wayfinder
const routeComponents: Record<string, () => Promise<Component>> = {
  '/': () => import('./views/Ecommerce.vue'),
  '/ecommerce': () => import('./views/Ecommerce.vue'),
  '/calendar': () => import('./views/Others/Calendar.vue'),
  '/profile': () => import('./views/Others/UserProfile.vue'),
  '/form-elements': () => import('./views/Forms/FormElements.vue'),
  '/basic-tables': () => import('./views/Tables/BasicTables.vue'),
  '/line-chart': () => import('./views/Chart/LineChart/LineChart.vue'),
  '/bar-chart': () => import('./views/Chart/BarChart/BarChart.vue'),
  '/alerts': () => import('./views/UiElements/Alerts.vue'),
  '/avatars': () => import('./views/UiElements/Avatars.vue'),
  '/badge': () => import('./views/UiElements/Badges.vue'),
  '/buttons': () => import('./views/UiElements/Buttons.vue'),
  '/images': () => import('./views/UiElements/Images.vue'),
  '/videos': () => import('./views/UiElements/Videos.vue'),
  '/blank': () => import('./views/Pages/BlankPage.vue'),
  '/error-404': () => import('./views/Errors/FourZeroFour.vue'),
  '/signin': () => import('./views/Auth/Signin.vue'),
  '/signup': () => import('./views/Auth/Signup.vue'),
}

const currentPath = ref(window.location.pathname)
const currentComponent = ref<Component | null>(null)
const isLoading = ref(false)

// Función para navegar - acepta string o función de Wayfinder
export const navigate = (path: string | { url: string }) => {
  const url = typeof path === 'string' ? path : path.url
  if (currentPath.value !== url) {
    currentPath.value = url
    window.history.pushState({}, '', url)
    loadComponent(url)
  }
}

// Función para cargar el componente
const loadComponent = async (path: string) => {
  isLoading.value = true
  try {
    const route = routeComponents[path] || routeComponents['/error-404']
    const component = await route()
    currentComponent.value = component.default || component
    
    // Actualizar título de la página
    const routeName = Object.keys(routeComponents).find(key => key === path)
    if (routeName && routeName !== '/') {
      document.title = `${routeName.replace('/', '').replace('-', ' ')} | TailAdmin`
    }
  } catch (error) {
    console.error('Error loading component:', error)
    const errorComponent = await routeComponents['/error-404']()
    currentComponent.value = errorComponent.default || errorComponent
  } finally {
    isLoading.value = false
  }
}

// Escuchar cambios en el historial del navegador
window.addEventListener('popstate', () => {
  currentPath.value = window.location.pathname
  loadComponent(currentPath.value)
})

// Cargar el componente inicial
loadComponent(currentPath.value)

// Exportar el router
export const useRouter = () => {
  return {
    currentPath: computed(() => currentPath.value),
    currentComponent: computed(() => currentComponent.value),
    isLoading: computed(() => isLoading.value),
    navigate,
    push: navigate,
    replace: (path: string) => {
      currentPath.value = path
      window.history.replaceState({}, '', path)
      loadComponent(path)
    },
  }
}

// Exportar las funciones de Wayfinder
export { routes }
