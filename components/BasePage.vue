<template>
  <div class="base_page">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'BasePage'
}
</script>
<style lang="scss" scoped>
  .base_page {
    width: 100%;
    box-sizing: border-box;
    padding: 25px;
  }

  @media (max-width: 820px) {
    .base_page {
      padding: 25px 0;
    }
  }
</style>