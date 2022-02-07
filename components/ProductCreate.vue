<template>
  <div class="product_create">
    <!--заголовок-->
    <h2 class="product_create-title">
      Добавление товара
    </h2>

    <!--уведомления-->
    <div 
      v-if="noticeForm"
      class="product_create-notice-form"
    >
      <div class="icon">
        <CheckIcon />
      </div>
      <div class="title">
        Товар успешно добавлен!
      </div>
    </div>

    <!--форма-->
    <div 
      v-if="!noticeForm"
      class="product_create-form"
    >
      <Input
        v-for="(input, index) in inputs"
        :key="index"
        v-model="form[input.key]"
        :label="input.label"
        :placeholder="input.placeholder"
        :view="input.view"
        :required="input.required"
      />
      <!--кнопка добавления-->
      <button
        class="product_create-button"
        :disabled="!validation"
        @click="create"
      >
        Добавить товар
      </button>
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'
/* import icons */
import CheckIcon from '@/static/svg/check.svg?inline'
/* import utils */
import { formValidation, clearForm } from '@/utils/index.js'

export default {
  name: 'ProductCreate',
  components: {
    CheckIcon
  },
  data () {
    return {
      /* форма */
      form: {
        name: '',
        description: '',
        imgUrl: '',
        price: ''
      },
      noticeForm: false,
      /* поля для ввода */
      inputs: [
        {
          key: 'name',
          value: '',
          required: true,
          placeholder: 'Наименование товара',
          label: 'Наименование товара',
          view: 'input'
        },
        {
          key: 'description',
          value: '',
          required: false,
          placeholder: 'Введите описание товара',
          label: 'Описание',
          view: 'text-area'
        },
        {
          key: 'imgUrl',
          value: '',
          required: true,
          placeholder: 'Ссылка на изображение товара',
          label: 'Введите ссылку',
          view: 'input'
        },
        {
          key: 'price',
          value: '',
          required: true,
          placeholder: 'Цена товара',
          label: 'Цена товара',
          view: 'money'
        }
      ]
    }
  },

  computed: {
    ...mapGetters({
      lastId: 'product/getLastId'
    }),

    validation () {
      return formValidation(this.form, this.inputs)
    },
  },

  methods: {
    create () {
      const id = { id: this.lastId }
      
      /* открываем уведомление */
      this.changeNoticeForm();

      this.$store.dispatch('product/setProduct', {...id, ...this.form }).then(() => {
        /* закрываем уведомление через секунду*/
        setTimeout(this.changeNoticeForm, 1000)
        /* очищаем форму */
        clearForm(this.form)
      })
    },

    changeNoticeForm () {
      this.noticeForm = !this.noticeForm
    }
  }
}
</script>
<style lang="scss" scoped>
  .product_create {
    width:$productCreateWidth;
    position: fixed;

    &-title {
      color: color(text-dark);
      font-weight: 500;
      margin-top: 0;
    }

    &-form, &-notice-form {
      width: 100%;
      box-sizing: border-box;
      border-radius: 4px;
      background-color: color(white);
      padding: 25px;
      box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 
                  0px 6px 10px rgba(0, 0, 0, 0.02);
    }

     &-notice-form {
      padding: 25px;
      background-color: color(white);
      text-align: center;

      .icon {
        width: 40px;
        margin: auto;
        padding-bottom: 10px;
      }

      .title {
        font-size: 20px;
        color: color(text-dark);
      }
    }

    &-button {
      width: 100%;
      height: 36px;
      text-align: center;
      border:none;
      border-radius: 10px;
      background-color: color(green-dark);
      color: color(white);
      cursor: pointer;
      transition: 0.4s;

      &:hover {
        background-color: color(blue);
        transition: 0.4s;
        letter-spacing: 1px;
      }

      &:disabled {
        background-color: color(gray);
        color: color(text-gray);
        cursor: default;
      }
    }
    .fade-enter-active {
      transition: 1s;
    }

  }

  svg {
    width: 100%;
    height: 100%;
  }
  //Адаптация под мобилку
  @media (max-width: 820px) {
    .product_create {
      width: 100%;
    }
  }
</style>