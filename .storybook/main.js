module.exports = {
  stories: [
    "../src/components/**/*.stories.js",
  ],

  addons: [
    "@storybook/addon-essentials",
  ],

  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.glsl$/,
      loader: "webpack-glsl-minify",
      options: {
        preserveUniforms: true,
      },
    });
    return config;
  },

  framework: {
    name: "@storybook/vue3-webpack5",
    options: {}
  },

  docs: {
    autodocs: true
  }
}
