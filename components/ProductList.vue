<template>
  <div class="product_list">
    <!--фильтр-->
    <div class="product_list-filter">
      <Select
        v-model="sortSelected"
        :options="filter"
      />
    </div> 
    <!--список-->
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
/* import utils */
import { sortProductList } from '@/utils/index.js'

export default {
  name: 'ProductList',
  data () {
    return {
      sortSelected: null,
      filter: [
        {
          text: 'По умолчанию',
          value: ''
        },
        {
          text: 'По цене min',
          value: 'min'
        },
        {
          text: 'По цене max',
          value: 'max'
        },
        {
          text: 'По наименованию',
          value: 'name'
        }
      ]
    }
  },
  computed: {
    ...mapGetters ({
      getList: 'product/getList'
    }),

    list () {
      return sortProductList(this.getList.slice(), this.sortSelected)
    }
  }
}
</script>
<style lang="scss" scoped>
  .product_list {
    width: calc(100% - $productCreateWidth);
    margin-left: calc($productCreateWidth + 20px);
    display: flex;
    flex-direction: column;
    
    &-filter {
      margin-left: auto;
      padding-bottom: 20px;
    }

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