<template>
  <div>
    <div class="container mt-5">
      <div class="row justify-content-sm-center">
        <div class="col-md-6 col-md-offset-3">
          <h1 class="mt-5 mb-4">Труба</h1>
          <tabs>
            <tab :is-active="true" title="Добавить продукт">
              <form @submit.prevent="register">
                <div class="form-group">
                  <label class="control-label">Номер:</label>
                  <input
                    v-model="number"
                    type="text"
                    class="form-control"
                    placeholder="Введите номер трубы"
                    maxlength="260"
                    required
                  />
                  <label class="control-label">Номер партии:</label>
                  <input
                    v-model="batch"
                    type="text"
                    class="form-control"
                    placeholder="Введите номер трубы"
                    maxlength="260"
                    required
                  />
                  <label class="control-label">Диаметр:</label>
                  <input
                    v-model="diameter"
                    type="text"
                    class="form-control"
                    placeholder="Введите номер трубы"
                    maxlength="260"
                    required
                  />
                  <label class="control-label">Толщина стенки:</label>
                  <input
                    v-model="thickness"
                    type="text"
                    class="form-control"
                    placeholder="Введите номер трубы"
                    maxlength="260"
                    required
                  />
                  <label class="control-label">Длина:</label>
                  <input
                    v-model="length"
                    type="text"
                    class="form-control"
                    placeholder="Введите номер трубы"
                    maxlength="260"
                    required
                  />
                  <label class="control-label">Прочие характеристики:</label>
                  <textarea
                    v-model="properties"                   
                    class="form-control"
                    placeholder="Введите номер трубы"
                    maxlength="260"                    
                  />
                </div>
                <button type="submit" class="btn btn-lg btn-block btn-primary">Создать трубу</button>
              </form>
            </tab>
          </tabs>
        </div>
      </div>
    </div>

    <modal
      :visible="isModalVisible"
      title="Успешно создано!"
      action-btn="Создать ещё?"
      @close="closeModal"
      @submit="proceed"
    >
      <div
        class="alert alert-warning"
        role="alert"
      >Поздравляем! Вы успешно добавили продукт в систему.</div>
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
        const keyPair = await this.$blockchain.CreateProduct(
          this.$store.state.keyPair,
          this.number,
          this.batch,
          this.diameter,
          this.thickness,
          this.length,
          this.properties, // properties
          0 // timestamp
        );

        this.number = "";
        this.batch = "";
        this.diameter = "";
        this.thickness = "";
        this.length = "";
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
        this.$router.push({ name: "product" });
      });
    }
  }
};
</script>
