<script>
import axios from "axios";
import { store, fetchApartments } from "../store";
import TopOffcanvas from "../components/partials/TopOffcanvas.vue";

export default {
  components: {
    TopOffcanvas
  },
  data() {
    return {
      store,
      sponsor: {
        sponsorships: 1,
      },
      promoApartment: [],
    }
  },
  methods: {
    fetchData(url) {
      axios.get(url, { params: this.sponsor }).then((response) => {
        this.promoApartment = response.data.apartments.data;

        // Applico la classe per gli appartamenti in promozione
        this.applyClassToPromoApartment();
      });
    },
    applyClassToPromoApartment() {
      // Itera attraverso tutti gli appartamenti
      store.apartments.forEach((apartment) => {
        // Se l'appartamento è presente in promoApartment aggiungo una classe
        for (const promo of this.promoApartment) {
          if (promo.id === apartment.id) {
            apartment.isPromoApartment = true;
          }
        }
      });
    },
    fetchApartments,
  },
  mounted() {
    fetchApartments();
  },
  updated() {
    this.applyClassToPromoApartment();
  }
}
</script>

<template>
  <TopOffcanvas></TopOffcanvas>

  <!-- Sezione appartamenti -->
  <div class="container margin-top-custom" v-if="store.pagination.total > 0">
    <!-- <h2 class="pb-3">Le nostre migliori strutture</h2> -->
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3">
      <div class="col" v-for="apartment in store.apartments" :class="{ 'card-promo-style': apartment.isPromoApartment }">
        <div class="card h-100 pb-2 rounded">
          <img :src="`http://127.0.0.1:8000/storage/${apartment.thumbnail}`" class="card-img-top" :alt="apartment.title">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
              <h5 class="card-title">{{ apartment.title }}</h5>
            </div>
            <small class="card-text fw-bold grey-text-color">{{ apartment.city }}</small>
          </div>
          <!-- Pulsante per visualizzare un appartamento  -->
          <div class="text-center">
            <router-link class="btn general-btn" role="button"
              :to="{ name: 'apartments.show', params: { slug: apartment.slug } }">
              Scopri di più
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Se la ricerca non produce risultati -->
  <div class="container" v-else>
    <h2 class="pb-3">Nessun nostro appartamento corrisponde alla tua ricerca</h2>
  </div>

  <!-- Paginazione -->
  <div class="pt-3 text-center pb-3">
    <a class="btn btn-outline-custom m-1" @click="fetchApartments(linkPage.url)" role="button"
      v-for="linkPage in store.pagination.links" v-html="linkPage.label"
      :class="{ 'active-page': linkPage.label == store.pagination.current_page }"></a>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.grey-text-color {
  color: $grey !important;
}

.margin-top-custom {
  margin-top: 150px;
}

.btn-outline-custom {
  border: 2px solid $partial-secondary-color;
  color: $partial-primary-color;

  &:hover {
    border-color: white;
    background-color: #0f4651;
    color: $partial-secondary-color;
  }

  &:active {
    border-color: white;
    background-color: #09272d;
    color: $partial-secondary-color;
  }
}

.card-promo-style {
  .card {
    background-color: rgba(226, 87, 18, 0.2);
  }
}

.container {
  margin-bottom: 5rem;
}

.card {
  opacity: 1;
  border-color: #e0dede;
  cursor: pointer;
  transition: all .5s;

  img {
    transition: all .5s;
    height: 300px;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  h5 {
    color: $secondary-color;
  }

  small {
    color: $partial-primary-color;
  }

  &:hover {
    transform: translateY(-2%);
    box-shadow: 2px 2px 10px 0px rgb(0, 0, 0, .1);

    img {
      filter: brightness(.8);
    }
  }
}

.general-btn {
  background-color: transparent;
  border: none;
  border-radius: 30px;
  border: 2px solid $partial-secondary-color;
  color: $grey;
  padding: 5px 15px;
  margin-top: 10px;
  width: 130px;


  &:hover {
    background-color: #1b8397;
    color: white;
  }

  &:focus {
    background-color: #0f4651;
    border-color: #a33f0d;
    color: #a33f0d;
  }
}

.active-page {
  background-color: $secondary-color;
  color: #fff;
}
</style>