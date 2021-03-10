<template>
  <section class="contacts" id="contacts">
    <h2 class="section-title" v-text="pageData.section_title" />
    <div class="content">
      <h4 class="subtitle" v-text="pageData.subtitle"/>
      <p class="description" v-text="pageData.description"/>
      <div class="row">
        <form
          name="contacts"
          method="post"
          @submit.prevent="handleSubmit"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          class="form">
          <input type="hidden" name="form-name" value="contacts">
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <div class="form-row">
            <div class="field">
              <label
                  for="input1"
                  :class="[
                {top: formData.name.length > 0},
                {'invalid': tryFormSubmit && pageData.form_field1.is_required && formData.name.length < 1}]">
                {{pageData.form_field1.is_required ?
                  `${pageData.form_field1.placeholder} *` : pageData.form_field1.placeholder}}</label>
              <input
                name="name"
                id="input1"
                ref="input1"
                :class="{'invalid': tryFormSubmit && pageData.form_field1.is_required && formData.name.length < 1}"
                v-show="pageData.form_field1"
                :type="pageData.form_field1.type"
                v-model.trim="formData.name"/>
            </div>
            <div class="field with-margin">
              <label
                  for="input2"
                  :class="[
                {top: formData.email.length > 0},
                {invalid: tryFormSubmit && pageData.form_field2.is_required && formData.email.length < 1}]">
                {{pageData.form_field2.is_required ?
                  `${pageData.form_field2.placeholder} *` : pageData.form_field2.placeholder}}</label>
              <input
                  name="email"
                  id="input2"
                  ref="input2"
                  :class="{'invalid': tryFormSubmit && pageData.form_field2.is_required && formData.email.length < 1}"
                  v-show="pageData.form_field2"
                  :type="pageData.form_field2.type"
                  v-model.trim="formData.email"/>
            </div>
          </div>
          <div class="form-row">
            <div class="field full-width">
              <label
                  for="input3"
                  :class="[
                {top: formData.message.length > 0},
                {'invalid': tryFormSubmit && pageData.form_field3.is_required && formData.message.length < 1}]">
                {{pageData.form_field3.is_required ?
                  `${pageData.form_field3.placeholder} *` : pageData.form_field3.placeholder}}</label>
              <input
                  name="message"
                  id="input3"
                  ref="input3"
                  :class="{'invalid': tryFormSubmit && pageData.form_field3.is_required && formData.message.length < 1}"
                  v-show="pageData.form_field3"
                  :type="pageData.form_field3.type"
                  v-model.trim="formData.message"/>
            </div>
          </div>
          <button
            class="cta cta--navy"
            type="submit">
            {{pageData.form_button_text}}
          </button>
        </form>
        <div class="contact-info contact-info--desktop">
          <h5>Get in touch:</h5>
          <a :href="`mailto:${siteData.email}`" class="email">{{siteData.email}}</a>
          <a :href="`tel:${siteData.phone_number}`" class="phone">{{siteData.phone_number}}</a>
          <div class="socials">
            <h5>Socials:</h5>
            <div class="icons">
              <a
                class="social-item"
                v-for="item in siteData.socials"
                :href="socialLink(item.link)"
                :style="`background:url(${siteData.cloudinary_url+item.icon}) center no-repeat`" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-info contact-info--mobile">
      <h5>Get in touch:</h5>
      <a
        :href="`mailto:${siteData.email}`"
        class="email">
        {{siteData.email}}
      </a>
      <a
        :href="`tel:${siteData.phone_number}`"
        class="phone">
        {{siteData.phone_number}}
      </a>
      <div class="socials">
        <div class="icons">
          <a
            class="social-item"
            v-for="item in siteData.socials"
            :href="socialLink(item.link)"
            :style="`background:url(${siteData.cloudinary_url+item.icon}) center no-repeat`" />
        </div>
      </div>
    </div>
    <transition name="fade400">
      <div class="modal-container" v-show="modalIsShown && formSubmitted">
        <div class="overlay" @click="closeModal"/>
        <div class="modal">
          <h2 v-text="pageData.thank_you_title" />
          <p v-text="pageData.thank_you_description"/>
          <button class="close" @click="closeModal" />
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import pageData from '../../data/pageBlocks/contacts.json';
import siteData from '../../data/main.json';

export default {
  name: 'Contacts',
  inject: ['resp'],
  data() {
    return {
      pageData,
      siteData,
      formSubmitted: false,
      formData: {
        name: '',
        email: '',
        message: '',
      },
      errors: [],
      tryFormSubmit: false,
      modalIsShown: false,
    }
  },
  computed: {
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join("&");
    },
    checkForm () {
      const { name, email, message } = this.formData;
      const { input1, input2, input3 } = this.$refs;
      const formIsEmpty = name.length < 1 && email.length < 1 && message.length < 1;

      this.errors = [];

      if (formIsEmpty) {
        this.errors.push('Please fill in form fields');
      }
      if (input1.classList.contains('invalid') ||
          input2.classList.contains('invalid') ||
          input3.classList.contains('invalid')) {
        this.errors.push('Some fields are invalid')
      }
    },
    handleSubmit () {
      this.tryFormSubmit = true;
      this.checkForm();
      if (this.errors.length < 1) {
        const options = {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          method: 'POST',
          body: this.encode({
            "form-name": "contacts",
            "name": this.formData.name,
            "email": this.formData.email,
            "message": this.formData.message,
          })
        };
        fetch('/', options)
          .then(() => {
            this.formSubmitted = true;
            this.tryFormSubmit = false;
            this.modalIsShown = true;
            this.formData = {
              name: '',
              email: '',
              message: '',
            };
          })
          .catch(error => {
            console.log('Error on Contacts form submit', error);
          });
      }
    },
    socialLink(link) {
      return link.indexOf('http') > -1 ? link : `https://${link}`;
    },
    closeModal() {
      this.modalIsShown = false;
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

<style lang="scss" scoped>
  .contacts {
    max-width: calc(100% - 2.4rem);
    width: 100%;
    margin: 2rem auto;
    position: relative;
    @include screenBreakpoint2(desktop) {
      max-width: 1200px;
      margin-top: 5rem;
      padding-bottom: 30px;
      &::after {
        content: '';
        position: absolute;
        height: 50%;
        background: $gray;
        width: 50%;
        bottom: 0;
        right: 0;
        z-index: -1;
      }
    }
    .section-title {
      text-align: left;
    }
    .content {
      z-index: 1;
      position: relative;
      background: $gray;
      padding: 1rem;
      @include screenBreakpoint2(desktop) {
        background: none;
        padding: 0;
      }
      .subtitle, .description {
        @include screenBreakpoint2(desktop) {
          max-width: 50%;
        }
      }
      .subtitle {
        font-size: 2.25rem;
        font-family: 'Playfair Display';
        font-weight: bold;
        margin-bottom: 1rem;
        @include screenBreakpoint2(phone) {
          font-size: 1.9rem;
        }
      }
      .description {
        font-size: 1rem;
        line-height: 1.8rem;
      }
      .row {
        display: flex;
        align-items: flex-start;
        margin-top: 2rem;
        @include screenBreakpoint2(desktop) {
          margin-top: 5rem;
        }
      }
      .form {
        flex: 1 1 100%;
        @include screenBreakpoint2(desktop) {
          max-width: 70%;
          text-align: right;
        }
        @include screenBreakpoint2(phone) {
          text-align: center;
        }
        &-row {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          .field {
            position: relative;
            margin-bottom: 2rem;
            width: calc(50% - 20px);
            @include screenBreakpoint2(phone) {
              width: 100%;
              margin-bottom: 1rem;
            }
            &.full-width {
              width: 100%;
              margin-left: 0;
              margin-top: 50px;
            }
            &.with-margin {
              margin-left: 40px;
              width: calc(50% - 20px);
              @include screenBreakpoint2(phone) {
                width: 100%;
                margin-left: 0;
              }
            }
            input {
              width: 100%;
            }
            label {
              position: absolute;
              top: 10px;
              transition: all 300ms ease;
              padding: 0 5px;
              &.top {
                top: -7px;
                font-size: 0.8rem;
              }
            }
          }
        }
        .cta {
          right: 0;
          font-weight: 400;
          @include screenBreakpoint2(phone) {
            margin: 1rem auto;
          }
          @include screenBreakpoint2(tablet) {
            margin: 1rem auto;
          }
        }
      }
    }
    .contact-info {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      h5 {
        font-family: 'Playfair Display';
        font-weight: bold;
        font-size: 1.4rem;
        margin-bottom: 1rem;
      }
      .phone, .email {
        margin-bottom: 0.6rem;
        font-size: 0.9rem;
      }
      .socials {
        margin-top: 2rem;
        .icons {
          display: flex;
          .social-item {
            width: 33px;
            height: 33px;
            margin: 0;
            display: block;

            &:not(:last-of-type) {
              margin-right: 10px;
            }
          }
        }
      }
      &--mobile {
        display: flex;
        @include screenBreakpoint2(desktop) {
          display: none;
        }
      }
      &--desktop {
        display: none;
        max-width: calc(30% - 100px);
        margin-left: 100px;
        @include screenBreakpoint2(desktop) {
          display: flex;
        }
      }
    }
  }
</style>
