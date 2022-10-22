<template>
  <div class="chartElem">
    <div class="row">
      <highcharts class="chart" :options="chartOptions"></highcharts>
    </div>
    <button id="changeWidth" v-on:click="changeContainerWidth()">Change container width</button>
    <button id="reflow">Reflow Chart</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chartOptions: {
          title: {
            text: 'Sin chart'
          },
          chart: {
            type: 'spline'
          },
          data: {
            csvURL: 'https://demo-live-data.highcharts.com/vs-load.csv',
            seriesMapping: [
              {
                x: 0,
                y: 1
              }
            ]
          },
          yAxis: {
            labels: {
              formatter: function() {
                return this.axis.defaultLabelFormatter.call(this)
              }
            }
          }
        }
      }
    },
    methods: {
      changeContainerWidth() {
        console.log(this)
      }
    },
    created() {
      console.log(this)
      let i = document.createElement('input')
      i.setAttribute('type', 'color')
      i.type === 'color' ? (this.colorInputIsSupported = true) : (this.colorInputIsSupported = false)
    },
    watch: {
      title(newValue) {
        this.chartOptions.title.text = newValue
      },
      points(newValue) {
        this.chartOptions.series[0].data = newValue
      },
      chartType(newValue) {
        this.chartOptions.chart.type = newValue.toLowerCase()
      },
      seriesColor(newValue) {
        this.chartOptions.series[0].color = newValue.toLowerCase()
      },
      animationDuration(newValue) {
        this.updateArgs[2].duration = Number(newValue)
      }
    }
  }
</script>

<style scoped>
  input[type='color']::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  #colorPicker {
    border: 0;
    padding: 0;
    margin: 0;
    width: 30px;
    height: 30px;
  }
  .numberInput {
    width: 30px;
  }
</style>
