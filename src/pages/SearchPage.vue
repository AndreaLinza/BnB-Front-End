<script>
import { store, fetchApartments } from "../store";
import Filters from '../components/partials/Filters.vue';
import TopOffcanvas from "../components/partials/TopOffcanvas.vue";


export default {
  components: {
    Filters,
    TopOffcanvas
},
  data() {
    return {
      store,
    }
  }

}

</script>

<template>
  <TopOffcanvas></TopOffcanvas>

  <div class="container">
    <h2 class="pb-3">Le nostre migliori strutture</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3">
      <div class="col" v-for="apartment in store.apartments">
        <div class="card h-100">
          <img :src="`http://127.0.0.1:8000/storage/${apartment.thumbnail}`" class="card-img-top" :alt="apartment.title">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
              <h5 class="card-title">{{ apartment.title }}</h5>
            </div>
            <p class="card-text">{{ apartment.city }}</p>
            <p class="card-text">{{ apartment.address }}</p>

            <p class="card-text mb-0 pb-0 fw-bold">Servizi inclusi:</p>
            <ul>
              <li class="card-text" v-for="(service, z) in apartment.services" :key="z">
                {{ service.title }}
              </li>
            </ul>
          </div>
          <!-- Pulsante per visualizzare un appartamento  -->
          <router-link class="btn btn-primary" role="button"
            :to="{ name: 'apartments.show', params: { slug: apartment.slug } }">
            Scopri di più
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>




<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.card {
  opacity: 1;
  border-color: $primary-color;
  background-color: $primary-color;
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

  p {
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

</style>