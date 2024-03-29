<template>
  <div class="layout" :class="[{'loading' :!isLoaded}, {fixed: menuIsOpen}]">
    <LoadingScreen v-show="!isLoaded"/>
      <transition name="fade" appear>
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
import smoothscroll from 'smoothscroll-polyfill';

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
    smoothscroll.polyfill();
    setTimeout(() => {
      this.setIsLoaded(true);
    }, 4000);
  }
}
</script>


<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  font-size: 14px;
  @include screenBreakpoint2(desktop) {
    font-size: 16px;
  }
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
.color--yellow {
  color: $yellow;
}
img {
  max-width: 100%;
}

.section-title {
  font-family: 'Playfair Display';
  font-weight: bold;
  font-size: 2.6rem;
  color: $yellow;
  text-transform: uppercase;
  max-width: 1200px;
  margin: 0 auto 1rem;
  @include screenBreakpoint2(desktop) {
    margin-bottom: 2.4rem;
    font-size: 4.6rem;
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
  &.invalid {
    border-bottom-color: $pink;
    color: $pink;
    &::placeholder {
      color: $pink;
    }
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
input {
  border-radius: 0;
}

input[type="search"] {
  -webkit-appearance: none;
}
label.invalid {
  color: $pink;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border-bottom: 1px solid $navy;
  -webkit-text-fill-color: $navy;
  -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  transition: background-color 5000s ease-in-out 0s;
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
  overflow-x: hidden;
  padding: 0 1.4rem;
  @include screenBreakpoint2(desktop) {
    padding: 0;
  }
}
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  display: flex;
  justify-content: center;
  align-items: center;
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($white, 0.9);
  }
  .modal {
    border: 3px solid $yellow;
    background: $white;
    padding: 2rem;
    z-index: 92;
    max-width: calc(100% - 2.4rem);
    max-height: 80vh;
    overflow: auto;
    position: relative;
    @include screenBreakpoint2(desktop) {
      max-width: 1200px;
      padding: 4rem;
      border: 5px solid $yellow;
    }
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      @include screenBreakpoint2(desktop) {
        margin-bottom: 4rem;
      }
      & > * {
        font-family: "Playfair Display";
      }
      .title {
        color: $navy;
        margin-right: 1rem;
        span {
          color: $yellow;
          text-transform: uppercase;
          font-size: 2rem;
        }
      }
      .price {
        color: $yellow;
      }
    }
    .close {
      position: absolute;
      top: 5px;
      right: 5px;
      display: block;
      width: 2rem;
      height: 2rem;
      font-size: 0;
      @include screenBreakpoint2(desktop) {
        width: 60px;
        height: 60px;
        top: 0;
        right: 0;
      }
      &::before,
      &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 1.4rem;
        background-color: $navy;
        transform: rotate(45deg) translate(-50%, -50%);
        transform-origin: top left;
        content: '';
        @include screenBreakpoint2(desktop) {
          height: 2rem;
        }
      }
      &::after {
        transform: rotate(-45deg) translate(-50%, -50%);
      }
    }
  }
}
.loading__title .letter {
  opacity: 0;
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
// Custom scrollbar
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
::-webkit-scrollbar-thumb {
  background: $navy;
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba($navy,0.4);
}

// Loading screen bubbles
.loading {
  span {
    position: absolute;
    background: transparent;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5);
    animation: animate 4s linear infinite;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      transform: scale(0.25) translate(-70%, -70%);
      background: radial-gradient(#fff, transparent);
    }
    @keyframes animate {
      0% {
        transform: translateY(0%);
        opacity: 1;
      }
      99% {
        opacity: 1;
      }
      100% {
        transform: translateY(-2000%);
        opacity: 0;
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
