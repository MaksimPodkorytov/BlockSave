<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-12">
          <h1>Личный кабинет</h1>
          <hr />

          <div class="row mt-3">
            <div class="col-sm-6 col-md-4">
              <h2>Компания</h2>
              <user-summary :user="user" class="mt-3" />
              <!--<button class="btn btn-lg btn-block btn-primary mt-3" @click.prevent="issue">Issue funds</button>-->
            </div>
          </div>

          <h2 class="mt-5">Продукция</h2>
          <button
            class="btn btn-lg btn-block btn-primary mt-3"
            @click.prevent="add_product"
          >Добавить продукт</button>
          <products-list :products="products" />

          <h2 class="mt-5">Сотрудники</h2>
          <button
            class="btn btn-lg btn-block btn-primary mt-3"
            @click.prevent="add_employee"
          >Создать</button>
          <employees-list :employees="employees" class="mt-3" />
        </div>
      </div>
    </div>

    <spinner :visible="isSpinnerVisible" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Spinner from "../components/Spinner.vue";
import UserSummary from "../components/UserSummary.vue";
import ProductsList from "../components/ProductsList.vue";
import EmployeesList from "../components/EmployeesList.vue";

module.exports = {
  components: {
    UserSummary,
    ProductsList,
    EmployeesList,
    Spinner
  },
  data() {
    return {
      user: {},
      products: [],
      employees: [],
      isSpinnerVisible: false
    };
  },
  computed: mapState({
    keyPair: state => state.keyPair
  }),
  methods: {
    async loadUser() {
      if (this.keyPair === null) {
        this.$store.commit("logout");
        this.$router.push({ name: "auth" });
        return;
      }

      this.isSpinnerVisible = true;

      try {
        this.user = await this.$blockchain.get_organization(
          this.keyPair.publicKey
        );
        this.isSpinnerVisible = false;
        this.loadEmployees();
        this.loadProducts();
      } catch (error) {
        this.isSpinnerVisible = false;
        this.$notify("error", error.toString());
        this.$store.commit("logout");
        this.$router.push({ name: "auth" });
      }
    },

    async loadProducts() {
      this.isSpinnerVisible = true;

      try {
        this.products = await this.$blockchain.get_products(this.keyPair.publicKey)
        this.isSpinnerVisible = false;        
      } catch (error) {
        this.isSpinnerVisible = false;
        this.$notify("error", error.toString());
      }
    },

    async loadEmployees() {
      this.isSpinnerVisible = true;

      try {
        this.employees = await this.$blockchain.get_company_employee(
          this.keyPair.publicKey
        );
        this.isSpinnerVisible = false;
      } catch (error) {
        this.isSpinnerVisible = false;
        this.$notify("error", error.toString());
      }
    },

    async add_employee() {
      this.$router.push({ name: "employee" });
    },

    async add_product(){
      this.$router.push({ name: "productchange" });
    },

    async makeOwl() {
      this.isSpinnerVisible = true;

      try {
        await this.$blockchain.makeOwl(
          this.keyPair,
          this.name,
          this.mother,
          this.father
        );
        this.isSpinnerVisible = false;
        this.$notify("success", "Transaction accepted");
        this.loadUser();
      } catch (error) {
        this.isSpinnerVisible = false;
        this.$notify("error", error.toString());
      }
    },

    async createAuction() {
      this.isSpinnerVisible = true;

      try {
        await this.$blockchain.createAuction(
          this.keyPair,
          this.owl,
          this.price,
          this.duration
        );
        this.isSpinnerVisible = false;
        this.$notify("success", "Transaction accepted");
        this.loadUser();
      } catch (error) {
        this.isSpinnerVisible = false;
        this.$notify("error", error.toString());
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.loadUser();
    });
  }
};
</script>
