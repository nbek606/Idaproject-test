<template>
  <div class="product_create">
    <!--заголовок-->
    <h2 class="product_create-title">
      Добавление товара
    </h2>
    <!--форма-->
    <div class="product_create-form">
      <Input
         v-model="form.name"
         label="Наименование товара"
         placeholder="Наименование товара"
      />

      <Input
        v-model="form.description"
         label="Описание товара"
         placeholder="Введите описание товара"
         view="text-area"
         :required="false"
      />

      <Input
         v-model="form.imgUrl"
         label="Ссылка на изображение товара"
         placeholder="Введите ссылку"
      />

      <Input
         v-model="form.price"
         label="Цена товара"
         placeholder="Введите цену"
         view="money"
      />
      <!--кнопка добавления-->
      <button
        class="product_create-button"
      >
        Добавить товар
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductCreate',
  data () {
    return {
      form: {
        name: '',
        description: '',
        imgUrl: '',
        price: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .product_create {
    
    &-title {
      color: color(text-dark);
      font-weight: 500;
    }

    &-form {
      box-sizing: border-box;
      width:$productCreateWidth;
      border-radius: 4px;
      background-color: color(white);
      padding: 25px;
      box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 
                  0px 6px 10px rgba(0, 0, 0, 0.02);
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
  }
</style>