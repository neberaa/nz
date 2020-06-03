<template>
  <Layout>
    <ClientOnly>
      <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section ocean-1">
          First section ...
        </div>
        <div class="section ocean">
          <kinesis-container class="image-container">
          Second section ...
            <kinesis-element
              tag="p"
              type="translate"
              :strength="20">
              gravity
            </kinesis-element>
            <kinesis-element
              tag="p"
              type="translate"
              :strength="-20">
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta.
            </kinesis-element>
            <kinesis-element
              tag="p"
              type="translate"
              :strength="5">
              LOREM
            </kinesis-element>
          </kinesis-container>
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
    KinesisContainer: () =>
      import ('vue-kinesis')
        .then(m => m.KinesisContainer)
        .catch(),
    KinesisElement: () =>
      import ('vue-kinesis')
        .then(m => m.KinesisElement)
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
  &.ocean-1 {
    background: url('https://res.cloudinary.com/nzh/image/upload/v1591114786/nzh/5c49c62721348_qwufzp.jpg') center no-repeat;
    background-size: cover;
  }
  &.ocean {
    background: url('https://res.cloudinary.com/nzh/image/upload/v1591114025/nzh/ocean_yotq5j.jpg') center no-repeat;
    background-size: cover;
  }
  .image-container {
    max-width: calc(100% - 60px);
    margin: auto;
  }
}
</style>
