<script setup lang="ts">
import { onMounted } from 'vue'
import Highcharts, { type SeriesLineOptions } from 'highcharts'
import { FN_FakeUuid } from 'ct-functions'

const props = defineProps<{
  series: SeriesLineOptions
  yAxisTitle: string
  title: string
}>()

const containerId = `id-${FN_FakeUuid()}`

function drawChart(): void {
  console.log(props)
  Highcharts.chart(containerId, {
    lang: { locale: 'en' },
    title: {
      text: props.title,
      align: 'left'
    },
    yAxis: {
      title: {
        text: props.yAxisTitle
      }
    },
    xAxis: {
      type: 'datetime'
    },
    series: [props.series],
  })
}

onMounted(() => drawChart())
</script>

<template>
  <div :id="containerId">
    here
  </div>
</template>