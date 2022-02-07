<template>
 
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
         <router-link to="/products" class="nav-link">
     <h5> All Products</h5> 
    </router-link>
        </li>
        <li class="nav-item">
               <router-link to="/men" class="nav-link">
       Men  
    </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/women" class="nav-link">
       Women 
    </router-link>
        </li>
          <li class="nav-item">
        <router-link to="/electronics" class="nav-link">
      Electronics 
    </router-link>
        </li>
              <li class="nav-item">
       <router-link to="/jewelery" class="nav-link">
      Jewelery 
    </router-link>
        </li>

      </ul>
    <router-link to="/cart" id="cart-link">
      <button  class="btn btn-dark" >Shopping Cart</button>
    </router-link>
   
    </div>
  </div>
</nav> -->
 

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
        <router-link to="/products" class="nav-link" v-bind:style="{ 'color': 'black' }">
      All Products
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  
        <li class="nav-item">
                     <router-link to="/men" class="nav-link">
       Men  
    </router-link>
        </li>
          <li class="nav-item">
                <router-link to="/women" class="nav-link">
       Women 
    </router-link>
        </li>
          <li class="nav-item">
            <router-link to="/electronics" class="nav-link">
      Electronics 
    </router-link>
        </li>
          <li class="nav-item">
            <router-link to="/jewelery" class="nav-link">
      Jewelery 
    </router-link>
        </li>
      </ul>
      <form class="d-flex">
         <router-link to="/cart" id="cart-link">
      <button  class="btn btn-dark" >Shopping Cart</button>
    </router-link>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style  >



</style>
