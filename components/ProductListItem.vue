<template>
  <div class="product">
     <div 
        class="product_remove"
        @click="remove"
      >
       <RemoveIcon />
     </div>
     <div class="product_img">
       <img :src="product.imgUrl" />
     </div>
     <div class="product_name">
       {{ name }}
     </div>
     <div class="product_description">
      {{ description }}
     </div>
     <div class="product_price">
      {{ price }} руб.
     </div>
  </div>
</template>
<script>

/* import utils */
import { moneySpaces } from '@/utils/index.js'
/* import icons */
import RemoveIcon from '@/static/svg/remove.svg?inline'

export default {
  name: 'ProductListItem',
  props: { 
    product: { type: Object, required: true }
  },

  components: {
    RemoveIcon
  },

  computed: {
    price () {
      return moneySpaces(this.product.price)
    },
    name () {
      return this.product.name.substr(0, 100)
    },
    description () {
      return `${this.product.description.substr(0, 200)}...`
    }
  },

  methods: {
    remove () {
      this.$store.dispatch('product/removeProduct', this.product.id)
    }
  }
}
</script>
<style lang="scss" scoped>
  .product {
    position: relative;
    margin: 0 15px;
    margin-bottom: 20px;
    color: color(text-dark);
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    flex: 1 1 300px;
    transition: 0.4s;

    &_img {  
      img {
        width: 100%;
        height: 100%;
        border-radius:4px 4px 0 0;
       }
    }

    &_name {
      font-size: 20px;
      font-weight: 600;
      padding: 10px 10px;

    }

    &_description {
      font-size: 16px;
      padding: 10px 10px;
    }
    
    &_price {
      padding: 10px 10px;
      font-size: 24px;
      font-weight: 600;
    } 
    
    &_remove {
      background-color: #FF8484;
      position: absolute;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      cursor: pointer;
      margin-top: -10px;
      margin-right: -10px;
      right: 0;
    }
  }
</style>