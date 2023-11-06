import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  apartments: [],
  services: [],
  promoList: [],

});

export function fetchApartments(filter) {
  axios.get('http://127.0.0.1:8000/api/apartments' , {params:filter} ).then((response) => {
    store.apartments = response.data.apartments;
    console.log(store.apartments);
  })
}

export function fetchServices() {
  axios.get('http://127.0.0.1:8000/api/apartments').then((response) => {
    store.services = response.data.services;
  })
}