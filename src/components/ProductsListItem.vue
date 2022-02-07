<template>
    <div class="product-container">
      <img class="product-image" :src="product.image" />
      <div class="details-wrap">
   
                <h4>ProductId : {{ product.products[0].productId }}</h4>

        <p>Quantity : {{ product.products[0].quantity }}</p>
        <p>Date : {{ product.date }}</p>
      </div>
      <button
        class="remove-button"
        v-on:click="$emit('remove-from-cart', product.id)"
      >Remove From Cart</button>
    </div>
</template>

<script>
export default {
    name: 'ProductsListItem',
    props: ['product'],
}
</script>

<style lang="scss" scoped>
  .product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }

  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }

  .remove-button {
    flex: 1;
    margin: auto;
  }
</style>