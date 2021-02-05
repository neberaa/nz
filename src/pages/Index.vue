<template>
  <Layout>
    <MainScreen />
    <About />
    <Achivements />
  </Layout>
</template>

<script>
import MainScreen from "@/components/MainScreen";
import About from "@/components/About";
import Achivements from "@/components/Achivements";

export default {
  components: {
    MainScreen,
    About,
    Achivements
  },
  inject: ['resp'],
  metaInfo () {
    return {
      title: 'Natalia Zharkova'
    }
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
.section {
  color: $white;
  text-transform: uppercase;
  font-size: 3rem;
  text-align: center;
  @include screenBreakpoint2(phone) {
    font-size: 2rem;
  }
  .image-container {
    max-width: calc(100% - 60px);
    margin: auto;
    @include screenBreakpoint2(desktop) {
      max-width: 800px;
    }
  }
}
</style>
