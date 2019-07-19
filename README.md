# Schedio

[Spartan's design system](https://spartanbio-design.netlify.com).

Built for [Vue](https://vuejs.org) with [Theo](https://github.com/salesforce-ux/theo) and
[SCSS](https://sass-lang.com/). Documented with [Storybook](https://storybook.js.org).

## Requirements

- Node 10.16.0+
- Vue 2.6+
- @vue/cli 3.4.0+

## Installation

```bash
$ yarn add @spartanbio/schedio
```

## Usage

Import and register all components globally:

```js
import Vue from 'vue'
import Schedio from '@spartanbio/schedio'
import '@spartanbio/schedio/dist/schedio.css'

Vue.use(Schedio)
```

Or, import and register individual components to keep the bundle smaller:

```js
import Vue from 'vue'
import SButton from '@spartanbio/schedio/dist/components/SButton'
import SContainer from '@spartanbio/schedio/dist/components/SContainer'
import '@spartanbio/schedio/dist/schedio.css'

Vue.use(SButton)
Vue.use(SContainer)
```

Components can also be registered locally:

```vue
<!-- ALocalComponent.vue -->

<script>
import { SButton } from '@spartanbio/schedio'

export default {
  name: 'ALocalComponent',
  components: {
    SButton,
  },
}
</script>
```

**N.B.:** Fonts are not included in this bundle.

### SCSS Resources

SCSS can be used with `sass` and `sass-loader` by importing
`'@spartanbio/schedio/src/assets/styles.scss'`

To use SCSS resources, import the following in this order:

1. Required: `'@spartanbio/schedio/src/assets/styles/tokens.scss'`
1. `'@spartanbio/schedio/src/assets/styles/base.scss'`
1. `'@spartanbio/schedio/src/assets/styles/global.scss'`

## Dev setup

```bash
$ git clone https://gitlab.com/spartanbio-marketing/schedio.git
$ cd schedio && npm install

# work should not be committed to master
$ git checkout -b <feature-branch>
```

`@` and `~` have been aliased to `src/` in webpack. `@@` and `~~` have also been aliased to the
project root.

### Build tokens and hot-reload for component development

```bash
# Build Theo tokens
$ yarn dist:tokens

# Served at localhost:6006, with `@vue/devtools` on localhost:8989
# Watches Vue components, SCSS, Storybook stories, and Theo tokens
$ yarn dev

# Scaffold a new component/story in src/components/<ComponentName>
# The following files will be created:
# + index.js
# + <ComponentName>.scss
# + <ComponentName>.stories.jsx
# + <ComponentName>.vue
# + __tests__/<ComponentName>.spec.js
$ yarn scaffold <ComponentName>
```

### Compile and minify component library for production

```bash
$ yarn build
```

### Builds docs for deploy

```bash
$ yarn build:storybook
```

### Lint and fix

```bash
$ yarn lint
```

### Tests

```bash
# generate any missing unit tests
$ yarn add-unit-tests

# run all tests
$ yarn test

# run only unit tests
$ yarn test:unit
```

## Contributing

This project uses [conventional commits](https://conventionalcommits.org/) to automatically generate
change logs, and tag releases.
