<template>
  <Push :closeOnNavigation="true">
    <router-link to="/"><span>Home</span></router-link>
    <!-- <router-link to="/about"><span>Home</span></router-link> -->
  </Push>
</template>

<script>
import { Push } from 'vue-burger-menu'

export default {
  components: {
    Push
  }
}
</script>

<style>
.bm-burger-button {
  position: absolute;
  cursor: pointer;
  height: 20px;
  left: 25px;
  top: 18px;
  width: 36px;
}
</style>
