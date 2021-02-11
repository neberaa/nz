<template>
  <section class="achievements">
    <h2 class="section-title" v-text="pageData.section_title" />
    <div class="content">
      <h4 class="subtitle" v-text="pageData.subtitle"/>
      <p class="description" v-text="pageData.description"/>
      <div class="row">
        <form
          v-show="!formSubmitted"
          name="contact"
          method="POST"
          netlify
          class="form"
          @submit.prevent="handleSubmit">
          <input
            :class="{'invalid': pageData.form_field1.is_required && formData.name.length < 1}"
            v-show="pageData.form_field1"
            :required="pageData.form_field1.is_required"
            :type="pageData.form_field1.type"
            :placeholder="pageData.form_field1.placeholder"
            v-model="formData.name"/>
          <input
            :class="{'invalid': pageData.form_field2.is_required && formData.email.length < 1}"
            v-show="pageData.form_field2"
            class="with-margin"
            :type="pageData.form_field2.type"
            :placeholder="pageData.form_field2.placeholder"
            v-model="formData.email"/>
          <input
            :class="{'invalid': pageData.form_field3.is_required && formData.message.length < 1}"
            v-show="pageData.form_field3"
            class="full-width"
            :type="pageData.form_field3.type"
            :placeholder="pageData.form_field3.placeholder"
            v-model="formData.message"/>
          <input type="hidden" name="form-name" value="contact">
          <button
            class="cta cta--navy"
            type="submit">
            {{pageData.form_button_text}}
          </button>
        </form>
        <div class="contacts">
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
  </section>
</template>

<script>
import pageData from '../../data/pageBlocks/contacts.json';
import siteData from '../../data/main.json';
import axios from 'axios';

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
    handleSubmit () {
      if (this.errors.length < 1) {
        const axiosConfig = {
          header: {"Content-Type": "application/x-www-form-urlencoded"}
        };
        axios
          .post(
            "/",
            this.encode({
              "form-name": "contacts",
              "name": this.formData.name,
              "email": this.formData.email,
              "message": this.formData.message,
            }),
            axiosConfig
          )
          .then(() => {
            this.formSubmitted = true;
          })
          .catch(error => {
            console.log('Error on Contacts form submit', error);
          });
      }
    },
    socialLink(link) {
      return link.indexOf('http') > -1 ? link : `https://${link}`;
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
  .achievements {
    margin: 100px auto 0;
    width: 100%;
    max-width: 1200px;
    position: relative;
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
    .section-title {
      text-align: left;
    }
    .content {
      z-index: 1;
      position: relative;
      .subtitle, .description {
        max-width: 50%;
      }
      .subtitle {
        font-size: 2.25rem;
        font-family: 'Playfair-bold';
        margin-bottom: 1rem;
      }
      .description {
        font-size: 1.2rem;
        line-height: 1.8rem;
      }
      .row {
        display: flex;
        align-items: flex-start;
        margin-top: 100px;
      }
      .form {
        max-width: 70%;
        text-align: right;
        input {
          width: 50%;
          margin-bottom: 30px;
          &.full-width {
            width: 100%;
            margin-left: 0;
            margin-top: 50px;
          }
          &.with-margin {
            margin-left: 40px;
            width: calc(50% - 40px);
          }
        }
        .cta {
          right: 0;
        }
      }
      .contacts {
        max-width: calc(30% - 100px);
        margin-left: 100px;
        display: flex;
        flex-direction: column;
        h5 {
          font-family: 'Playfair-bold';
          font-size: 1.4rem;
          margin-bottom: 1rem;
        }
        .phone, .email {
          margin-bottom: 0.6rem;
          font-size: 0.9rem;
        }
        .socials {
          margin-top: 40px;
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
      }
    }
  }

</style>
