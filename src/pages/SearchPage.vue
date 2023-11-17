<script>
import Loader from '../components/partials/Loader.vue';
import { store, fetchApartments } from "../store";
import TopOffcanvas from "../components/partials/TopOffcanvas.vue";

export default {
  components: {
    TopOffcanvas,
    Loader,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    changePage(linkPage) {
      window.scrollTo(0, 0);
      fetchApartments(this.$route.query, linkPage.url)
    },
    fetchApartments,
  },
  mounted() {
    store.isLoadForm = true;
    setTimeout(() => {
      store.isLoadForm = false;
    }, 5000)
    setTimeout(() => {
      if (store.apartments.length === 0) {
        fetchApartments(this.$route.query)
      }
    }, 1000);
  },
}
</script>

<template>
  <TopOffcanvas></TopOffcanvas>

  <!-- Sezione appartamenti -->
  <div class="container margin-top-custom" v-if="store.pagination.total > 0">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
      <div class="col" v-for="apartment in store.apartments"
        :class="{ 'card-promo-style': apartment.sponsorships.length !== 0 }">
        <div class="card h-100 pb-2 rounded">
          <img :src="`http://127.0.0.1:8000/storage/${apartment.thumbnail}`" class="card-img-top" :alt="apartment.title">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
              <h5 class="card-title">{{ apartment.title }}</h5>
            </div>
            <small class="card-text fw-bold grey-text-color me-2">{{ apartment.city }}</small>
            <small v-if="apartment.distance !== undefined" class="card-text fw-bold grey-text-color">{{
              apartment.distance.toFixed(2) }}Km</small>
          </div>
          <!-- Pulsante per visualizzare un appartamento  -->
          <div class="text-center mb-2">
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
  <div class="container margin-top-custom" v-else>

    <!--Loader-->
    <Loader v-if="store.isLoadForm"></Loader>

    <h2 class="pt-5 text-center fs-4" v-if="store.isLoadForm === false">
      Attualmente, nessun appartamento corrisponde alla tua ricerca, ma stiamo selezionando con cura nuove proposte per
      garantirti il soggiorno perfetto. Continua a seguirci per scoprire le opzioni più adatte alle tue vacanze ideali.
    </h2>
  </div>

  <!-- Paginazione -->
  <div class="pt-3 text-center pb-3" v-if="store.pagination.last_page > 1">
    <a class="btn btn-outline-custom m-1" @click="changePage(linkPage)" role="button"
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

  .card-body {
    position: relative;
  }

  .card-body::after {
    content: "\2605";
    position: absolute;
    top: 0px;
    right: 10px;
    color: $partial-secondary-color;
    font-size: 2rem;
    transition: all .5s;
  }

  &:hover {
    .card-body::after {
      color: $secondary-color;
    }
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

    .card-title {
      color: $partial-secondary-color;
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
  background-color: $partial-secondary-color;
  color: #fff;
}
</style>