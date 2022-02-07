<template>
  <div class="product_list">
    <div class="product_list-item">  
      <ProductListItem 
        v-for="item in list"
        :key="item.id"
        :product="item"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProductList',
  computed: {
    ...mapGetters ({
      getList: 'product/getList'
    }),

    list () {
      return this.getList
    }
  }
}
</script>
<style lang="scss" scoped>
  .product_list {
    width: calc(100% - $productCreateWidth);
    flex-direction: column;
    margin: 0;
    margin-top: 20px;

    &-item {
      width: 100%;
      margin-right: auto;
      display: flex;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 820px) {
    .product_list {
      width: 100%;
      flex-direction: column;
      margin: 0;
      margin-top: 20px;
    }
  }
</style>