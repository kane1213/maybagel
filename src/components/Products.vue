<template>
  <div>
    <div class="row">
      <div class="col-md-3" v-for="prod in products">
        <div class="border rounded">
          <h4 v-text="prod.title"></h4>
        </div>
      </div>
    </div>
    <div>
      <input type="file" v-on:change="receiving" multiple />
      <img id="previewImg" />
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

    /*alert($("#app").length);
    const _this = this;
    this.$http.get("http://kane1213.synology.me/maysbagel/api/index.php?products").then(function(_resp) {
      if(_resp.data.State) {
        _this.products = _resp.data.Data;
      }
    });*/

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
  },
  methods: {
    receiving(event) {
      const _this = this;
      convertToBase64(event.target.files[0], function (err, data) {
        if (err) {
          console.log("ERROR_~!!")
          return;
        }
        data = resizeImage(data);
        $("#previewImg").attr("src", data);
        var formData = new FormData();
        formData.append("uploadbase64", data);
        _this.$http.post("http://kane1213.synology.me/maysbagel/api/index.php", formData).then(function(_resp){

          console.log(_resp.data);

          if(_resp.data.State) {
            alert(_resp.data.Data);
          } else {
            alert("ERROR");
          }
        });

      });

    }
  }
}

function convertToBase64(file, cb) {
  var reader = new FileReader();

  reader.onload = function (e) {
    cb(null, e.target.result)
  };
  reader.onerror = function (e) {
    cb(e);
  };
  reader.readAsDataURL(file);
}

function resizeImage(base64Str) {
  var img = new Image();
  img.src = base64Str;
  var canvas = document.createElement('canvas');
  var MAX_WIDTH = 400;
  var MAX_HEIGHT = 350;
  var width = img.width;
  var height = img.height;

  var imgType = base64Str.split(";")[0].split(":")[1];
  //imgType = ((imgType=="jpeg")?"jpg":imgType);

  if (width > height) {
    if (width > MAX_WIDTH) {
      height *= MAX_WIDTH / width;
      width = MAX_WIDTH;
    }
  } else {
    if (height > MAX_HEIGHT) {
      width *= MAX_HEIGHT / height;
      height = MAX_HEIGHT;
    }
  }
  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, width, height);
  return canvas.toDataURL(imgType, 1.0);
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
