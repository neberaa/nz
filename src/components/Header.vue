<template>
  <header class="header" id="header">
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
        <div class="social">
          <a
            class="social__item"
            v-for="item in siteData.socials"
            :href="socialLink(item.link)"
            :style="`background:url(${siteData.cloudinary_url+item.icon}) center no-repeat`" />
          </div>
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
    },
    socialLink(link) {
      return link.indexOf('http') > -1 ? link : `https://${link}`;
    },
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
    height: 14vh;
    background-color: $navy;
    z-index: 10;
    @include screenBreakpoint2(desktop) {
      display: none;
    }
    @include screenBreakpoint2(tablet) {
      height: 10vh;
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
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
        &__item {
          margin-bottom: 1rem;
          .link {
            color: $white;
            font-size: 2rem;
            text-transform: uppercase;
            cursor: pointer;
            &--active {
              color: $yellow;
            }
          }
        }
      }
      .social {
        display: flex;
        align-items: center;
        &__item {
          width: 33px;
          height: 33px;
          margin: auto;
          display: block;
          &:not(:last-of-type) {
            margin-right: 10px;
          }
        }
      }
    }
    .container {
      width: 100vw;
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
        cursor: pointer;
        &--open {
          background-image: url('../assets/icons/cancel.png');
          width: 16px;
          height: 16px;
        }
      }
    }
  }

</style>
