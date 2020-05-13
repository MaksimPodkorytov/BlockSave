<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-12">
          <h1>Выберите продукцию для добавления</h1>
          <hr />

          <div class="row mt-3">
            <div class="col-sm-6 col-md-4">
              <h2>Продукция</h2>
              <button class="btn btn-lg btn-block btn-primary mt-3" @click.prevent="add_pipe">Трубы</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <spinner :visible="isSpinnerVisible" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Spinner from "../components/Spinner.vue";

module.exports = {
  components: {
    Spinner
  },
  data() {
    return {      
      isSpinnerVisible: false
    };
  },
  
  methods: {   
    async add_pipe(){
      this.$router.push({ name: "product" });
    },    
  },
};
</script>