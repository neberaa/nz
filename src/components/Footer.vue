<template>
  <footer class="footer">
  </footer>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      settings: require("../../data/main.json"),
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  font-size: 0.8rem;
  padding: 3rem 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @include screenBreakpoint2(phone) {
      flex-direction: column;
    }
  }
}
</style>
