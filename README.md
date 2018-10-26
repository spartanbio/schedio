# schedio-design

[Spartan's design system](https://spartanbio-design.netlify.com).

Built for [Vue](https://vuejs.org) with [Theo](https://github.com/salesforce-ux/theo) and
[SCSS](https://sass-lang.com/). Documented with [Storybook](https://storybook.js.org).

## Requirements

- Node 8.11.4+
- Vue 2.5+
- @vue/cli 3.0.5+

## Installation

```bash
$ npm install gitlab:spartanbio-marketing/schedio
```

## Usage

```js
// Import and register all components globally
import Vue from 'vue'
import Schedio from 'schedio-design'
import 'schedio-design/dist/schedio-design.min.css'

Vue.use(Schedio)
```

## Dev setup

```bash
$ git clone https://gitlab.com/spartanbio-marketing/schedio.git
$ cd schedio && npm install

# work should not be committed to master
$ git checkout -b <feature-branch>
```

### Build tokens and hot-reload for component development

```bash
# Build Theo tokens
$ npm run theo

# Served at localhost:6006
# Watches Vue components, SCSS, Storybook stories, and Theo tokens
$ npm run dev

# Scaffold a new component/story in src/components/<ComponentName>
# The following files will be created:
# + index.js
# + ComponentName.scss
# + ComponentName.stories.jsx
# + ComponentName.vue
$ npm run scaffold <ComponentName>
```

### Compile and minify component library for production

```bash
$ npm run build
```

### Builds docs for deploy

```bash
$ npm run build:storybook
```

### Lint and fix

```bash
$ npm run lint
```

## Contributing

This project uses [conventional commits](https://conventionalcommits.org/) to automatically generate
change logs, and tag releases.
