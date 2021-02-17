<template>
  <div class="layout" :class="[{'loading' :!isLoaded}, {fixed: menuIsOpen}]">
    <LoadingScreen v-show="!isLoaded"/>
      <transition name="fade-delay" appear>
        <Header />
      </transition>
      <transition name="fade" appear>
        <main class="page-content" v-show="isLoaded">
          <slot/>
        </main>
      </transition>
      <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import {  mapState, mapMutations } from 'vuex';

export default {
  components: {
    Header,
    Footer,
    LoadingScreen
  },
  computed: {
    ...mapState([
      'isLoaded',
      'menuIsOpen',
    ]),
  },
  methods: {
    ...mapMutations(['setIsLoaded'])
  },
  mounted() {
    setTimeout(() => {
      this.setIsLoaded(true);
    }, 1500);
  }
}
</script>


<style lang="scss">

* {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: 'Poppins',Didact Gothic,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding: 0;
  font-size: 14px;
  transition: background 0.5s ease;
  overflow-x: hidden;
  color: $navy;
  @include screenBreakpoint2(desktop) {
    font-size: 16px;
  }
}
h1 {
  letter-spacing: -0.01em;
  font-size: 2.2rem;
  &.jumbo {
    font-size: 4rem;
  }
}
h2 {
  font-size: 2rem;
  &.jumbo {
    font-size: 3.75rem;
  }
}
h3 {
  font-size: 1.8rem;
}
h4 {
  font-size: 1.4rem;
}
h5 {
  font-size: 1.2rem;
}
a {
  color: inherit;
  text-decoration: none;
  font-size: 1rem;
}
p {
  font-size: 1rem;
}
span {
  font-size: 0.8rem;
  &.small {
    font-size: 0.6rem;
  }
}

img {
  max-width: 100%;
}

.section-title {
  font-family: 'Playfair Display';
  font-weight: bold;
  font-size: 4.6rem;
  color: $yellow;
  text-transform: uppercase;
  max-width: 1200px;
  margin: 0 auto 20px;
  @include screenBreakpoint2(desktop) {
    margin-bottom: 50px;
  }
}

button {
  border: none;
  overflow: visible;
  background-color: transparent;
  cursor: pointer;
  color: inherit;
  font: inherit;
  text-align: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
}
.cta {
  @include screenBreakpoint2(desktop) {
    padding: 20px 25px;
  }
  position: relative;
  padding: 10px 15px;
  background: transparent;
  font-size: 1.2rem;
  color: $navy;
  white-space: nowrap;
  font-weight: bold;
  border: 3px solid $yellow;
  text-align: center;
  overflow: hidden;
  min-width: 150px;
  //transition: all 300ms ease;
  &::before, &::after {
    background: $yellow;
    bottom: -10px;
    content: '';
    left: 0;
    position: absolute;
    top: -10px;
    -webkit-transform-origin: center left;
    transform-origin: center left;
    -webkit-transition: background 400ms ease-out 0s, -webkit-transform 400ms ease-out 0s;
    transition: background 400ms ease-out 0s, -webkit-transform 400ms ease-out 0s;
    transition: transform 400ms ease-out 0s, background 400ms ease-out 0s;
    transition: transform 400ms ease-out 0s, background 400ms ease-out 0s, -webkit-transform 400ms ease-out 0s;
    width: 100%;
    z-index: -1;
  }
  &::before {
    -webkit-transform: translateX(-101%);
    transform: translateX(-101%);
    opacity: 0;
  }
  &::after {
    -webkit-transform: translateX(101%);
    transform: translateX(101%);
  }
  &:hover::before {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  &:hover::after {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 0;
  }
  &.small {
    font-size: 0.8rem;
    padding: 10px;
  }
  &--navy {
    border-color: $navy;
    background: $navy;
    color: $white;
  }
}
input,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input {
  transition: all 300ms ease;
  font-family: 'Poppins';
  font-size: 1rem;
  padding: 10px 5px 5px;
  color: $navy;
  border: none;
  border-bottom: 1px solid $navy;
  outline: none;
  line-height: 1.4rem;
  background: transparent;
  position: relative;
  &::placeholder {
    color: $navy;
    font-size: 0.8rem;
    line-height: 1.4rem;
  }
  &:invalid {
    border-bottom-color: $pink;
    color: $pink;
  }
  &.invalid:focus {
    border-bottom-color: $pink;
    color: $pink;
    &::placeholder {
      color: $pink;
    }
  }
  &:focus {
    outline: none;
  }
}
textarea {
  resize: none;
  font-family: 'Poppins';
  font-size: 1rem;
  padding: 10px;
  &:focus {
    outline: none;
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  &.loading {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    .header, .page-content {
      opacity: 0;
    }
  }
  &.fixed {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  //padding: 0 6rem;
  overflow-x: hidden;
  @include screenBreakpoint2(phone) {
    padding: 0 2rem;
  }
}

.label {
  display: block;
  margin-bottom: 0.4rem;
}

.icon {
  fill: $navy;
  transition: fill 300ms ease;
  &--yellow {
    fill: $yellow;
  }
  &.cross {
    position: relative;
    background-color: transparent;
    border: none;

    &::before, &::after {
      position: absolute;
      content: ' ';
      width: 2px;
      background-color: $gray;
      top: 0;
      z-index: 10;
      right: 50%;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
    &.white {
      fill: $white;
      &::before, &::after {
        background-color: $white;
      }
    }
  }
}
// Vue js animation
// Fade
.fade-enter-active {
    transition: opacity 2s;
}
.fade-enter {
    opacity: 0;
}

// Fade
.fade-delay-enter-active {
  transition: opacity 2s 400ms;
}
.fade-delay-enter {
  opacity: 0;
}
// Fade 400
.fade400-enter-active {
  transition: opacity 400ms ease;
}
.fade400-enter {
  opacity: 0;
}
// Slide from top
.slide-enter-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
}

.slide-leave-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
    max-height: 600px;
    overflow: hidden;
}

.slide-enter, .slide-leave-to {
    overflow: hidden;
    max-height: 0;
}

//slide-right
.slide-right-enter-active {
  transition: all 0.5s  ease-in;
}
.slide-right-leave-active {
  transition: all 0.6s cubic-bezier(0, 1, 0.5, 1);
}
.slide-right-enter-to, .slide-right-leave {
  transform: translateX(0);
}
.slide-right-enter, .slide-right-leave-to {
  transform: translateX(100%);
}
</style>
