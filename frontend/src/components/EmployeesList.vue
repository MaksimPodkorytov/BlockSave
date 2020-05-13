<template>
  <ul class="list-group">
    <li class="list-group-item font-weight-bold">
      <div class="row">
        <div class="col-sm-2">ФИО</div>
        <div class="col-sm-2">Может создавать продукт</div>
        <div class="col-sm-2">Может маркировать продукт</div>
        <div class="col-sm-2">Может продавать продукт</div>
      </div>
    </li>
    <li v-for="employee in employees" class="list-group-item" :key="employee.key">
      <div class="row">
        <div class="col-sm-2">{{ employee.name }}</div>
        <div class="col-sm-2">{{ employee.canCreate }}</div>
        <div class="col-sm-2">{{ employee.canMark }}</div>
        <div class="col-sm-2">{{ employee.canSold }}</div>
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
  name: "employees-list",
  props: ["employees"]
};
</script>
