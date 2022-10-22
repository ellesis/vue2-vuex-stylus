<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
  export default {
    name: 'LineChart',
    data() {
      return {
        chartOptions: {
          series: [
            {
              data: [1, 2, 3] // sample data
            }
          ]
        }
      }
    }
  }
</script>

<style lang="stylus" scoped></style>
