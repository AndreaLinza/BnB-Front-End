import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  apartments: [],
  services: [],
  promoList: [],
  pagination: {},
  filter: {
    rooms_number: "0",
    beds_number: "0",
    bathrooms_number: "0",
    radius: "20",
    address: "",
    services: [],
  },
});

export function fetchApartments(url) {
  axios
    .get(url ?? "http://127.0.0.1:8000/api/apartments", {
      params: store.filter,
    })
    .then((response) => {
      store.apartments = response.data.apartments.data;

      // Salvo i dati della paginazione
      delete response.data.apartments.data;
      store.pagination = response.data.apartments;
    })
    .catch((error) => {
      console.error("Errore nella richiesta:", error.response);
    });
}

export function fetchServices() {
  axios.get("http://127.0.0.1:8000/api/apartments").then((response) => {
    store.services = response.data.services;
  });
}

// export function fetchSingleApartment() {
//   axios.get('http://127.0.0.1:8000/api/apartments/', + this.$route.params.slug)
//     .then((response) => { this.singleApartment = response.data.apartments })
//   // .catch((e) => {
//   //   console.error(e);
//   //   this.$router.push({ name: "not-found" });
//   // })
// }

export function fetchImageApartment(apartment) {
  return `http://127.0.0.1:8000/storage/${apartment.thumbnail}`;
}
