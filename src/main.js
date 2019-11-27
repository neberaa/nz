import DefaultLayout from "~/layouts/Default.vue";
import ResponsiveImage from "~/components/ResponsiveImage.vue";
import store from './store';
import deviceChecker from './deviceChecker';
import VueFullPage from 'vue-fullpage.js'
import 'fullpage.js/dist/fullpage.css';

export default function(Vue, { head, appOptions }) {
  Vue.component("Layout", DefaultLayout);
  Vue.component("ResponsiveImage", ResponsiveImage);
  head.htmlAttrs = { lang: 'ru' };
  Vue.mixin(deviceChecker);
  Vue.use(VueFullPage);
  
  appOptions.store = store;
}
