<template>
  <Layout>
    <section>Hello world</section>
  </Layout>
</template>

<page-query>
query Posts {
  paintBlock: allBlockItem(filter: {key: {eq: "block_paint"}}) {
    edges {
      node {
        title
        description
        bgImage
        gallery
      }
    }
  }
}
</page-query>

<script>

export default {
  components: {
    Carousel: () =>
      import ('vue-carousel')
        .then(m => m.Carousel)
        .catch(),
    Slide: () =>
      import ('vue-carousel')
        .then(m => m.Slide)
        .catch(),
  },
  metaInfo () {
    return {
      title: 'Главная'
    }
  },
  data() {
    return {
      settings: require("../../data/theme.json"),
      gray: "#414141"
    }
  },
  computed: {
    paintBlock() {
      return this.$page.paintBlock.edges[0].node;
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
