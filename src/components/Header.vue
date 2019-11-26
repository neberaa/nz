<template>
  <header class="header">
  </header>
</template>

<script>
import ClickOutside from 'vue-click-outside';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { mapMutations, mapState } from 'vuex';

export default {
  directives: {
    ClickOutside
  },
  inject: ['resp'],
  data() {
    return {
      logo: require("../../static/logo.png"),
      settings: require("../../data/theme.json"),
      contacts: require("../../data/contacts.json"),
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
@import "~hamburgers/_sass/hamburgers/hamburgers";

</style>
