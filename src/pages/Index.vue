<template>
  <Layout>
    <ClientOnly>
      <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section">
          First section ...
        </div>
        <div class="section">
          <div id="scene">
            <div data-depth="5">My first Layer!</div>
            <div data-depth="1.6">My second Layer!</div>
          </div>
        </div>
        <div class="section">
          Third section ...
        </div>
        <div class="section">
          Fourth section ...
        </div>
        <div class="section">
          Fifth section ...
        </div>
        <div class="section">
          Sixth section ...
        </div>
      </full-page>
    </ClientOnly>
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
import Parallax from 'parallax-js'
export default {
  inject: ['resp'],
  components: {
    FullPage: () =>
      import ('vue-fullpage.js')
        .then(m => m.FullPage)
        .catch(),
  },
  metaInfo () {
    return {
      title: 'Natalia Zharkova'
    }
  },
  data() {
    return {
      settings: require("../../data/theme.json"),
      options: {
        licenseKey: null,
        menu: '#menu',
        anchors: ['main', 'about', 'events', 'awards', 'gallery', 'schedule'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#41b883', '#ff5f45', '#0798ec'],
        navigation: true,
      },
    }
  },
  computed: {
    paintBlock() {
      return this.$page.paintBlock.edges[0].node;
    },
    isDesktop() {
      return this.resp.device.desktop;
    }
  },
  methods: {
    initParallax() {
      const scene = document.getElementById('scene');
      const parallaxInstance = new Parallax(scene);
    }
  },
  mounted() {
    this.$nextTick(() => {
      if(this.isDesktop) {
        this.initParallax();
      }
    });
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
}
</style>
