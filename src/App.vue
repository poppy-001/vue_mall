<template>
  <div id="app">
    <keep-alive exclude="detailMode">
      <router-view></router-view>
    </keep-alive>
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