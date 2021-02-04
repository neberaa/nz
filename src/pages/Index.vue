<template>
  <Layout>
    <div v-for="edge in $page.blocks.edges" :key="edge.node.id">
      <h2>{{ edge.node.subtitle }}</h2>
      <ResponsiveImage style="width:200px;height:300px" :url="edge.node.hero_image"/>
    </div>

  </Layout>
</template>

<page-query>
query {
    blocks: allPageBlocks(filter: {page_key: {eq: "mainscreen"}}) {
      edges {
      node {
        id
        subtitle
        hero_image
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
  computed: {
    mainScreen() {
      return this.$page.blocks.edges;
    },
  },
  methods: {
  },
  mounted() {
    console.log('PAGE', this.$page.blocks, this.mainScreen);
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
