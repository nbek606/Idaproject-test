<template>
  <div class="product">
    <!--create-->
    <ProductCreate />
    <!--list-->
    <ProductList />
  </div>
</template>
<script>
export default {
  name: 'Product'
}
</script>
<style lang="scss" scoped>
  .product {
    display: flex;
  }

  //Адаптация под мобилку
  @media (max-width: 820px) {
    .product {
      flex-direction: column;
    }
  }
</style>