import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  apartments: [],
  services: [],
  promoList: [],
  pagination: {},
  filter: {
    // rooms_number: "",
    // beds_number: "",
    // bathrooms_number: "",
    radius: "20",
    // address: "",
    services: [],
  },
});

export function fetchApartments(params, url) {
  axios
    .get((url ?? "http://127.0.0.1:8000/api/apartments"), {params: params})
    .then((response) => {
      store.apartments = response.data.apartments.data;
      console.log(store.apartments)

      // Salvo i dati della paginazione
      delete response.data.apartments.data;
      store.pagination = response.data.apartments;
    })
    // .catch((error) => {
    //   console.error("Errore nella richiesta:", error.response);
    // });
}

export function fetchServices() {
  axios.get("http://127.0.0.1:8000/api/apartments").then((response) => {
    store.services = response.data.services;
  });
}

export function fetchImageApartment(apartment) {
  return `http://127.0.0.1:8000/storage/${apartment.thumbnail}`;
}
