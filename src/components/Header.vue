<template>
  <header class="header">
    <div class="container">
      <div class="text">
        <h2 class="title">{{siteData.header_title}}</h2>
        <p class="subtitle">{{siteData.header_subtitle}}</p>
      </div>
      <div class="menu-icon" :class="{'menu-icon--open': menuIsOpen}" @click="toggleMenu"/>
    </div>
    <transition name="slide">
      <div class="menu-container" v-show="menuIsOpen">
        <ul class="menu">
          <li
            v-for="item in menuContent"
            :key="`menu-item-${item.link}`"
            class="menu__item">
            <a @click.prevent="goTo(item)" :class="{'link--active': item.active}" class="link">
              {{item.title}}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script>
import ClickOutside from 'vue-click-outside';
import { mapMutations } from "vuex";

export default {
  directives: {
    ClickOutside
  },
  inject: ['resp'],
  data() {
    return {
      siteData: require("../../data/main.json"),
      href: null,
      menuIsOpen: false,
      menuContent: [
        {
          title: 'Main',
          link: '#main',
          active: true,
        },
        {
          title: 'About',
          link: '#about',
          active: false,
        },
        {
          title: 'Courses',
          link: '#courses',
          active: false,
        },
        {
          title: 'Contacts',
          link: '#contacts',
          active: false,
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    ...mapMutations(['setMenuIsOpen']),
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
    goTo(item) {
      this.menuIsOpen = false;
      if (!item.active) {
        setTimeout(() => {
          const element = document.getElementById(item.link.substr(1, item.link.length));
          const rect = element.getBoundingClientRect();
          const topPosition = rect.top + window.scrollY;
          window.scrollTo({top: topPosition, behavior: 'smooth'});
        }, 200);
      }
    }
  },
  watch: {
    menuIsOpen(state) {
      this.setMenuIsOpen(state);
    }
  },
  beforeMount() {
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
  .header {
    position: relative;
    top: 0;
    display: flex;
    height: 10vh;
    background-color: $navy;
    z-index: 10;
    @include screenBreakpoint2(desktop) {
      display: none;
    }
    .menu-container {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba($navy, 0.8);
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      .menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &__item {
          margin-bottom: 1rem;
          .link {
            color: $white;
            font-size: 3rem;
            text-transform: uppercase;
            &--active {
              color: $yellow;
            }
          }
        }
      }
    }
    .container {
      width: calc(100vw - 40px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text {
        .title {
          color: $yellow;
        }
        .subtitle {
          color: $white;
        }
      }
      .menu-icon {
        background: url('../assets/icons/menu.png') center no-repeat;
        width: 20px;
        height: 30px;
        z-index: 11;
        &--open {
          background-image: url('../assets/icons/cancel.png');
          width: 16px;
          height: 16px;
        }
      }
    }
  }

</style>
