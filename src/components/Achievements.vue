<template>
  <section class="achievements">
    <h2 class="section-title" v-text="pageData.section_title" />
    <div
      class="background-container"
      :style="`background-image:url(${siteData.cloudinary_url+pageData.background_image})`">
      <div class="items">
        <div class="item" v-for="item in pageData.achivements">
          <h4 class="item__value" v-text="item.value" />
          <h4 class="item__title" v-text="item.title" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import pageData from '../../data/pageBlocks/achievements.json';
import siteData from '../../data/main.json';

export default {
  name: 'Achievements',
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
  .achievements {
    margin: 2rem auto 0;
    overflow: hidden;
    @include screenBreakpoint2(desktop) {
      max-width: 1200px;
      margin: 5rem auto 0;
    }
    width: 100%;
    .section-title {
      text-align: left;
    }
    .background-container {
      display: flex;
      flex-wrap: wrap;
      min-height: 550px;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      @include screenBreakpoint2(phone) {
        min-height: 100vh;
      }
      .items {
        margin: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        flex-direction: column;
        max-width: calc(100vw - 1.2rem);
        @include screenBreakpoint2(desktop) {
          flex-direction: row;
          max-width: calc(1200px + 200px + 40px);
          padding: 50px 100px;
        }
        .item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          padding: 20px;
          &::before {
            content: url('../assets/icons/corona-palmares.png');
            position: absolute;
            top: 0;
            display: none;
            @include screenBreakpoint2(desktop) {
              display: block;
            }
          }
          h4 {
            text-align: center;
          }
          &__value {
            color: $yellow;
            font-weight: 600;
            font-size: 3rem;
            @include screenBreakpoint2(desktop) {
              margin-bottom: 20px;
              font-size: 4.2rem;
            }
          }
          &__title {
            color: $white;
            font-size: 1.5rem;
            text-transform: lowercase;
            padding: 0 60px;
            font-weight: 400;
          }
        }
      }
    }
  }

</style>
