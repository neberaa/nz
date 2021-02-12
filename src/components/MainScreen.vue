<template>
  <section class="main">
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
      <h2 class="title jumbo" v-text="pageData.yellow_welcome_label" />
      <p class="description" v-text="pageData.subtitle"  />
      <h1 class="jumbo subtitle" v-text="pageData.jumbo_title"/>
      <button class="cta" :click="showSignUpForm">{{pageData.cta_button_text}}</button>
    </div>
    <ResponsiveImage class="hero" :url="pageData.hero_image"/>
  </section>
</template>

<script>
import pageData from '../../data/pageBlocks/mainscreen.json';
import siteData from '../../data/main.json';

export default {
  name: 'MainScreen',
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
    showSignUpForm() {
      this.formIsShown = !this.formIsShown;
    },
    socialLink(link) {
      return link.indexOf('http') > -1 ? link : `https://${link}`;
    }
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
  .main {
    height: 100vh;
    @include screenBreakpoint2(desktop) {
      $socials-width: 83px;
      max-width: calc(1200px - #{$socials-width});
    }
    margin: auto;
    .bordered {
      border: 5px solid $yellow;
      width: 55vw;
      padding: 5vw;
      top: 10vw;
      position: relative;
      display: flex;
      flex-direction: column;
      height: 50vh;
      justify-content: space-between;
      align-items: flex-start;
      .title, .subtitle, .description {
        z-index: 10;
        position: relative;
        margin-bottom: 1.2rem;
      }
      .title, .subtitle {
        font-family: 'Poppins-bold';
      }
      .title {
        color: $yellow;
        margin-bottom: 1.4rem;
      }
     .description {
       font-weight: bold;
       font-size: 1.2rem;
     }
    }
    .hero {
      width: 50vw;
      max-height: 100vh;
      left: 50vw;
    }
    .socials {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      bottom: 30px;
      left: -80px;
      min-height: 300px;
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
          font-family: 'Poppins-bold';
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
