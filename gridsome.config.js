// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/**/*.scss'),
      ],
    })
}

module.exports = {
  siteName: "Natali Zharkova",
  siteUrl: `https://da4me.netlify.com`,
  titleTemplate: "%s | NZh",
  siteDescription: "All about N.Zh.",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "socials/**/*.md",
        typeName: "SocialItem",
        resolveAbsolutePaths: false,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blocks/**/*.md",
        typeName: "BlockItem",
        resolveAbsolutePaths: false,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  },
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    });
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  configureWebpack: () => {
    return {
      plugins: [
        new PrerenderSPAPlugin(
          path.resolve(__dirname, 'dist'),
          ['/'],
        ),
      ]
    }
  }
};
