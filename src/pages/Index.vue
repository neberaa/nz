<template>
  <Layout>
    <ClientOnly>
      <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section">
          First section ...
        </div>
        <div class="section">
          Second section....
<!--          <parallax-container class="image-container">-->
<!--          Second section ...-->
<!--            <parallax-element-->
<!--              tag="p"-->
<!--              type="translation"-->
<!--              :parallaxStrength="20">-->
<!--              gravity-->
<!--            </parallax-element>-->
<!--            <parallax-element-->
<!--              tag="p"-->
<!--              type="translation"-->
<!--              :parallaxStrength="-20">-->
<!--              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta.-->
<!--            </parallax-element>-->
<!--            <parallax-element tag="p" type="translation" :parallaxStrength="5">LOREM</parallax-element>-->
<!--          </parallax-container>-->
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

<script>
export default {
  inject: ['resp'],
  components: {
    FullPage: () =>
      import ('vue-fullpage.js')
        .then(m => m.FullPage)
        .catch(),
    // ParallaxContainer: () =>
    //   import ('vue-mouse-parallax')
    //     .then(m => m.ParallaxContainer)
    //     .catch(),
    // ParallaxElement: () =>
    //   import ('vue-mouse-parallax')
    //     .then(m => m.ParallaxElement)
    //     .catch(),
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
