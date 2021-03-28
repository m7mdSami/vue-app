<template>
  <div class="product">
    <div class="container" v-if="product">
      <div class="row">
        <div class="col-md-12 my-5">
          <div class="card">
            <img :src="product.img" class="card-img-top p-img" :alt="product.name">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Service, APIs } from '@/services/service';

@Options({
  components: {},
})
export default class Product extends Vue {

  product:any;

  created() {
      this.product = this.$route.params
  }

  mounted() {
    // console.log(this.$route.params)
  }

  get service() {
    return new Service() 
  }

  async search(){ 
    try {      

      let res = await this.service.get(APIs.init().products);
      this.product = [...res.data.products];
      console.log(this.product)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style scoped lang="scss">

</style>