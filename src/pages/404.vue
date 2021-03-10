<template>
  <Layout>
    <div class="container">
      <div class="error-page">
        <div class="error-page__content">
          <h1 class="title">Ooops!</h1>
          <h4 class="subtitle">This is not the page you are looking for</h4>
          <g-link to="/" class="cta">Home</g-link>
        </div>
        <div class="error-page__img"/>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: 'Error'
    }
  },
}
</script>

<style lang="scss" scoped>
  .error-page {
    min-height: 50vh;
    display: flex;
    justify-content: space-between;
    position: relative;
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      max-width: calc(100% - 400px);
      border: 5px solid $yellow;
      padding: 2rem;
      @include center('both');
      @include screenBreakpoint2(tablet) {
        max-width: calc(100% - 300px);
      }
      @include screenBreakpoint2(phone) {
        max-width: calc(100% - 150px);
      }
      .title {
        font-size: 5rem;
        color: $navy;
        margin-bottom: 1rem;
        @include screenBreakpoint2(desktop) {
          font-size: 6rem;
        }
      }
      .title,
      .subtitle,
      .error {
        margin-top: 0;
      }
      .subtitle {
        margin-bottom: 2rem;
      }
    }
  }

</style>

