<template>
  <div id="app">
    <SiteNavigation />
    <img src="./assets/logo.png" />
    <hr />

    <!-- vue-dialog-drag -->
    <div>
      <h1>vue-dialog-drag</h1>
      <button v-if="!showDialog" @click="showDialog = true">Show vue-dialog-drag</button>
      <div style="width: 30%">
        <dialog-drag v-if="showDialog" id="dialog-1" title="Note" :options="options" @close="closedDialog">
          {{ noteContent }}
        </dialog-drag>
      </div>
    </div>
    <hr />

    <!-- Highcharts -->
    <div>
      <h1>Highcharts</h1>
      <RiskEventDayChart />
      <RiskEventTypeChart />
      <BarChart />
      <LineChartDay />
      <LineChart />
    </div>
    <hr />

    <!-- Element-UI -->
    <div>
      <h1>Element-UI</h1>
      <el-button>el-button</el-button>
    </div>
    <hr />

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  import DialogDrag from 'vue-dialog-drag'
  import SiteNavigation from './components/SiteNavigation.vue'
  import LineChart from './components/chart/LineChart'
  import LineChartDay from './components/chart/LineChartDay'
  import BarChart from './components/chart/BarChart'
  import RiskEventDayChart from './components/chart/RiskEventDayChart'
  import RiskEventTypeChart from './components/chart/RiskEventTypeChart'

  export default {
    name: 'app',
    components: {
      HelloWorld,
      DialogDrag,
      SiteNavigation,
      LineChart,
      LineChartDay,
      BarChart,
      RiskEventDayChart,
      RiskEventTypeChart
    },
    data() {
      return {
        showDialog: false,
        options: {
          buttonPin: false,
          x: 20,
          y: 200,
          width: 500,
          height: 400
        },
        noteContent: 'Hello, Note contents!!!'
      }
    },
    methods: {
      closedDialog() {
        this.showDialog = false
      }
    }
  }
</script>

<style src="vue-dialog-drag/dist/vue-dialog-drag.css"></style>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  /* vue-dialog-drag css */
  /* https://github.com/emiliorizzo/vue-dialog-drag/blob/master/src/lib/styl/dialog-styles.styl */
  .dialog-drag {
    min-width: 10em;
    background-color: white;
    /* box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5); */
    /* border: gray dashed 2px; */
    border: #aaaaaa solid 1px;
    text-align: left;
    border-radius: 4px;
    min-height: 130px;
  }

  .dialog-drag .dialog-header {
    background-color: #cccccc;
    color: #222222;
    font-weight: bold;
    margin: 2px;
    border-radius: 4px;
  }
</style>
