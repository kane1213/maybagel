<template>
  <div class="row">
    <div class="col-md-3" v-for="prod in products">
      <div class="border rounded">
        <h4 v-text="prod.title"></h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  created () {
    /*if (this.$store.state.siteProduct.length === 0) {
      this.$store.dispatch('getProducts')
    }*/
    //$.blockui();

    alert($("#app").length);
    const _this = this;
    this.$http.get("http://kane1213.synology.me/maysbagel/api/index.php").then(function(_resp) {
      if(_resp.data.State) {
        _this.products = _resp.data.Data;
      }
    });

  },
  computed: {

    /* categorys () {
      var _tmpArray = [];
      if(this.$store.state.siteProduct.length > 0) {
        this.$store.state.siteProduct.forEach(function(product){
          if(_tmpArray.indexOf(product.category) < 0) {
            _tmpArray.push(product.category);
          }

        });
      }
      return _tmpArray;
    } */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
