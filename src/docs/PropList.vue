<template>
  <div>
    <SHeading
      level="2"
      style="margin-top: 3rem;"
    >Prop list</SHeading>

    <STable
      is-striped
      is-hoverable
    >
      <template v-slot:header>
        <STableCell>Prop</STableCell>
        <STableCell>Type</STableCell>
        <STableCell>Default Value</STableCell>
        <STableCell>Required</STableCell>
      </template>

      <template>
        <STableRow
          v-for="({ name, type, defaultValue, required }, index) in sortedProps"
          :key="index"
        >
          <STableCell>
            <code>{{ name }}</code>
          </STableCell>

          <STableCell>
            <code>{{ type }}</code>
          </STableCell>

          <STableCell>
            <code v-if="typeof defaultValue !== 'undefined'">{{ defaultValue }}</code>
            <template v-else>&mdash;</template>
          </STableCell>

          <STableCell>
            <template v-if="required">{{ required }}</template>
            <template v-else>&mdash;</template>
          </STableCell>
        </STableRow>
      </template>
    </STable>
  </div>
</template>

<script>
import kebabCase from 'lodash.kebabcase'
import orderBy from 'lodash.orderby'

export default {
  name: 'PropList',

  props: {
    component: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      PropTypeMap: new Map([
        [String, 'string'],
        [Boolean, 'boolean'],
        [Number, 'number'],
        [Array, 'array'],
        [Object, 'object'],
        [Function, 'function'],
        [RegExp, 'RegExp'],
        [Date, 'Date']
      ]),

      rawProps: {}
    }
  },

  computed: {
    propList() {
      return Object.entries(this.rawProps).reduce((list, [name, details]) => {
        const type = Array.isArray(details.type)
          ? details.type.map(type => this.PropTypeMap.get(type)).join(', ')
          : this.PropTypeMap.get(details.type)

        let defaultValue

        if (typeof details.default === 'function') {
          defaultValue = typeof details.default() !== 'undefined' ? details.default() : '() => {}'
        } else if (details.default === '') {
          defaultValue = '""'
        } else {
          defaultValue = String(details.default)
        }

        const prop = {
          name: kebabCase(name),
          type,
          defaultValue,
          ...(details.hasOwnProperty('required') && { required: 'Required' })
        }

        return [...list, prop]
      }, [])
    },

    sortedProps() {
      return this.orderBy(this.propList, 'name')
    }
  },

  beforeMount() {
    this.getProps(this.component)
  },

  methods: {
    orderBy,

    getProps({ mixins, props }) {
      for (let name in props) {
        if (props.hasOwnProperty(name)) {
          this.$set(this.rawProps, name, props[name])
        }
      }

      // get props recursively if comopnent has mixins
      if (mixins) mixins.forEach(mixin => this.getProps(mixin))
    }
  }
}
</script>
