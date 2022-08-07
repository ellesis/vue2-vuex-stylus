<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
      <!-- Dialog -->
      <div>
        <button v-if="!showDialog" @click="showDialog = true">Show Dialog</button>
      </div>
      <div style="width: 30%">
        <dialog-drag v-if="showDialog" id="dialog-1" :options="options" @close="closedDialog"> </dialog-drag>
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import DialogDrag from 'vue-dialog-drag'

  export default {
    name: 'app',
    components: {
      HelloWorld,
      DialogDrag
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
        }
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
</style>
