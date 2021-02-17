import DefaultLayout from "~/layouts/Default.vue";
import ResponsiveImage from "~/components/ResponsiveImage.vue";
import store from './store';
import deviceChecker from './deviceChecker';
import siteData from '../data/main.json';
require('typeface-poppins');
require('typeface-playfair-display');

export default function(Vue, { head, appOptions  }) {
  Vue.component("Layout", DefaultLayout);
  Vue.component("ResponsiveImage", ResponsiveImage);
  head.htmlAttrs = { lang: 'en' };
  Vue.mixin(deviceChecker);
  
  appOptions.store = store;
  head.meta.push({
    name: 'keywords',
    content: siteData.key_words
  })
  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
  })
}
