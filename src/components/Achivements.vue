<template>
  <section class="achivements">
    <h2 class="section-title" v-text="pageData.section_title" />
    <div
      class="content"
      :style="`background-image:url(${siteData.cloudinary_url+pageData.background_image})`">
    </div>
  </section>
</template>

<script>
import pageData from '../../data/pageBlocks/achivements.json';
import siteData from '../../data/main.json';

export default {
  name: 'Achivements',
  inject: ['resp'],
  data() {
    return {
      pageData,
      siteData,
      formIsShown: false,
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
  .achivements {
    margin: 100px 0;
    width: 100vw;
    .section-title {
      text-align: left;
      max-width: 1200px;
      margin: 0 auto 50px;
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      min-height: 550px;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

</style>
