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
  }
}
</style>
