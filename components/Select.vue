<template>
  <select 
    class="select"
    :class="selectClass"
    :value="selected"
    @input="handle($event)"
  >
    <option
      v-for="(item, index) in options"
      :key="index"
      :value="item.value"
    >
      {{ item.text }}
    </option>
  </select>
</template>
<script>
export default {
  name: 'InputSelect',
  props: { 
    options: { type: Array, required: true},
    selectClass: { type: String, default: '' }
  },

  data () {
    return {
      selected: '',
    }
  },

  methods: {
    handle (event) {
      this.selected = event.target.value
      this.$emit('input', this.selected)
    }
  }
}
</script>
<style lang="scss" scoped>
  .select {
    height: 36px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding:0 10px;
    border: none;
    color: color(text-gray);
    outline: none;
    background-color: color(white);

    &:focus {
      border: none;
    }
  }
</style>