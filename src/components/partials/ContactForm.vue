<script>
import axios from 'axios';
import Loader from './Loader.vue';
import { store } from "../../store";

export default {
  components: {
    Loader,
  },
  props: {
    apartment_id: Number,
  },
  data() {
    return {
      store,
      formData: {
        name: "",
        email: "",
        message_text: "",
        apartment_id: "",
      },
      error: null,
      success: null,
    };
  },
  methods: {
    onFormSubmit() {
      store.isLoadForm = true;
      this.formData.apartment_id = this.apartment_id;
      console.log(this.formData);
      if (this.formData.email && this.formData.message_text) {
        axios.post("http://localhost:8000/api/messages", this.formData)
          .then(resp => {
            this.success = true;
            this.error = null;
          })
          .catch(e => {
            this.error = `-> ${e.response?.data?.message ?? e.message}`;
          })
      } else {
        this.error = "Compila i campi obbligatori prima di inviare il form.";
      }
      setTimeout(() => {
        store.isLoadForm = false;
      }, 5000)
    },
  },
};
</script>

<template>
  <div class="messages-form-box mt-3">
    <h3 class="text-center m-0">Contatta l'host!</h3>
    <!--Error-->
    <div class="alert my-error-alert" v-if="error">
      Qualcosa è andato storto! {{ error }}
    </div>
    <form @submit.prevent="onFormSubmit" v-if="!success">
      <div v-if="store.isLoadForm === false">
        <div class="mb-3">
          <label class="fw-bold">Nome</label>
          <input type="text" class="form-control" v-model="formData.name">
        </div>
        <div class="mb-3">
          <label class="fw-bold">E-mail</label>
          <input type="text" class="form-control" v-model="formData.email" required placeholder="*">
        </div>
        <div class="mb-3">
          <label class="fw-bold">Messaggio</label>
          <textarea class="form-control" v-model="formData.message_text" required placeholder="*"></textarea>
        </div>
        <!--Pulsante di invio-->
        <div class="d-flex justify-content-center pt-1">
          <button type="submit" class="btn my-btn-messages">Invia</button>
        </div>
      </div>
    </form>

    <!--Loader-->
    <Loader v-if="store.isLoadForm"></Loader>

    <!--Success-->
    <div v-if="success">
      <div class="alert my-success-alert" v-if="store.isLoadForm === false">
        Grazie per il messaggio, l'host ti contatterà presto!
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../../style/partials/variables" as *;

.my-btn-messages {
  --bs-btn-color: #fff;
  --bs-btn-bg: #e55812be;
  --bs-btn-border-color: #e55812be;
  --bs-btn-hover-color: white;
  --bs-btn-hover-bg: #16697a;
  --bs-btn-hover-border-color: #16697a;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #e55812;
  --bs-btn-active-bg: #16697a;
  --bs-btn-active-border-color: #e55812;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #16697a;
  --bs-btn-disabled-bg: white;
  --bs-btn-disabled-border-color: #e55812be;
}

.messages-form-box {
  background-color: $partial-primary-color;
  color: $primary-color;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all .5s;

  h3 {
    margin: 0;
    padding-bottom: .5rem;
    font-weight: bold;
    color: $partial-secondary-color;
  }

  label {
    padding-bottom: .2rem;
    color: $secondary-color !important;
  }

  .my-error-alert {
    margin-top: .5rem;
    color: $partial-primary-color;
    font-weight: bold;
    --bs-alert-bg: rgba(226, 87, 18, 0.8);
    --bs-alert-border-color: $partial-secondary-color;
  }

  .my-success-alert {
    margin-top: .5rem;
    color: $partial-primary-color;
    font-weight: bold;
    --bs-alert-bg: #e78562;
    --bs-alert-border-color: $secondary-color;
  }

  &:hover {
    transform: scale(.98);
  }
}

// Modifica placeholder
.form-control::placeholder {
  color: $partial-secondary-color;
  position: absolute;
  top: 25%;
  left: 1%;
}
</style>