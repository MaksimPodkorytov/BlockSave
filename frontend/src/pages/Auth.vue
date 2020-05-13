<template>
  <div>
    <div class="container mt-5">
      <div class="row justify-content-sm-center">
        <div class="col-md-6 col-md-offset-3">
          <h1 class="mt-5 mb-4">Авторизация</h1>
          <tabs>
            <tab :is-active="true" title="Регистрация">
              <form @submit.prevent="register">
                <div class="form-group">
                  <label class="control-label">Наименование организации:</label>
                  <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    placeholder="Введите наименование организации"
                    maxlength="260"
                    required
                  />
                  <label class="control-label">ИНН организации:</label>
                  <input
                    v-model="inn"
                    type="text"
                    class="form-control"
                    placeholder="Введите ИНН"
                    maxlength="260"
                    required
                  />
                  <label class="control-label">Производитель:</label>
                  <input
                    v-model="is_producer"
                    type="checkbox"
                    class="form-control"
                    style="width: auto;"
                  />
                </div>
                <button type="submit" class="btn btn-lg btn-block btn-primary">Зарегистрироваться</button>
              </form>
            </tab>
            <tab title="Вход">
              <form @submit.prevent="login">
                <div class="form-group">
                  <label class="control-label">Секретный ключ:</label>
                  <input
                    v-model="secretKey"
                    type="text"
                    class="form-control"
                    placeholder="Введите ключ"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-lg btn-block btn-primary">Войти</button>
              </form>
            </tab>
          </tabs>
        </div>
      </div>
    </div>

    <modal
      :visible="isModalVisible"
      title="Successful registration"
      action-btn="Log In"
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
    login() {
      this.isSpinnerVisible = true;

      this.$store.commit("login", {
        publicKey: this.secretKey.substr(64),
        secretKey: this.secretKey
      });

      this.$nextTick(function() {
        this.$router.push({ name: "dashboard" });
      });
    },

    async register() {
      this.isSpinnerVisible = true;

      try {
        let producer = false;
        if (this.is_producer) {
          producer = true;
        }
        const keyPair = await this.$blockchain.CreateCompany(
          this.name,
          this.inn,
          producer,
          0,
          ""
        );

        this.name = "";
        this.inn = "";
        this.is_producer = false;
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
    },

    proceed() {
      this.isModalVisible = false;

      this.$store.commit("login", this.keyPair);

      this.$nextTick(function() {
        this.$router.push({ name: "dashboard" });
      });
    }
  }
};
</script>
