<script>
import { store, fetchApartments } from "../store";
import Filters from '../components/advanced_research/Filters.vue';


export default {
  components: {
    Filters,
  },
  data() {
    return {
      store,
    }
  }

}

</script>

<template>
  <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
    <div class="offcanvas-header container">
      <h5 class="offcanvas-title text-white mx-3" id="offcanvasTopLabel">Filtri avanzati</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i
          class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="offcanvas-body container d-flex flex-wrap">
      <Filters></Filters>
    </div>
  </div>
  
    <div class="container">
      <h2 class="pb-3">Le nostre migliori strutture</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3">
        <div class="col" v-for="apartment in store.apartments">
          <div class="card h-100">
            <img :src="`http://127.0.0.1:8000/storage/${apartment.thumbnail}`" class="card-img-top"
            :alt="apartment.title">
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


.offcanvas.offcanvas-top {
  height: 60vh;
}

// =====================

.offcanvas-top {
  background-color: transparent;
  border-bottom: none !important;

  .offcanvas-header,
  .offcanvas-body {
    background-color: $secondary-color;
  }

  .btn-close {
    background-image: none;
    color: white;
  }
}
</style>