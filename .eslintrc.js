module.exports = {
  env: {
    browser: true,
  },
  settings: {
    "import/resolver": {
      webpack: { config: "webpack.config.js" },
    },
  },
  extends: ["airbnb-base", "plugin:compat/recommended", "plugin:storybook/recommended", "prettier"],
  rules: {
    // redundant "else" can help readablity
    "no-else-return": "off",

    // ternary ops aren't that unreadable IMO
    "no-nested-ternary": "off",

    // bitwise ops are sometimes useful
    "no-bitwise": "off",

    // "continue" can help readablity as like "early-return"
    "no-continue": "off",

    // allow named export
    "import/prefer-default-export": "off",

    // allow importing devDependencies from inside "tests" dir
    "import/no-extraneous-dependencies": ["error", {
      devDependencies: [
        "tests/**/*",
        "webpack.config.js",
        "playwright.config.ts",
      ],
      optionalDependencies: false,
    }],

    // fns and classes can be referred before defined
    "no-use-before-define": ["error", {
      // functions: true,
      // classes: true,
      functions: false,
      classes: false,
      variables: true,
    }],

    // do not enforce destructuring for arrays (since they can be rather unreadable sometime)
    "prefer-destructuring": ["error", {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        // array: true,
        array: false,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    }],

    // arithmetic ops (eccept for "%" and "**") can be mixed without parens
    "no-mixed-operators": ["error", {
      groups: [
        ["%", "**"],
        // ['%', '+'],
        // ['%', '-'],
        ["%", "*"],
        ["%", "/"],
        // ['/', '*'],
        ["&", "|", "<<", ">>", ">>>"],
        ["==", "!=", "===", "!=="],
        ["&&", "||"],
      ],
      allowSamePrecedence: false,
    }],

    // labels are allowed to break nested loops
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "ForOfStatement",
      // 'LabeledStatement',
      "WithStatement",
    ],
    "no-labels": ["error", {
      // allowLoop: false,
      allowLoop: true,
      allowSwitch: false,
    }],

    // omit extensions
    "import/extensions": ["error", {
      js: "never",
      ts: "never",
    }],

    // newline around curly braces can be omitted as long as they are consistent
    "object-curly-newline": ["error", {
      ObjectExpression: { consistent: true },
      ObjectPattern: { consistent: true },
      ImportDeclaration: { consistent: true },
      ExportDeclaration: { consistent: true },
    }],
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      rules: {
        // non-null assertion is allowed as long as we are sure that it's non-null
        "@typescript-eslint/no-non-null-assertion": "off",

        // allow multiple attrs per line
        "vue/max-attributes-per-line": "off",

        // allow use of reserved component names
        "vue/no-reserved-component-names": "off",

        // allow use of single-word component names
        "vue/multi-word-component-names": "off",
      },
    },
  ],
};
