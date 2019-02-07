<template>
  <div>
    <SHeading
      level="2"
      style="margin-top: 3rem;"
    >Prop list</SHeading>

    <ul>
      <li
        v-for="(propName, index) in propNames"
        :key="index"
      >
        {{ propName | kebabCase }}
      </li>
    </ul>
  </div>
</template>

<script>
import kebabCase from 'lodash.kebabcase'

export default {
  name: 'PropList',

  filters: {
    kebabCase
  },

  props: {
    component: {
      type: Object,
      required: true
    }
  },

  computed: {
    propNames() {
      // return deduped and sorted prop names
      return [...new Set(this.getProps(this.component))]
    }
  },

  methods: {
    getProps({ mixins, props }) {
      // handles cases where there are no props
      let stack = Object.keys(props || {})

      const getPropsRecursively = mxs => {
        mxs.forEach(mixin => {
          if (mixin.mixins) getPropsRecursively(mixin.mixins)
          stack.push(...Object.keys(mixin.props || {}))
        })
      }

      // get props recursively if comopnent has mixins
      if (mixins) getPropsRecursively(mixins)

      // return sorted prop names
      return stack.sort()
    }
  }
}
</script>
