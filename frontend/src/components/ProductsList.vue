<template>
  <ul class="list-group">
    <li class="list-group-item font-weight-bold">
      <div class="row">
        <div class="col-sm-2">Номер</div>
        <div class="col-sm-2">Номер партии</div>
        <div class="col-sm-2">Диаметр</div>
        <div class="col-sm-2">Толщина стенки</div>
        <div class="col-sm-2">Длина</div>        
      </div>
    </li>
    <li v-for="product in products" class="list-group-item" :key="product.key">
      <div class="row">
        <div class="col-sm-2">{{ product.number }}</div>
        <div class="col-sm-2">{{ product.batch }}</div>
        <div class="col-sm-2">{{ product.diameter }}</div>
        <div class="col-sm-2">{{ product.thickness }}</div>
        <div class="col-sm-2">{{ product.length }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import Countdown from "../components/Countdown.vue";

module.exports = {
  components: {
    Countdown
  },
  name: "products-list",
  props: ["products"]
};
</script>
