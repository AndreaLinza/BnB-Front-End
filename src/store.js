import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  apartments: [],
  services: [],
  promoList: [],

});

export function fetchApartments(filter) {
  axios.get('http://127.0.0.1:8000/api/apartments', { params: filter }).then((response) => {
    store.apartments = response.data.apartments;
    console.log(store.apartments);
  })
}

export function fetchServices() {
  axios.get('http://127.0.0.1:8000/api/apartments').then((response) => {
    store.services = response.data.services;
  })
}

// export function fetchSingleApartment() {
//   axios.get('http://127.0.0.1:8000/api/apartments/', + this.$route.params.slug)
//     .then((response) => { this.singleApartment = response.data.apartments })
//   // .catch((e) => {
//   //   console.error(e);
//   //   this.$router.push({ name: "not-found" });
//   // })
// }

// export function fetchImageApartment(apartment) {
//   return `http://127.0.0.1:8000/storage/${apartment.thumbnail}`;
// }