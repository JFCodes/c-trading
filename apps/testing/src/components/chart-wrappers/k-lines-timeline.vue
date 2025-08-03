<script setup lang="ts">
import type { SeriesLineOptions } from 'highcharts'
import { onMounted, ref } from 'vue'
import type { T_DATA_KLinesTimeline, T_DB_Symbol } from 'ct-data-types'

// Components
import LineChart from '@/components/charts/line-chart.vue'

const props = defineProps<{
  kLineTimeline: T_DATA_KLinesTimeline
  symbol: T_DB_Symbol
}>()

const release = ref(false)
const series = ref<SeriesLineOptions>({ type: 'line' })

function renderData() {
  const data = props.kLineTimeline.map(p => ([
    p.closeTime,
    Number(p.closePrice)
  ]))
  series.value = {
    name: 'price',
    type: 'line',
    data
  }

  release.value = true
}

onMounted(() => renderData())
</script>

<template>
  <LineChart
    v-if="release"
    :title="`KLine timeline for '${symbol.symbol}'`"
    :y-axis-title="`Base price (${symbol.base_asset})`"
    :series="series"
  />
</template>
