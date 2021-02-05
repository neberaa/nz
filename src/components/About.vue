<template>
  <section class="about container">
    <h2 class="section-title" v-text="pageData.section_title" />
    <div class="content">
      <div class="column single-photo">
        <ResponsiveImage class="hero" :url="pageData.photos[0]"/>
      </div>
      <div class="column text">
        <div class="article" v-text="pageData.left_column_text" />
        <div class="article" v-text="pageData.right_column_text" />
      </div>
      <div class="column photos"><ResponsiveImage class="hero" :key="image" v-for="image in pageData.photos.slice(1)" :url="image"/></div>
    </div>
  </section>
</template>

<script>
import pageData from '../../data/pageBlocks/aboutme.json';
import siteData from '../../data/main.json';

export default {
  name: 'About',
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
  .about {
    margin: 100px auto 50px;
    @include screenBreakpoint2(desktop) {
      max-width: 1200px;
    }
    .section-title {
      text-align: right;
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      .column {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        picture {
          position: relative;
        }
        &.single-photo {
          flex: 0 1 30%;
          align-items: flex-start;
          picture {
            max-width: 100%;
          }
        }
        &.text {
          flex: 0 1;
          flex-basis: calc(70% - 40px);
          margin-left: 40px;
          margin-bottom: 40px;
          align-items: flex-start;
        }
        &.photos {
          position: relative;
          flex: 1 1 100%;
          bottom: 100px;
          picture:not(:first-of-type) {
            margin-left: 20px;
          }
        }
      }
    }
  }

</style>
