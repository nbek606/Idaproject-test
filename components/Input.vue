<template>
    <div 
      :class="inputClass"
      class="input_group"
    >
      <label class="label">
        {{ label }}
        <span 
          v-if="required" 
          class="required">
          *
        </span>
      </label>
      <!--Обычный текст--->
      <input
        v-if="view == 'input'"
        class="input"
        :class="{ 'no-validate': !validation }"
        :value="inputValue"
        :placeholder="placeholder"
        :type="type"
        :required="required"
        @input="handle($event)"
      />
      <!--Большой текст-->
      <textarea
        v-if="view == 'text-area'"
        class="text-area"
        :class="{ 'no-validate': !validation }"
        :value="inputValue"
        :placeholder="placeholder"
        :type="type"
        :required="required"
        @input="handle($event)"
      />
      <!--Денежные средства-->
      <money
        v-if="view == 'money'"
        class="input"
        :class="{ 'no-validate': !validation }"
        :value="inputValue"
        :placeholder="placeholder"
        :required="required"
        :type="type"
        v-bind="money"
        @input="handle($event)"
      />
      <div 
        v-if="!validation"
        class="error-message"
      >
          Поле является обязательным
      </div>
    </div>
</template>
<script>

/* import utils */
import { inputValidation } from '@/utils/index.js'

/* import components */
import { Money } from 'v-money'

export default {
  name: 'InputText',
  components: {
    Money
  },

  props: {
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    required: { type: Boolean, default: true },
    type: { type: String, default: 'text' },
    inputClass: { type: String, default: '' },
    view: { type: String, default: 'input'}
  },

  data () {
    return {
      inputValue: '',
      money: {
        decimal: ',',
        thousands: ' ',
        precision: 0,
        masked: false
      }
    }
  },

  computed: {
    validation () {
      if (!this.required) {
        return true
      }

      return inputValidation(this.inputValue)
    }
  },
  methods: {
    handle (event) {
      this.inputValue = this.view == 'money' ? event : event.target.value

      this.$emit('input', this.inputValue)
    }
  }
}
</script>
<style lang="scss" scoped>
  .input_group {
    flex-direction: column;
    margin-bottom: 20px;

    .label {
      display: block;
      width: 100%;
      margin-bottom: 5px;
      font-size: 13px;
      color: color(text-dark);
    }

    .input, .text-area {
      width: calc(100% - 16px * 2);
      background-color: color(white);
      border-radius: 4px;
      border: none;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      padding: 10px 16px;
      color: color(text-dark);
      outline-color:color(green-dark);
      
      &::placeholder {
        color: color(text-gray);
      }
    }

    .text-area {
      height: 100px;
      resize: none;
    }

    .no-validate {
      border: 1px solid color(danger) !important;
    }

    .required {
      color: color(danger);
    }

    .error-message {
      color: color(danger);
      font-size: 11px;
      padding: 5px 0;
    }
  }
</style>
