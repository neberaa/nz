<template>
  <header class="header" />
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
  .header {
    position: absolute;
    top: 0;
  }

</style>
