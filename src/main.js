import DefaultLayout from "~/layouts/Default.vue";
import ResponsiveImage from "~/components/ResponsiveImage.vue";
import store from './store';
import deviceChecker from './deviceChecker';
import 'fullpage.js/dist/fullpage.css';

export default function(Vue, { head, appOptions, isClient  }) {
  Vue.component("Layout", DefaultLayout);
  Vue.component("ResponsiveImage", ResponsiveImage);
  head.htmlAttrs = { lang: 'ru' };
  Vue.mixin(deviceChecker);
  if (isClient) {
    const VueFullPage = require('vue-fullpage.js').default;
    const VueKinesis = require('vue-kinesis');
    Vue.use(VueFullPage);
    Vue.use(VueKinesis);
  }
  
  appOptions.store = store;
}
