<template>
  <div id="app">
    <router-view></router-view>
    <MainTab></MainTab>
  </div>
</template>

<script>
import MainTab from './components/content/tabbar/MainTab.vue'

export default {
  name: "App",
  components: { MainTab }
}
</script>

<style >

</style>