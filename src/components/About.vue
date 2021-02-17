<template>
  <section class="about container" id="about">
    <h2 class="section-title" v-text="pageData.section_title" />
    <div class="content">
      <div class="column single-photo">
        <ResponsiveImage class="hero" :url="pageData.photos[0]"/>
      </div>
      <div class="column text" :style="{height: shortHeight}">
        <div class="article" ref="firstArticle" v-text="pageData.left_column_text" />
        <button class="read-more" ref="button" v-show="!articleIsShown" @click="showArticle">Read more</button>
        <div class="article" ref="lastArticle" v-text="pageData.right_column_text" />
      </div>
      <div class="column photos">
        <ResponsiveImage
          class="hero"
          :key="image"
          v-for="image in pageData.photos.slice(1)"
          :url="image"/>
      </div>
    </div>
  </section>
</template>

<script>
import pageData from '../../data/pageBlocks/aboutme.json';
import siteData from '../../data/main.json';
import {mapState} from "vuex";

export default {
  name: 'About',
  inject: ['resp'],
  data() {
    return {
      pageData,
      siteData,
      formIsShown: false,
      articleIsShown: false,
      shortHeight: 'auto',
      fullHeight: null,
    }
  },
  computed: {
    ...mapState([
      'isLoaded',
    ]),
  },
  methods: {
    showArticle() {
      this.shortHeight = this.fullHeight;
      this.articleIsShown = true;
    },
    countSectionHeight() {
      const {firstArticle, lastArticle, button} = this.$refs;
      this.shortHeight = `${firstArticle.clientHeight + button.clientHeight}px`;
      this.fullHeight = `${firstArticle.clientHeight + lastArticle.clientHeight + button.clientHeight}px`;
    }
  },
  watch: {
    isLoaded(loaded) {
      if (!this.resp.device.desktop && loaded) {
        this.countSectionHeight();
      }
    }
  },
  beforeMount() {
  },
  mounted() {
    if (!this.resp.device.desktop) {
      this.countSectionHeight();
    }
  }
}
</script>

<style lang="scss" scoped>
  .about {
    margin: 2rem auto 1.2rem;
    overflow: hidden;
    @include screenBreakpoint2(desktop) {
      max-width: 1200px;
      margin: 5rem auto 2.4rem;
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
          display: none;
          picture {
            max-width: 100%;
          }
          @include screenBreakpoint2(desktop) {
            display: flex;
          }
        }
        &.text {
          flex: 0 1 100%;
          align-items: flex-start;
          flex-wrap: wrap;
          transition: height 600ms ease;
          .article {
            line-height: 24px;
          }
          .read-more {
            color: $yellow;
            text-transform: uppercase;
            font-size: 1.2rem;
            cursor: pointer;
            margin-left: auto;
            padding-top: 1.2rem;
            @include screenBreakpoint2(desktop) {
              display: none;
            }
          }
          @include screenBreakpoint2(desktop) {
            flex-basis: calc(70% - 2.4rem);
            margin-left: 2.4rem;
            margin-bottom: 2.4rem;
            .article {
              width: calc((100% - 2.4rem) / 2);
              &:not(:last-of-type) {
                margin-right: 1.2rem;
              }
            }
          }
        }
        &.photos {
          position: relative;
          flex: 1 1 100%;
          bottom: 6.2rem;
          display: none;
          picture:not(:first-of-type) {
            margin-left: 1.2rem;
          }
          @include screenBreakpoint2(desktop) {
            display: flex;
          }
        }
      }
    }
  }

</style>
