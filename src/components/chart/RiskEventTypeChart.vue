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
            type: 'column',
            borderColor: '#ddd',
            borderWidth: 1
          },
          title: {
            text: 'MESS_UnsafeDrivingEvents_by_Type'
          },
          colors: ['red'],
          legend: {
            enabled: false
          },
          xAxis: {
            categories: ['Hard Acceleration', 'Hard Barking', 'Sharp Turn', 'Impact'],
            crosshair: true,
            title: {
              text: 'MESS_UI4_EVENT_TYPE'
            }
          },
          yAxis: {
            min: 0,
            allowDecimals: false,
            title: {
              text: 'MESS_Events'
            }
          },
          plotOptions: {
            column: {
              pointPadding: 0.2,
              borderWidth: 0
            },
            series: {
              dataLabels: {
                enabled: true
              }
            }
          },
          series: [
            {
              // name: riskLevelText,
              // data: graphData
              data: [2, 3, 4, 1]
            }
          ]
        }
      }
    }
  }
</script>
