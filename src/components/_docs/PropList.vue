<template>
  <div>
    <BaseHeading level="2" style="margin-top: 2em;">Prop list</BaseHeading>

    <ul>
      <li v-for="(propName, index) in propNames" :key="index">
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
      const { mixins, props } = this.component

      // handles cases where there are no props
      let names = Object.keys(props || {})

      // get props if they're from a mixin
      if (mixins) mixins.forEach(mixin => names.push(...Object.keys(mixin.props || {})))

      // return deduped and sorted
      return [...new Set(names.sort())]
    }
  }
}
</script>
