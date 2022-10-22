<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chartOptions: {}
      }
    }
  }
</script>
