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

            axios.get("https://api.ipify.org?format=json").then((response) => {
              const ipAddress = response.data.ip;
              const apartmentId = this.apartment.id

              axios.post("http://127.0.0.1:8000/api/get-ip", {
                ip_address: ipAddress,
                apartment_id: apartmentId,
              }).then((response) => { })
            })
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

  <div class="container apartment-show-box margin-top-custom">
    <!--Banner appartamento-->
    <div class="apt-pres map-border">
      <span v-if="apartment.sponsorships && apartment.sponsorships.length > 0">&#9733;</span>
      <img :src="fetchImageApartment(apartment)" class="img-fluid show-img" alt="{{ apartment.slug }}">
    </div>
    <!--Info apt + form contatto-->
    <div class="row gy-4 mb-5">
      <!--Info generali-->
      <div class="col-12 col-lg-7">
        <div class="infos mt-4 h-100">
          <div class="mb-4">
            <h2 class="text-white">{{ apartment.title }}</h2>
            <small class="text-white">{{ apartment.address }}</small>
          </div>
          <!--informazioni tecniche-->
          <div class="mb-3">
            <h3 class="mt-3 text-white pb-1">Informazioni generali</h3>
            <span class="aubergine text-white">
              L'appartamento ha un'area di {{ apartment.square_meters }} m², comprende {{
                apartment.rooms_number }}
              stanze con {{ apartment.beds_number
              }}
              letti e
              {{ apartment.bathrooms_number }} bagni.<br>
              Tutti i servizi messi a disposizione dall'Host e il suo appartamento sono segnalati nella
              sezione sottostante "Servizi".<br>
              È possibile anche visualizzare la posizione dell'immobile sulla
              <a href="#mappa" class="text-white">mappa</a> sottostante!
            </span>
          </div>
          <h3 class="mt-3 text-white pb-1">Servizi</h3>
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
    <div id="mappa">
      <h3 class="mt-5 mb-4 text-center text-white">Ti troverai qui:</h3>
      <div class="map-border">

        <Map :location="[apartment.longitude, apartment.latitude]"></Map>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.margin-top-custom {
  margin-top: 150px;
}

#mappa {
  margin-top: 100px;
}

.apartment-show-box {
  margin-bottom: 5rem;
}


h2 {
  font-size: 3rem;
}

h2,
h3 {
  margin-bottom: 0px;
}

small {
  color: $primary-color !important;
}

h2,
h3,
span {
  color: $grey;
}


.infos {
  padding: 20px;
  background-color: #e99f8343;
  border-radius: 20px;
  border: 2px dashed white;

}

.apt-pres {
  height: 500px;
  padding: 15px;
  position: relative;

  span {
    position: absolute;
    top: 5%;
    right: 5%;
    color: $partial-secondary-color;
    font-size: 2rem;
  }
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
  background-color: $secondary-color !important;
  border: 2px solid $partial-secondary-color;
}
</style>