<script>
import { store, fetchApartments, fetchServices } from "../../store";

export default {
  data() {
    return {
      store,
      searchPage: {
        title: "search",
        route: "search",
      },
      suggestions: [],
      advancedFilters: [
        {
          name: 'rooms_number',
          label: 'Quantità di stanze',
          options: [
            { label: 'Qualsiasi', value: '' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3+', value: '3' },
          ],
        },
        {
          name: 'beds_number',
          label: 'Quantità di letti',
          options: [
            { label: 'Qualsiasi', value: '' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3+', value: '3' },
          ],
        },
        {
          name: 'bathrooms_number',
          label: 'Quantità di bagni',
          options: [
            { label: 'Qualsiasi', value: '' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3+', value: '3' },
          ],
        },
      ]
    };
  },
  methods: {
    submitResearch() {
      fetchApartments(store.filter);
      this.$router.push({ name: 'search', route: "search", query: store.filter });
    },
    fetchTomTomSuggestions() {
      const apiKey = 'O8G3nbrrFXgXG05YvxpNGd9inXNQbAJp';

      fetch(`https://api.tomtom.com/search/2/search/${store.filter.address}.json?key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          this.suggestions = data.results;
        });
    },
    selectSuggestion(suggestion) {
      store.filter.address = suggestion.address.freeformAddress;
      this.suggestions = [];
    },
  },
  mounted() {
    fetchServices();
  },
}
</script>

<template>
  <form action="POST" @submit.prevent="submitResearch()" class="container justify-content-center">
    <!-- Searchbar -->
    <div class="d-flex flex-column flex-grow-1 mb-5">
      <input class="form-control underline" type="search" name="address" @input="fetchTomTomSuggestions"
        placeholder="Search" v-model="store.filter.address">
      <div class="position-relative">
        <ul id="address-suggestions" class="list-group position-absolute w-100 overflow-auto"
          style="max-height: 250px; z-index: 99999;">
          <li class="list-group-item" v-for="suggestion in suggestions" :key="suggestion.id"
            @click="selectSuggestion(suggestion)">
            {{ suggestion.address.freeformAddress }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Filtri avanzati -->
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3">
      <div v-for="advancedFilter in advancedFilters" :key="advancedFilter.name" class="col">
        <div class="d-flex align-items-center flex-wrap">
          <span class="text-white fw-bold ms-2 pb-2">{{ advancedFilter.label }}</span>
          <div class="deco-line"></div>
        </div>
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
          <div class="my-btn-box" v-for="(option, index) in advancedFilter.options">
            <input :key="index" type="radio" class="btn-check" :name="advancedFilter.name"
              :id="`${advancedFilter.name}${index}`" autocomplete="off" v-model="store.filter[advancedFilter.name]"
              :checked="index === 0" :value="option.value" />
            <label :for="`${advancedFilter.name}${index}`" class="btn btn-outline-personal">
              {{ option.label }}
            </label>
          </div>
        </div>
      </div>

      <!--Distanza dal centro-->
      <div class="col">
        <div class="d-flex align-items-center ">
          <span class="text-white fw-bold ms-2 pb-2">Distanza centro</span>
          <div class="deco-line"></div>
        </div>
        <input type="range" class="form-range" min="1" max="21" step="5" name="radius" id="radius0"
          v-model="store.filter.radius">
        <div class="range-dist">
          <span>>1Km</span>
          <span class="ms-2">5Km</span>
          <span class="ms-3">10km</span>
          <span class="ms-2">15km</span>
          <span data-value="20">20Km</span>
        </div>
      </div>
    </div>

    <!--Servizi-->
    <h5 class="text-white mt-5">Servizi</h5>
    <div class=" d-flex flex-wrap pt-3">
      <div class="checkbox-wrapper-23 d-flex p-2 align-items-center" v-for="(service, i) in  store.services ">
        <input type="checkbox" :id="`${i}`" v-model="store.filter.services" :value="service.id">
        <label :for="`${i}`" style="--size: 30px">
          <svg viewBox="0,0,50,50">
            <path d="M5 30 L 20 45 L 45 5"></path>
          </svg>
        </label>
        <span class="text-white ps-2">{{ service.title }}</span>
      </div>
    </div>

    <div class="text-center mt-4">
      <button class="general-btn fw-bold" type="submit" data-bs-dismiss="offcanvas">
        Filtra
      </button>
    </div>

  </form>
</template>


<style lang="scss" scoped>
@use '../../style/partials/variables' as *;

.form-control {
  background-color: transparent !important;
  border-color: transparent;
  border-bottom: white;
  color: white;

  &::placeholder {
    color: white;
  }
}

.list-group-item {
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #e55812;
  }
}

.form-control:focus {
  box-shadow: none;
  color: #fff;
  border-color: $partial-secondary-color;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.705);
}

.underline {
  background-color: transparent;
  border-color: transparent;
  border-bottom: 2px solid white;
  border-radius: 0;
  width: 40%;
  margin: auto;
}

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
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;

  .my-btn-box {
    width: 100%;

    &:first-of-type {
      label {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      }
    }

    &:last-of-type {
      label {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
      }
    }
  }

  label {
    font-weight: bold;

    &:hover {
      background-color: $partial-secondary-color;
      color: #fff;
    }
  }
}

.btn-outline-personal {
  width: 100%;
  border-radius: 0px;
  background-color: white;
  border-color: $partial-secondary-color;
  text-align: center;

  &:hover {
    background-color: $partial-secondary-color;
  }
}


.range-dist {
  display: flex;
  justify-content: space-between;

  span {
    color: #fff;
    font-weight: bold;
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

.form-range::-moz-range-thumb {
  background-color: $partial-secondary-color;

  &:active {
    background-color: $partial-primary-color;
  }
}

.form-range::-webkit-slider-thumb {
  background-color: $partial-secondary-color;

  &:active {
    background-color: $partial-primary-color;
  }
}
</style>