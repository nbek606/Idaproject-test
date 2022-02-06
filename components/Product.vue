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
</style>