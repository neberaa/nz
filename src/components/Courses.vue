<template>
  <section class="courses container" id="courses">
    <h2 class="section-title" v-text="pageData.section_title" />
    <div class="courses-content">
      <aside class="active-data">
        <h4 class="active-title">About the course</h4>
        <p class="active-description" v-text="pageData.courses[activeIndex].description" />
        <button @click="openModal" class="cta">{{pageData.cta_button_text}}</button>
      </aside>
      <div class="carousel-container">
        <VueSlickCarousel @afterChange="setActiveData" ref="carousel" v-bind="settings">
          <div
            class="item"
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
      <div class="items" ref="items">
        <div
          class="item"
          :class="{'item--short': expandedInd !== ind}"
          :key="`course-${ind}}`"
          v-for="(course, ind) in pageData.courses">
          <h4 class="item__title" v-text="course.title" />
          <p class="item__price" v-text="course.price" />
          <button
            v-show="expandedInd !== ind"
            class="read-more"
            :class="{invisible: expandedInd !== ind}"
            @click="setFullHeight(ind)">{{course.read_more_label}}</button>
          <p class="item__description" v-text="course.description" />
          <div class="item__row" v-for="row in course.card_fields">
            <p v-text="row.title" />
            <p v-text="row.value" />
          </div>
          <button class="cta" @click="openModal">Get it</button>
        </div>
      </div>
    </div>
    <transition name="fade400">
      <div class="modal-container" v-show="modalIsShown">
        <div class="overlay" @click="closeModal"/>
        <div class="modal">
          <h2>Hello</h2>
          <p>Test description</p>
          <form
              name="course-submit"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              class="form"
              @submit.prevent="handleSubmit">
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <input
                v-model.trim="formData.name"/>
            <input
                v-model.trim="formData.email"/>
            <input
                v-model.trim="formData.message"/>
            <input type="hidden" name="form-name" value="course-submit" />
            <button
                class="cta cta--navy"
                type="submit">
              {{courseForm.}}
            </button>
          </form>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import pageData from '../../data/pageBlocks/courses.json';
import courseForm from '../../data/courseForm.json';
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
        "autoplay": false,
      },
      expandedInd: null,
      minHeight: '175px',
      modalIsShown: false,
      formData: {
        name: '',
        email: '',
        message: '',
      },
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
    resetHeight() {
      this.$refs.items.childNodes.forEach(item => item.style.height = this.minHeight);
    },
    setActiveData(ind) {
        this.activeIndex = ind;
    },
    setFullHeight(ind) {
      this.resetHeight();
      this.expandedInd = ind;
      const activeItem = this.$refs.items.childNodes[ind];
      let sum = 0;
      activeItem.childNodes.forEach(item => sum += item.offsetHeight);
      const indent = '1.4rem * 2 + 2rem';
      activeItem.style.height = `calc(${sum}px + ${indent})`;
    },
    closeModal() {
      this.modalIsShown = false;
    },
    openModal() {
      this.modalIsShown = true;
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
    margin: 2rem auto 0;
    @include screenBreakpoint2(desktop) {
      margin-top: 5rem;
    }
    .section-title {
      text-align: right;
    }
    &-content {
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      @include screenBreakpoint2(desktop) {
        border: 5px solid;
        border-image: linear-gradient(90deg, rgb(255,245,106), rgb(255,255,255)) 1;
        padding: 80px 0 60px;
      }
      @include screenBreakpoint2(phone) {
        padding: 1rem 0;
      }
      @include screenBreakpoint2(tablet) {
        flex-direction: column;
        padding: 2rem 0;
      }
      .active-data {
        padding: 0 40px;
        display: flex;
        flex: 0 0 40%;
        flex-direction: column;
        @include screenBreakpoint2(phone) {
          display: none;
        }
        @include screenBreakpoint2(tablet) {
          flex-basis: 100%;
          order: 2;
          margin-top: 3rem;
        }
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
          @include screenBreakpoint2(tablet) {
            width: clamp(200px, 20%, 30%);
          }
        }
      }
      .carousel-container {
        width: 100%;
        position: relative;
        @include screenBreakpoint2(desktop) {
          width: 60%;
        }
        @include screenBreakpoint2(phone) {
          display: none;
        }
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
            @include screenBreakpoint2(desktop) {
              &:hover {
                transform: translateX(-20px) rotate(-90deg) scale(1.2);
              }
            }
          }
          &.right {
            bottom: -50px;
            right: 0;
            transform: rotate(90deg);
            @include screenBreakpoint2(desktop) {
              right: 80px;
              &:hover {
                transform: translateX(20px) rotate(90deg) scale(1.2);
              }
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
      }
      .items {
        display: none;
        @include screenBreakpoint2(phone) {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .item {
          //height: 175px;
          transition: height 600ms ease;
          overflow: hidden;
          cursor: default;
          padding: 1.2rem;
          &:not(:last-of-type) {
            margin-bottom: 2rem;
          }
          &--short {
            height: 175px;
          }
          &__title {
            font-size: 2rem;
            margin-bottom: 0;
          }
          &__price {
            margin: 0;
            padding-bottom: 1.4rem;
          }
          .read-more {
            text-transform: uppercase;
            font-size: 1.4rem;
            color: $yellow;
            text-align: right;
            opacity: 0;
            transition: opacity 400ms ease;
            &.invisible {
              opacity: 1;
            }
          }
          .cta {
            margin-top: 2rem;
          }
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
        &__description {
          padding-top: 2rem;
        }
      }
    }
  }
</style>
