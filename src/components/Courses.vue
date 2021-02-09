<template>
  <section class="courses container">
    <h2 class="section-title" v-text="pageData.section_title" />
    <div class="items">
      <aside class="active-item">
        <h4 v-text="pageData.courses[activeIndex].title" />
      </aside>
      <div class="item" @click="activeIndex=ind" :key="`course-${ind}}`" v-for="(course, ind) in pageData.courses">
        <h4 v-text="course.title" />
        <p class="course__price" v-text="course.price" />
      </div>
    </div>
  </section>
</template>

<script>
import pageData from '../../data/pageBlocks/courses.json';

export default {
  name: 'Courses',
  inject: ['resp'],
  data() {
    return {
      pageData,
      activeIndex: 0,
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
  .courses {
    margin: 100px auto;
    .section-title {
      text-align: right;
      margin: 0 auto;
    }
    .items {
      margin: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 50px 100px;
      width: 100%;
      border: 5px solid;
      border-image: linear-gradient(90deg, rgb(255,245,106), rgb(255,255,255)) 1;
      .active-item {

      }
      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 20px;
        border: 3px solid $navy;
      }
    }
  }

</style>
