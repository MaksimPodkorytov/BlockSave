<template>
  <div>
    <div class="container mt-5">
      <div class="row justify-content-sm-center">
        <div class="col-md-6 col-md-offset-3">
          <h1 class="mt-5 mb-4">Сотрудник</h1>
          <tabs>
            <tab :is-active="true" title="Registration">
              <form @submit.prevent="register">
                <div class="form-group">
                  <label class="control-label">ФИО:</label>
                  <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    placeholder="Введите ФИО"
                    maxlength="260"
                    required
                  />
                  <label class="control-label">Может создавать продукцию:</label>
                  <input
                    v-model="can_create"
                    type="checkbox"
                    class="form-control"
                    style="width: auto;"
                  />
                  <label class="control-label">Может маркировать продукцию:</label>
                  <input
                    v-model="can_mark"
                    type="checkbox"
                    class="form-control"
                    style="width: auto;"
                  />
                  <label class="control-label">Может продавать продукцию:</label>
                  <input
                    v-model="can_sold"
                    type="checkbox"
                    class="form-control"
                    style="width: auto;"
                  />
                </div>
                <button type="submit" class="btn btn-lg btn-block btn-primary">Создать сотрудника</button>
              </form>
            </tab>
          </tabs>
        </div>
      </div>
    </div>

    <modal
      :visible="isModalVisible"
      title="Successful registration"
      action-btn="Создать ещё?"
      @close="closeModal"
      @submit="proceed"
    >
      <div
        class="alert alert-warning"
        role="alert"
      >Save the secret key in a safe place. You will need it to log in to the demo next time.</div>
      <div class="form-group">
        <label>Secret key:</label>
        <div>
          <code>{{ keyPair.secretKey }}</code>
        </div>
      </div>
    </modal>

    <spinner :visible="isSpinnerVisible" />
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import Tab from "../components/Tab.vue";
import Tabs from "../components/Tabs.vue";
import Modal from "../components/Modal.vue";

module.exports = {
  components: {
    Tab,
    Tabs,
    Modal,
    Spinner
  },
  data() {
    return {
      keyPair: {},
      isModalVisible: false,
      isSpinnerVisible: false
    };
  },
  methods: {
    async register() {
      this.isSpinnerVisible = true;

      try {
        const keyPair = await this.$blockchain.CreateEmployee(
          this.$store.state.keyPair,
          this.name,
          this.can_create,
          this.can_mark,
          this.can_sold,
          0
        );

        this.name = "";
        this.can_create = false;
        this.can_mark = false;
        this.can_sold = false;
        this.keyPair = keyPair;
        this.isSpinnerVisible = false;
        this.isModalVisible = true;
      } catch (error) {
        this.isSpinnerVisible = false;
        this.$notify("error", error.toString());
      }
    },

    closeModal() {
      this.isModalVisible = false;

      this.$router.push({ name: "dashboard" });
    },

    proceed() {
      this.isModalVisible = false;

      //this.$store.commit("login", this.keyPair);

      this.$nextTick(function() {
        this.$router.push({ name: "employee" });
      });
    }
  }
};
</script>
