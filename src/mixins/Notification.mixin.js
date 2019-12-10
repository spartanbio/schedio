export default {
  props: {
    containerParent: {
      type: String,
      default: '',
      validator: v => !v || v[0] === '#' || console.error('`containerParent` should be an id'),
    },
    // should the notification persist indefinitely?
    isIndefinite: {
      type: Boolean,
      default: false,
    },
    // how long should the notification last for?
    duration: {
      type: Number,
      default: 3000,
    },
  },

  data () {
    return {
      isVisible: false,
      // ensures we can have multiple, independent notification locations
      container: document.querySelector(
        `${this.containerParent || '#main'}-notifications.notification__container`,
      ),
    }
  },

  beforeMount () {
    this.initContainer()
  },

  mounted () {
    this.showNotification()
  },

  methods: {
    closeNotification () {
      clearTimeout(this.timer)
      // hide it
      this.isVisible = false
      // timeout allows vue transition to run
      setTimeout(() => {
        // remove the component instance
        this.$destroy()
        // remove the html element
        if (typeof this.$el.remove !== 'undefined') {
          this.$el.remove()
        } else if (typeof this.$el.parentNode !== 'undefined') {
          this.$el.parentNode.removeChild(this.$el)
        }
      }, 200)
    },

    showNotification () {
      // add the notification
      this.container.appendChild(this.$el)
      // show it
      this.isVisible = true
      // set timeout if needed
      if (!this.isIndefinite) this.timer = setTimeout(() => this.closeNotification(), this.duration)
    },

    /**
     * adds the notification container if it doesn't exist
     */
    initContainer () {
      if (!this.container) {
        // create the container
        this.container = document.createElement('div')
        this.container.classList.add('notification__container')
        // change to `position: absolute` if notification container should be pinned to an element
        if (this.containerParent) {
          this.container.classList.add('notification__container--has-parent')
        }
        // add an id so we can have multiple notification locations
        this.container.id = (this.containerParent.substr(1) || 'main') + '-notifications'
        // append the container
        document.querySelector(this.containerParent || 'body').appendChild(this.container)
      }
    },
  },
}
