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
      let names = Object.keys(props || {})

      if (mixins) mixins.forEach(mixin => names.push(...Object.keys(mixin.props)))

      return names.sort()
    }
  }
}
</script>
