<script>
import { store, fetchApartments, fetchServices } from "../../store";

export default {
  data() {
    return {
      store,
      filter: {
        'rooms_number': '',
        'beds_number': '',
        'bathrooms_number': '',
        'radius': '0',
        services: []
      },
    };
  },
  methods: {
    submitResearch() {
      fetchApartments(this.filter)
      this.$router.push({ name: 'search', route: "search" });
      this.saveFilter()
    },

    // Creo una funzione per salvare i filtri nel localStorage
    saveFilter() {
      localStorage.setItem('filters', JSON.stringify(this.filter));
    },

    // Creo una funzione per cancellare i filtri nel localStorage
    deleteFilter() {
      localStorage.removeItem('filters')
    },

    // Creo una funzione che servirà a mantere i filtri selezionati
    loadFilter() {
      //Recupero i filtri dal localStorage
      const savedFilter = localStorage.getItem('filters');

      return savedFilter ? JSON.parse(savedFilter) : null;

    }



  },
  mounted() {
    fetchServices();
    const savedFilter = this.loadFilter();

    if (savedFilter) {
      this.filter = savedFilter;
    }
    // Aggiungo il listener per l'evento beforeunload 
    //"beforeunload" E' un evento del browser che si verifica prima che una pagina venga scaricata o rinfrescata. 
    //Viene generato quando l'utente sta per lasciare la pagina, ad esempio, facendo un refresh della pagina o chiudendo la scheda del browser.
    window.addEventListener('beforeunload', this.deleteFilter)
  },

  //
  beforeUnmount() {
    //Rimuovo il listener dell'evento beforeunload quando smonto il componente
    window.removeEventListener('beforeunload', this.deleteFilter)
  }
}
</script>


<template>
  <form action="POST" @submit.prevent="submitResearch()" class="container justify-content-center">

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3">
      <!--Numero di stanze-->
      <div class="col">
        <div class="d-flex align-items-center flex-wrap">
          <span class="text-white fw-bold ms-2 pb-2">Quantità di stanze</span>
          <div class="deco-line"></div>
        </div>

        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="rooms_number" id="room0" autocomplete="off"
            v-model="filter.rooms_number" value="0">
          <label class="btn btn-outline-personal" for="room0">Nessuna</label>

          <input type="radio" class="btn-check" name="rooms_number" id="room1" autocomplete="off"
            v-model="filter.rooms_number" value="1">
          <label class="btn btn-outline-personal" for="room1">1</label>

          <input type="radio" class="btn-check" name="rooms_number" id="room2" autocomplete="off"
            v-model="filter.rooms_number" value="2">
          <label class="btn btn-outline-personal" for="room2">2</label>

          <input type="radio" class="btn-check" name="rooms_number" id="room3" autocomplete="off"
            v-model="filter.rooms_number" value="3">
          <label class="btn btn-outline-personal" for="room3">3+</label>
        </div>
      </div>

      <!--Numero di letti-->
      <div class="col">
        <div class="d-flex align-items-center ">
          <span class="text-white fw-bold ms-2 pb-2">Quantità di letti</span>
          <div class="deco-line"></div>
        </div>

        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="beds_number" id="bed0" autocomplete="off"
            v-model="filter.beds_number" value="0">
          <label class="btn btn-outline-personal" for="bed0">Nessuna</label>

          <input type="radio" class="btn-check" name="beds_number" id="bed1" autocomplete="off"
            v-model="filter.beds_number" value="1">
          <label class="btn btn-outline-personal" for="bed1">1</label>

          <input type="radio" class="btn-check" name="beds_number" id="bed2" autocomplete="off"
            v-model="filter.beds_number" value="2">
          <label class="btn btn-outline-personal" for="bed2">2</label>

          <input type="radio" class="btn-check" name="beds_number" id="bed3" autocomplete="off"
            v-model="filter.beds_number" value="3">
          <label class="btn btn-outline-personal" for="bed3">3+</label>
        </div>
      </div>

      <!--Numero di  Bagni-->
      <div class="col">
        <div class="d-flex align-items-center ">
          <span class="text-white fw-bold ms-2 pb-2">Quantità di bagni</span>
          <div class="deco-line"></div>
        </div>

        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="bathrooms-number" id="bath0" autocomplete="off"
            v-model="filter.bathrooms_number" value="0">
          <label class="btn btn-outline-personal" for="bath0">Nessuna</label>

          <input type="radio" class="btn-check" name="bathrooms-number" id="bath1" autocomplete="off"
            v-model="filter.bathrooms_number" value="1">
          <label class="btn btn-outline-personal" for="bath1">1</label>

          <input type="radio" class="btn-check" name="bathrooms-number" id="bath2" autocomplete="off"
            v-model="filter.bathrooms_number" value="2">
          <label class="btn btn-outline-personal" for="bath2">2</label>

          <input type="radio" class="btn-check" name="bathrooms-number" id="bath3" autocomplete="off"
            v-model="filter.bathrooms_number" value="3">
          <label class="btn btn-outline-personal" for="bath3">3+</label>
        </div>
      </div>

      <!--Distanza dal centro-->
      <div class="col">
        <div class="d-flex align-items-center ">
          <span class="text-white fw-bold ms-2 pb-2">Distanza centro</span>
          <div class="deco-line"></div>
        </div>
        <input type="range" class="form-range" min="0" max="20" step="5" name="radius" id="radius0"
        v-model="filter.radius">
      </div>

    </div>

    <!--Servizi-->
    <h5 class="text-white mt-5">Servizi</h5>
    <div class=" d-flex flex-wrap pt-3">
      <div class="checkbox-wrapper-23 d-flex p-2 align-items-center" v-for="(service, i) in  store.services ">
        <input type="checkbox" :id="`${i}`" v-model="filter.services" :value="service.id">
        <label :for="`${i}`" style="--size: 30px">
          <svg viewBox="0,0,50,50">
            <path d="M5 30 L 20 45 L 45 5"></path>
          </svg>
        </label>
        <span class="text-white ps-2">{{ service.title }}</span>
      </div>
    </div>

    <div class="text-center mt-4">
      <button class="general-btn fw-bold" type="submit">
        Filtra
      </button>
    </div>

  </form>
</template>


<style lang="scss" scoped>
@use '../../style/partials/variables' as *;


.deco-line {
  height: 2px;
  background-color: $partial-secondary-color;
  max-width: 100px;
  width: 100%;
  margin-top: 4px;
  margin-left: 5px;
}




// ======CHECKBOX======
.checkbox-wrapper-23 *,
.checkbox-wrapper-23 *:after,
.checkbox-wrapper-23 *:before {
  box-sizing: border-box;
}

.checkbox-wrapper-23 input {
  position: absolute;
  opacity: 0;
}

.checkbox-wrapper-23 input:checked+label svg path {
  stroke-dashoffset: 0;
}

.checkbox-wrapper-23 input:focus+label {
  transform: scale(1.03);
}

.checkbox-wrapper-23 input+label {
  display: block;
  border: 2px solid white;
  width: var(--size);
  height: var(--size);
  border-radius: 6px;
  cursor: pointer;
  transition: all .2s ease;
}

.checkbox-wrapper-23 input+label:active {
  transform: scale(1.05);
  border-radius: 12px;
}

.checkbox-wrapper-23 input+label svg {
  pointer-events: none;
  padding: 5%;
}

.checkbox-wrapper-23 input+label svg path {
  fill: none;
  stroke: $partial-secondary-color;
  stroke-width: 4px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 100;
  stroke-dashoffset: 101;
  transition: all 250ms cubic-bezier(1, 0, .37, .91);
}


//============= RADIO ===============


.btn-group {
  width: 100%;

  label {
    font-weight: bold;

    &:hover {
      background-color: $partial-secondary-color;
      color: #fff;
    }
  }
}


.btn-outline-personal {
  border-radius: 20px;
  background-color: white;
  border-color: $partial-secondary-color;

  &:hover {
    background-color: $partial-secondary-color;
  }
}


.btn-check:checked+.btn {
  color: #fff;
  border-color: $partial-secondary-color;
  background-color: $partial-secondary-color;

  &:hover {
    background-color: $partial-secondary-color;

  }
}

.form-range::-moz-range-thumb{
  background-color: $partial-secondary-color;
  &:active{
    background-color: $partial-primary-color;
  }
}

</style>