<template>
  <transition name="fade" appear>
    <div class="loading" id="loading-container">
      <h1 class="loading__title">Loading....</h1>
    </div>
  </transition>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  methods: {
    createRandomBubbles() {
      const container = document.getElementById('loading-container');
      for (let i = 1; i <= 50; i++) {
        setTimeout(() => {
          const bubble = document.createElement('span');
          const size = 20 + Math.random() * 40;

          bubble.style.width = size + 'px';
          bubble.style.height = size + 'px';
          bubble.style.bottom = - Math.random() * 20 + Math.random() * 200 + 'px';
          bubble.style.left = innerWidth / 2 - 30 + Math.random() * 60 + 'px';

          container.appendChild(bubble);
          setTimeout(() => {
            bubble.remove();
          }, 4200);
        }, Math.random() * 1000);
      }
    },
    animateText() {
      const textWrapper = document.querySelector('.loading__title');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<a class='letter'>$&</a>");

      anime.timeline({loop: true})
        .add({
          targets: '.loading__title .letter',
          translateX: [40,0],
          translateZ: 0,
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: (el, i) => 500 + 30 * i
        })
        .add({
          targets: '.loading__title .letter',
          translateX: [0,-30],
          opacity: [1,0],
          easing: "easeInExpo",
          duration: 1500,
          delay: (el, i) => 100 + 30 * i
      });
    }
  },
  mounted() {
    this.createRandomBubbles();
    this.animateText();
  }
}
</script>

<style lang="scss">
  .loading {
    overflow: hidden;
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $yellow;
    &__title .letter {
      opacity: 0;
      font-size: 2.2rem;
      display: inline-block;
    }
  }
</style>
