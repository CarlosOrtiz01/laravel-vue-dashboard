<template>
  <div class="max-w-full overflow-x-auto custom-scrollbar">
    <div id="chartOne" class="-ml-5 min-w-[650px] xl:min-w-full pl-2">
      <VueApexCharts type="bar" height="180" :options="chartOptions" :series="series" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { useChartTheme } from '@/composables/useChartTheme'

const series = ref([
  {
    name: 'Sales',
    data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
  },
])

const { getChartTheme } = useChartTheme()

const baseChartOptions = {
  colors: ['#465fff'],
  chart: {
    fontFamily: 'Outfit, sans-serif',
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '39%',
      borderRadius: 5,
      borderRadiusApplication: 'end',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 4,
    colors: ['transparent'],
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'left',
    fontFamily: 'Outfit',
    markers: {
      radius: 99,
    },
  },
  yaxis: {
    title: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false, // Ocultar líneas grises
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {
      formatter: function (val) {
        return val.toString()
      },
    },
  },
}

const chartOptions = computed(() => {
  const theme = getChartTheme()
  return {
    ...baseChartOptions,
    ...theme,
    chart: {
      ...baseChartOptions.chart,
      ...theme.chart,
    },
    xaxis: {
      ...baseChartOptions.xaxis,
      ...theme.xaxis,
    },
    yaxis: {
      ...baseChartOptions.yaxis,
      ...theme.yaxis,
    },
    legend: {
      ...baseChartOptions.legend,
      ...theme.legend,
    },
    grid: {
      ...baseChartOptions.grid,
      ...theme.grid,
    },
    tooltip: {
      ...baseChartOptions.tooltip,
      ...theme.tooltip,
    },
  }
})
</script>
