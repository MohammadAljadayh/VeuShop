<template>
    <div v-if="product" class="container mt-5 mb-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="row">
                    <div class="col-md-6">
                        <div class="images p-3">
                            <div class="text-center p-4"> <img id="main-image" v-bind:src="product.image"  width="250" /> </div>
                            <div class="thumbnail text-center">  <h5 class="text-uppercase">{{ product.title }}</h5> </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product p-4">
                            <div class="d-flex justify-content-between align-items-center">
                            </div>
                            <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand"> Rating : {{product.rating.rate}} </span>
                                <h5 class="text-uppercase">{{ product.title }}</h5>
                                <div class="price d-flex flex-row align-items-center"> <span class="act-price">${{ product.price }}</span>
                                    <div class="ml-2"> <span>. 40% OFF </span> </div>
                                </div>
                            </div>
                            <p class="about">{{ product.description }}</p>
                            
                           
                            <div class="cart mt-4 align-items-center"> <button 
        id="add-to-cart"
        v-if="!itemIsInCart && !showSuccessMessage"
        v-on:click="addToCart"
      >Add to Cart</button>
      <button
        id="add-to-cart"
        class="green-button"
        v-if="!itemIsInCart && showSuccessMessage"
      >Successfully added item to cart!</button>
    <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  
  <NotFoundPage v-else/>
  
</template>

<script>
import axios from 'axios';
import NotFoundPage from './NotFoundPage';

export default {
    name: 'ProductDetailPage',
    components: {
      NotFoundPage,
    },
    data() {
      return {
        product: {},
        cartItems: [],
        showSuccessMessage: false,
      };
    },

    methods: {
      async addToCart() {
        await axios.post('https://fakestoreapi.com/products', {
          productId: this.$route.params.id,
        });
        this.showSuccessMessage = true;
    
      },
  






    },
    async created() {
      const { data: product } = await axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`);
      this.product = product;

      const { data: cartItems } = await axios.get('/api/users/12345/cart');
      this.cartItems = cartItems;
    }
    
};

</script>

<style lang="scss" scoped>


.card {
    border: none
}

.product {
    background-color: #eee
}

.brand {
    font-size: 13px
}

.act-price {
    color: red;
    font-weight: 700
}



</style>
