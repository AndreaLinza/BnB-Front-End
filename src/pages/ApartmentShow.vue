<script>
import axios from "axios";
import { fetchImageApartment } from "../store";
import ContactForm from '../components/partials/ContactForm.vue';
import TopOffcanvas from '../components/partials/TopOffcanvas.vue';
import Map from '../components/partials/Map.vue';

export default {
  components: {
    ContactForm,
    TopOffcanvas,
    Map,
  },
  data() {
    return {
      apartment: {},
    };
  },
  methods: {
    fetchApartment() {
      axios.get("http://127.0.0.1:8000/api/apartments/" + this.$route.params.slug)
        .then((response) => {
          // Verifico se la risposta contiene o meno dati validi e in caso di dati non validi reindirizzo l'utente alla pagina NotFound
          if (response.data && response.data.slug) {
            this.apartment = response.data;
          } else {
            this.$router.push({ name: "not-found" });
          }
        })
        .catch((error) => {
          this.$router.push({ name: "not-found" });
        });
    },
    fetchImageApartment,
  },
  mounted() {
    this.fetchApartment();
  }
}
</script>


<template>
  <TopOffcanvas></TopOffcanvas>

  <div class="container apartment-show-box">
    <!--Banner appartamento-->
    <div class="apt-pres map-border">
      <img :src="fetchImageApartment(apartment)" class="img-fluid show-img" alt="{{ apartment.slug }}">
    </div>
    <!--Info apt + form contatto-->
    <div class="row">
      <!--Info generali-->
      <div class="col-12 col-lg-7">
        <div class="infos mt-3">
          <h2>{{ apartment.title }}</h2>
          <span class="aubergine">{{ apartment.address }}</span>
          <!--informazioni tecniche-->
          <h3 class="mt-3">Informazioni generali</h3>
          <span class="aubergine">
            {{ apartment.square_meters }} m², {{ apartment.rooms_number }} stanze, {{ apartment.beds_number }}
            letti,
            {{ apartment.bathrooms_number }} bagni.
          </span>
          <h3 class="mt-3">Servizi</h3>
          <span class="badge bg-secondary my-1 mx-1 text-white" v-for="service in apartment.services">{{
            service.title
          }}</span>
        </div>
      </div>
      <!--Form di contatto-->
      <div class="col-12 col-lg-5">
        <ContactForm :apartment_id="apartment.id"></ContactForm>
      </div>
    </div>
    <!--mappa-->
    <h3 class="mt-5 text-center">Ti troverai qui:</h3>
    <div class="map-border">
      <Map :location="[apartment.longitude , apartment.latitude]"></Map>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.apartment-show-box {
  margin-bottom: 5rem;
}

h2,
h3,
span {
  color: $grey;
}

.infos {
  padding: 10px;
}

.apt-pres {
  height: 500px;
  padding: 15px;
}

.show-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.map-border {
  padding: 15px;
  background-color: $secondary-color;
  border: 2px solid $partial-secondary-color;
}

.bg-secondary {
  background-color: $grey !important;
  border: 2px solid $partial-secondary-color;
}
</style>