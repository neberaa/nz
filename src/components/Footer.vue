<template>
  <footer class="footer">
  </footer>
</template>

<script>
import LocationIcon from '../assets/icons/location.svg';
import EmailIcon from '../assets/icons/envelope.svg';
import PhoneIcon from '../assets/icons/telephone.svg';
export default {
  components: {
    LocationIcon,
    EmailIcon,
    PhoneIcon,
  },
  data() {
    return {
      contacts: require("../../data/contacts.json"),
      settings: require("../../data/theme.json"),
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  font-size: 0.8rem;
  padding: 3rem 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @include screenBreakpoint2(phone) {
      flex-direction: column;
    }
    .column {
      display: flex;
      flex-direction: column;
      .title {
        color: $red;
        margin-top: 0;
        font-size: 20px;
      }
      .link {
        margin-bottom: 5px;
        font-size: 16px;
        color: $gray;
        font-weight: bold;
      }
      .icon {
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-right: 5px;
      }
       &.logo {
          width: 150px;
         margin-top: 20px;
         @include screenBreakpoint2(phone) {
           margin-top: 0;
           margin-bottom: 20px;
           width: 120px;
         }
        }
       &.nav {
         @include screenBreakpoint2(phone) {
           margin-bottom: 20px;
         }
       }
       &.contacts {

      }
    }
  }
}
</style>
