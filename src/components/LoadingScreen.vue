<template>
  <transition name="fade" appear>
    <div class="loading" id="loading-container">
      <h1>Loading....</h1>
    </div>
  </transition>
</template>

<script>

export default {
  methods: {
    createRandomBubbles() {
      const container = document.getElementById('loading-container');
      for (let i = 1; i <= 50; i++) {
        setTimeout(() => {
          const bubble = document.createElement('span');
          const size = 20 + Math.random() * 40;
          console.log('siz', size);
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
    }
  },
  mounted() {
    this.createRandomBubbles();
  }
}
</script>

<style lang="scss" scoped>
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
  }
</style>
