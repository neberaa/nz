import DefaultLayout from "~/layouts/Default.vue";
import ResponsiveImage from "~/components/ResponsiveImage.vue";
import store from './store';
import deviceChecker from './deviceChecker';

export default function(Vue, { head, appOptions  }) {
  Vue.component("Layout", DefaultLayout);
  Vue.component("ResponsiveImage", ResponsiveImage);
  head.htmlAttrs = { lang: 'en' };
  Vue.mixin(deviceChecker);
  
  appOptions.store = store;
  head.link.push(
    {
      rel: 'preload',
      href: '/assets/fonts/poppins-regular-webfont.woff2',
      as: 'font',
      type: 'font/woff2',
      crossorigin: true,
    },
    {
      rel: 'preload',
      href: '/assets/fonts/poppins-bold-webfont.woff2',
      as: 'font',
      type: 'font/woff2',
      crossorigin: true,
    },
    {
      rel: 'preload',
      href: '/assets/fonts/playfairdisplay-bold-webfont.woff2',
      as: 'font',
      type: 'font/woff2',
      crossorigin: true,
    }
  )
}
