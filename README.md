# schedio-design

Docs status: [![Netlify Status](https://api.netlify.com/api/v1/badges/aed4d7e6-2fb2-4c4d-bc03-6eccf5598462/deploy-status)](https://app.netlify.com/sites/spartanbio-design/deploys)

Build status: [![pipeline status](https://gitlab.com/spartanbio-marketing/schedio/badges/master/pipeline.svg)](https://gitlab.com/spartanbio-marketing/schedio/commits/master)

[Spartan's design system](https://spartanbio-design.netlify.com).

Built for [Vue](https://vuejs.org) with [Theo](https://github.com/salesforce-ux/theo) and
[SCSS](https://sass-lang.com/). Documented with [Storybook](https://storybook.js.org).

## Requirements

- Node 8.11.4+
- Vue 2.6+
- @vue/cli 3.4.0+

## Installation

```bash
$ npm install gitlab:spartanbio-marketing/schedio
```

## Usage

Import and register all components globally:

```js
import Vue from 'vue'
import Schedio from 'schedio-design'
import 'schedio-design/dist/schedio-design.css'

Vue.use(Schedio)
```

Or, import and register individual components to keep the bundle smaller:

```js
import Vue from 'vue'
import SButton from 'schedio-design/dist/components/SButton'
import SContainer from 'schedio-design/dist/components/SContainer'
import 'schedio-design/dist/schedio-design.css'

Vue.use(SButton)
Vue.use(SContainer)
```

Components can also be registered locally:

<!-- prettier-ignore-start -->
```vue
import { SButton } from 'schedio-design'

export default {
  name: 'ALocalComponent',
  components: {
    SButton
  }
}
```
<!-- prettier-ignore-end -->

Place the required fonts in a directory relative to the web root.

### SCSS Resources

SCSS can be used with `sass` and `sass-loader` by importing `'schedio-design/src/assets/styles.scss'`

To use SCSS resources, import the following in this order:

1. Required: `'schedio-design/src/assets/styles/tokens.scss'`
1. `'schedio-design/src/assets/styles/base.scss'`
1. `'schedio-design/src/assets/styles/global.scss'`

## Dev setup

```bash
$ git clone https://gitlab.com/spartanbio-marketing/schedio.git
$ cd schedio && npm install

# work should not be committed to master
$ git checkout -b <feature-branch>
```

> Make sure to run the terminal as an administrator.

`@` and `~` have been aliased to `src/` in webpack. `@@` and `~~` have also been aliased to the
project root.

### Build tokens and hot-reload for component development

```bash
# Build Theo tokens
$ yarn dist:tokens

# Served at localhost:6006
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
