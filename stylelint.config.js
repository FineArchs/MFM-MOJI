module.exports = {
  extends: [
    "@primer/stylelint-config",
    "stylelint-config-html/vue",
  ],
  rules: {
    // do not force using short/long notation for hex colors
    "color-hex-length": null,

    // allow factoring properties with empty lines
    "custom-property-empty-line-before": null,

    // allow two or more blocks with an identical selector
    "no-duplicate-selectors": null,

    // allow css-gradients, which is not allowed by default
    "plugin/no-unsupported-browser-features": [true, {
      severity: "error",
      ignore: ["css-gradients"],
    }],

    // scan all .vue files to resolve css vars
    "primer/no-undefined-vars": [true, {
      files: ["**/*.vue", "!node_modules"],
    }],

    // stop forcing to use primer/css vars
    "primer/box-shadow": null,
    "primer/spacing": null,
    "primer/borders": null,
    "primer/typography": null,
    "primer/colors": null,
  },
};
