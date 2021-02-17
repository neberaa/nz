<template>
  <header class="header">
    <div class="container">
      <div class="text">
        <h2 class="title"></h2>
      </div>
      <div class="menu-icon" />
    </div>
  </header>
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
      pageData: require("../../data/main.json"),
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
  .header {
    position: relative;
    top: 0;
    display: flex;
    height: 10vh;
    background-color: $navy;
    z-index: 10;
    @include screenBreakpoint2(desktop) {
      display: none;
    }
  }

</style>
