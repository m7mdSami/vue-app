<template>
  <div class="home">
    <div class="container my-5">
      <form @submit.stop.prevent="search">
        <div class="form-group d-flex">
          <input
            type="text"
            class="form-control mx-2"
            placeholder="Search"
            v-model="form.search"
          />
          <button type="submit" class="btn btn-primary mx-2" :disabled="!checkFormVal">Search</button>
        </div>
      </form>
    </div>
    <div class="container" v-if="products && products.length">
      <div class="row">
        <div
          class="col-md-3 col-sm-6 my-2"
          v-for="(item, index) in products"
          :key="index"
        >
          <div class="card">
            <img
              :src="item.images[0].thumbnail"
              class="card-img-top p-img"
              :alt="item.brand_name"
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.brand_name }}</h5>
              <button class="btn btn-light" @click="open(item.images[0].large, item.brand_name)">Open</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Service, APIs } from "@/services/service";

@Options({
  components: {},
})
export default class Home extends Vue {
  form: any = {
    search: "",
  };

  products: any[] = [];

  mounted() {}

  get checkFormVal() {
    let form = this.form;
    for (let e in form) {
      if (form[e] === "") {
        return false;
      }
    }
    return true;
  }

  get service() {
    return new Service();
  }

  open(productImg: string, productName: string) {
    this.$router.push({
      name: "Product",
      params: { img: productImg, name: productName }
    });
  }

  async search() {
    try {
      console.log(this.form);
      let data = {
        keyword: this.form.search,
      };
      let res = await this.service.get(APIs.init().products, data);
      this.products = [...res.data.products];
      console.log(this.products);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
<style scoped lang="scss">
.p-img {
  height: 200px;
  object-fit: cover;
}
</style>