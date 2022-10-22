<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chartOptions: {
          chart: {
            type: 'line',
            borderColor: '#ddd',
            borderWidth: 1
          },
          title: {
            // text: $.i18n.prop('MESS_UnsafeDrivingEventsPerDay')
            text: 'UnsafeDrivingEventsPerDay'
          },
          colors: ['red'],
          legend: {
            enabled: false
          },
          xAxis: {
            categories: ['1', '2'], //xAxisList, //date
            title: {
              // text: $.i18n.prop('MESS_Days')
              test: 'Days'
            }
          },
          yAxis: {
            min: 0,
            allowDecimals: false,
            title: {
              // text: $.i18n.prop('MESS_Events')
              text: 'Events'
            }
          },
          plotOptions: {
            line: {
              dataLabels: {
                enabled: true
              }
            },
            series: {
              states: {
                hover: {
                  enabled: false
                }
              }
            }
          },
          series: [
            {
              // name: riskLevelText,
              // data: graphData
              data: [1, 2, 3, 4]
            }
          ]
        }
      }
    }
  }
</script>
