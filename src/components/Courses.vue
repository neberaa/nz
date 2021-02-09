<template>
  <section class="courses">
    <h2 class="section-title" v-text="pageData.section_title" />
    <div class="items">
      <div class="item" v-for="course in pageData.courses">
        <h4 v-text="course.title" />
      </div>
    </div>
  </section>
</template>

<script>
import pageData from '../../data/pageBlocks/courses.json';
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
    .background-container {
      display: flex;
      flex-wrap: wrap;
      min-height: 550px;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      .items {
        margin: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 50px 100px;
        width: 100%;
        .item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          padding: 20px;
          &::before {
            display: block;
            content: url('../assets/icons/corona-palmares.png');
            position: absolute;
            top: -10px;
          }
          h4 {
            text-align: center;
          }
          &__value {
            font-size: 4.2rem;
            color: $yellow;
            margin-bottom: 50px;
          }
          &__title {
            color: $white;
            font-size: 1.5rem;
            text-transform: lowercase;
            padding: 0 60px;
          }
        }
      }
    }
  }

</style>
