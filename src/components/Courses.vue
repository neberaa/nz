<template>
  <section class="courses container" id="courses">
    <h2 class="section-title" v-text="pageData.section_title" />
    <div class="courses-content">
      <aside class="active-data">
        <h4 class="active-title">About the course</h4>
        <p class="active-description" v-text="pageData.courses[activeIndex].description" />
        <button class="cta">{{pageData.cta_button_text}}</button>
      </aside>
      <div class="carousel-container">
        <VueSlickCarousel ref="carousel" v-bind="settings">
          <div
              class="item"
              @click="activeIndex=ind"
              :key="`course-${ind}}`"
              v-for="(course, ind) in pageData.courses">
            <h4 class="item__title" v-text="course.title" />
            <p class="item__price" v-text="course.price" />
            <div class="item__row" v-for="row in course.card_fields">
              <p v-text="row.title" />
              <p v-text="row.value" />
            </div>
          </div>
        </VueSlickCarousel>
        <div class="arrow left" @click="showNext()"/>
        <div class="arrow right" @click="showPrev()"/>
      </div>

    </div>
  </section>
</template>

<script>
import pageData from '../../data/pageBlocks/courses.json';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';

export default {
  name: 'Courses',
  inject: ['resp'],
  components: { VueSlickCarousel },
  data() {
    return {
      pageData,
      activeIndex: 0,
      settings: {
        "dots": false,
        "arrows": false,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 2,
        "slidesToScroll": 1,
        "touchThreshold": 5,
      }
    }
  },
  computed: {
  },
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
  },
  watch: {
  },
  beforeMount() {
  },
  mounted() {
  }
}
</script>

<style lang="scss">
  .courses {
    margin: 100px auto;
    .section-title {
      text-align: right;
    }
    &-content {
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 80px 0 60px;
      width: 100%;
      border: 5px solid;
      border-image: linear-gradient(90deg, rgb(255,245,106), rgb(255,255,255)) 1;
      .active-data {
        padding: 0 40px;
        display: flex;
        flex: 0 0 40%;
        flex-direction: column;
        .active-title, .active-description {
          text-align: center;
        }
        .active-title {
          margin-bottom: 30px;
        }
        .active-description {
          line-height: 24px;
          font-size: 0.9rem;
        }
        .cta {
          width: clamp(300px, 50%, 70%);
          margin: 55px auto 0;
        }
      }
      .carousel-container {
        width: 60%;
        position: relative;
        .arrow {
          position: absolute;
          background: url('../assets/icons/left-arrow.png') center no-repeat;
          width: 11px;
          height: 35px;
          cursor: pointer;
          padding: 20px;
          transition: all 400ms ease;
          &.left {
            top: -50px;
            transform: rotate(-90deg);
            &:hover {
              transform: translateX(-20px) rotate(-90deg) scale(1.2);
            }
          }
          &.right {
            bottom: -50px;
            right: 80px;
            transform: rotate(90deg);
            &:hover {
              transform: translateX(20px) rotate(90deg) scale(1.2);
            }
          }
        }
        .slick-slide {
          padding: 0 20px;
          box-sizing: border-box;
          opacity: 0.4;
          transform: scale(0.9);
          transition: transform 500ms ease;
          &.slick-current {
            opacity: 1;
            transform: scale(1);
          }
        }
        .item {
          cursor: pointer;
          align-items: center;
          position: relative;
          padding: 40px 20px 90px;
          border: 3px solid $navy;
          text-align: center;
          &__title {
            font-size: 1.8rem;
            margin-bottom: 10px;
          }
          &__price {
            margin-bottom: 20px;
            font-family: 'Poppins';
            font-weight: bold;
            font-size: 1.8rem;
          }
          &__row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid $navy;
            padding: 35px 0 5px;
          }
        }
      }
    }
  }
</style>
