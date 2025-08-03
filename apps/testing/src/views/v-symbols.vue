<script setup lang="ts">
import { ref } from 'vue'
import type { T_BACKEND_SymbolsKLinesTimeline } from 'ct-data-types'
import { TRF_CAST_Symbol } from 'ct-data-transforms'
// App
import { symbolsStore } from '@/stores'
// Components
import LLinesTimelineChartWrapper from '@/components/chart-wrappers/k-lines-timeline.vue'


const symbolsStr = symbolsStore()

const timeline = ref<null | T_BACKEND_SymbolsKLinesTimeline>(null)
const isLoading = ref(false)
const symbol = ref('btcusdc')

function getKLinesTimeline (): void {
  const searchSymbol = TRF_CAST_Symbol(symbol.value)
  if (!searchSymbol) return

  isLoading.value = true
  symbolsStr
    .getSymbolKLinesTimeline(searchSymbol)
    .then(result => {
      timeline.value = result
      console.log(result)
    })
    .finally(() => isLoading.value = false)
}

</script>
<template>
  <div>
    <input
      v-model="symbol"
      type="text"
      :disabled="isLoading"
    />
    
    <button
      :disabled="isLoading"
      @click="() => getKLinesTimeline()"
    >
      get timeline
    </button>
  </div>

  <div v-if="timeline">
    <LLinesTimelineChartWrapper
      :k-line-timeline="timeline.timeline"
      :symbol="timeline.symbol"
    />
  </div>
</template>
