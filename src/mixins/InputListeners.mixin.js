export default {
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: (event) => {
          this.$emit(
            'input',
            event.target.type === 'checkbox' ? event.target.checked : event.target.value,
          );
        },
      };
    },
  },
};
