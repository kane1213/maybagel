<template>
  <div class="contact">
    <SiteMenu></SiteMenu>
    <h1>This is an newProducts page</h1>

    <div class="row no-gullters mt-5">
      <div v-for="num in 20" class="col-md-2 p-1">
        <div class="bg-white p-3">
          <router-link :to="'products/product/'+num" v-text="'product' + num"></router-link>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import SiteMenu from '@/components/SiteMenu.vue'

export default {
  name: 'Contact',
  components: {
    SiteMenu
  }
}
</script>