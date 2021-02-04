<template>
  <Layout>
    <h1 v-text="mainScreen.yellow_welcome_label" />
  </Layout>
</template>

<page-query>
query Posts {
  paintBlock: allBlockItem(filter: {key: {eq: "block_paint"}}) {
    edges {
      node {
        title
        description
        bg_image
        gallery
      }
    }
  }
}
</page-query>

<script>
export default {
  inject: ['resp'],
  metaInfo () {
    return {
      title: 'Natalia Zharkova'
    }
  },
  data() {
    return {
      mainScreen: require("../../data/pageBlocks/mainscreen.json"),
    }
  },
  computed: {
    paintBlock() {
      return this.$page.paintBlock.edges[0].node;
    },
  },
  methods: {
  },
  mounted() {
    console.log('PAGE', this);
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
