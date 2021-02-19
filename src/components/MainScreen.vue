<template>
  <section
    class="main"
    :style="{height: sectionHeight}"
    ref="container"
    id="main">
    <div class="bordered">
      <div class="socials">
        <div class="icons">
          <a
              class="social-item"
              v-for="item in siteData.socials"
              :href="socialLink(item.link)"
              :style="`background:url(${siteData.cloudinary_url+item.icon}) center no-repeat`" />
        </div>
        <div class="content">
          <div class="arrow"/>
          <p class="text">Follow me</p>
        </div>
      </div>
      <div class="text-container">
        <h2 class="title jumbo" v-text="pageData.yellow_welcome_label" />
        <p class="description" v-text="pageData.subtitle"  />
        <h1 class="jumbo subtitle" v-text="pageData.jumbo_title"/>
      </div>
      <button class="cta" @click="showSignUpForm">{{pageData.cta_button_text}}</button>
    </div>
    <ResponsiveImage class="hero" :url="pageData.hero_image"/>
    <div class="cta-container">
      <button class="cta" @click="showSignUpForm">{{pageData.cta_button_text}}</button>
      <div class="arrow" @click="scrollDown"/>
    </div>
  </section>
</template>

<script>
import pageData from '../../data/pageBlocks/mainscreen.json';
import siteData from '../../data/main.json';
import { mapState } from 'vuex';

export default {
  name: 'MainScreen',
  inject: ['resp'],
  data() {
    return {
      pageData,
      siteData,
      formIsShown: false,
      sectionHeight: '100vh',
    }
  },
  computed: {
    ...mapState(['isLoaded']),
  },
  methods: {
    showSignUpForm() {
      this.formIsShown = !this.formIsShown;
    },
    socialLink(link) {
      return link.indexOf('http') > -1 ? link : `https://${link}`;
    },
    scrollDown() {
      const headerHeight = document.getElementById('header').clientHeight;
      const height = this.$refs.container.clientHeight + headerHeight;
      window.scrollTo({top: height, behavior: 'smooth'});
    },
    calcScreenHeight() {
      const headerHeight = document.getElementById('header').clientHeight;
      this.sectionHeight = `${window.innerHeight - headerHeight}px`;
    }
  },
  watch: {
    isLoaded(loaded) {
      if (loaded && !this.resp.device.desktop) {
        this.calcScreenHeight();
      }
    }
  },
  beforeMount() {
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
  .main {
    max-width: calc(100% - 140px);
    position: relative;
    @include screenBreakpoint2(desktop) {
      $socials-width: 83px;
      max-width: calc(1200px - #{$socials-width});
    }
    @include screenBreakpoint2(tablet) {
      max-width: 100vw;
    }
    @include screenBreakpoint2(phone) {
      max-width: 100vw;
    }
    margin: auto;
    .bordered {
      border: 5px solid $yellow;
      width: 55vw;
      padding: 5vw;
      top: 10vw;
      position: relative;
      display: none;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      @include screenBreakpoint2(desktop) {
        display: flex;
      }
      .text-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .title, .subtitle, .description {
          z-index: 10;
          position: relative;
        }
        .title, .subtitle {
          font-family: 'Poppins';
          font-weight: bold;
        }
        .title {
          color: $yellow;
        }
        .subtitle {
          margin-bottom: 1.4rem;
          line-height: 1;
        }
        .description {
          font-weight: bold;
          font-size: 1.2rem;
        }
      }
    }
    .hero {
      height: 70%;
      @include screenBreakpoint2(desktop) {
        width: 50vw;
        max-height: 100vh;
        left: 50%;
        top: 0;
        bottom: 0;
        height: auto;
      }
      @include screenBreakpoint2(tablet) {
        height: 80%;
      }
    }
    .cta-container {
      display: flex;
      flex-direction: column;
      width: 100vw;
      background-color: $navy;
      top: 70%;
      height: 30%;
      position: relative;
      justify-content: center;
      align-items: center;
      @include screenBreakpoint2(desktop) {
        display: none;
      }
      @include screenBreakpoint2(tablet) {
        top: 80%;
        height: 20%;
      }
      .cta {
        color: $white;
        margin-bottom: 1.4rem;
        font-weight: 400;
      }
      .arrow {
        background: url('../assets/icons/down-arrow.png') center no-repeat;
        width: 34px;
        height: 18px;
        cursor: pointer;
        animation: move 1s infinite;
      }
      @keyframes move {
        0% { transform: translateY(0) }
        50% { transform: translateY(10px) }
        100% { transform: translateY(0) }
      }
    }
    .socials {
      position: absolute;
      display: none;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      bottom: 30px;
      left: -80px;
      min-height: 300px;
      @include screenBreakpoint2(desktop) {
        display: flex;
      }
      .icons {
        .social-item {
          width: 33px;
          height: 33px;
          margin: auto;
          display: block;

          &:not(:last-of-type) {
            margin-bottom: 10px;
          }
        }
      }
      .content {
        .text {
          transform: rotate(-90deg);
          margin-top: 50px;
          font-family: 'Poppins';
          font-weight: bold;
          align-self: stretch;
        }
        .arrow {
          background: url('../assets/icons/left-arrow.png');
          width: 11px;
          height: 35px;
          margin: 50px auto;
        }
      }
    }
  }

</style>
