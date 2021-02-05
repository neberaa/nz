<template>
  <transition name="fade" appear>
    <div class="loading">
      <h1>Loading....</h1>
    </div>
  </transition>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  directives: {
    ClickOutside
  },
  inject: ['resp'],
  data() {
    return {
      logo: require("../../static/logo.png"),
      settings: require("../../data/main.json"),
      href: null,
    }
  },
  computed: {
  },
  methods: {
  },
  watch: {
  },
  beforeMount() {
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
  .loading {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $yellow;
  }

</style>
