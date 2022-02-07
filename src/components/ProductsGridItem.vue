<template>
  
   
    <div class="card" style="width: 16rem;">
  <img v-bind:src="product.image" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${{product.price }}</p>
      <router-link  v-bind:to="'/products/' + product.id">
            <button>View Details</button>
        </router-link>
  </div>
</div>
    
</template>

<script>
export default {
    name: 'ProductsGridItem',
    props: ['product'],
}
</script>

<style lang="scss" scoped>
.card {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
 
  }
p {
  
  text-align: center;

}
h5{

  text-align: center;

}
  img {
    height: 200px;
    width: 200px;
    
  }


  button {
     border-radius: 8px;
    width: 100%;
    
  }
</style>