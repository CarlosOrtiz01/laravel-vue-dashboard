import { computed, watchEffect, ref } from 'vue'

/**
 * Composable para obtener la configuración de tema de los gráficos ApexCharts
 * basado en el modo oscuro del sistema
 */
export const useChartTheme = () => {
  const darkMode = ref(document.documentElement.classList.contains('dark'))
  
  // Observar cambios en el tema
  const observer = new MutationObserver(() => {
    darkMode.value = document.documentElement.classList.contains('dark')
  })
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })

  const isDark = computed(() => darkMode.value)

  const getChartTheme = () => {
    const baseTheme = {
      fontFamily: 'Outfit, sans-serif',
    }

    if (isDark.value) {
      return {
        ...baseTheme,
        chart: {
          background: '#171F2F', // Gris tenue y suave para modo oscuro
          fontFamily: 'Outfit, sans-serif',
        },
        theme: {
          mode: 'dark',
          palette: 'palette2',
        },
        colors: ['#EF4444', '#FCA5A5'],
        grid: {
          borderColor: 'transparent', // Sin líneas grises
          strokeDashArray: 0,
        },
        xaxis: {
          labels: {
            style: {
              colors: '#F9FAFB', // white/90 - más visible
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: '#F9FAFB', // white/90 - más visible
            },
          },
        },
        legend: {
          labels: {
            colors: '#F9FAFB', // white/90 - más visible
          },
        },
        tooltip: {
          theme: 'dark',
        },
      }
    }

    return {
      ...baseTheme,
      chart: {
        background: 'transparent', // Fondo transparente en modo claro también
        fontFamily: 'Outfit, sans-serif',
      },
      theme: {
        mode: 'light',
        palette: 'palette1',
      },
      colors: ['#EF4444', '#FCA5A5'],
      grid: {
        borderColor: 'transparent', // Sin líneas grises
        strokeDashArray: 0,
      },
      xaxis: {
        labels: {
          style: {
            colors: '#1D2939', // dark text - más visible
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#1D2939', // dark text - más visible
          },
        },
      },
      legend: {
        labels: {
          colors: '#1D2939', // dark text - más visible
        },
      },
      tooltip: {
        theme: 'light',
      },
    }
  }

  return {
    isDark,
    getChartTheme,
  }
}
