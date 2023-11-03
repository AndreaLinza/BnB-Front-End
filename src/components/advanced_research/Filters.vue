<script>

export default {

  data() {
    return {

    }
  }
}
</script>


<template>
  <div class="container">
    <h5 class="text-white mb-2">Stanze</h5>
    <div class="d-flex flex-wrap">
      <!--Numero Stanze-->
      <select class="form-select">
        <option selected>Numero di stanze</option>
        <option value="1">Monolocale: 1</option>
        <option value="2">Bilocale: 2</option>
        <option value="3">Trilocale: 3</option>
        <option value="3">Molteplici: 4+</option>
      </select>
      <!--Numero Bagni-->
      <select class="form-select">
        <option selected>Numero di bagni</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="3">4 o più</option>
      </select>
      <!-- Numero Letti-->
      <select class="form-select">
        <option selected>Numero di letti</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="3">4 o più</option>
      </select>
      <!--Range-->
      <select class="form-select" aria-label="Default select example">
        <option selected>Distanza dal centro</option>
        <option value="1">Centro: 0 - 1 km</option>
        <option value="2">Dintorni: 2 - 5 km </option>
        <option value="3">Periferia: 5 - 10 km</option>
        <option value="3">Fuori città: 10 - 20 km</option>
      </select>
    </div>
    <!--Servizi-->
    <div class="mt-4">
      <h5 class="text-white">Servizi</h5>
      <div class="checkbox-wrapper-23 d-flex align-items-center">
        <input type="checkbox" id="check-23">
        <label for="check-23" style="--size: 30px">
          <svg viewBox="0,0,50,50">
            <path d="M5 30 L 20 45 L 45 5"></path>
          </svg>
        </label>
        <span class="text-white ps-2">Servizio 1</span>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../../style/partials/variables' as *;

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

// ====================

//======Select======
select {
  width: calc((100% / 4) - 30px);
  margin-left: 15px;
  margin-right: 15px;
  background-color: transparent;
  color: black;
  border-color: transparent;
  border-bottom: 1px solid black;
  border-radius: 0;
  font-weight: 700;
}

.form-select {
  --bs-form-select-bg-img: url('/public/chevron-down-solid-white.svg');
  filter: invert(100%) sepia(0%) saturate(7476%) hue-rotate(110deg) brightness(98%) contrast(108%);
}

.form-select:focus {
  outline: 0 !important;
  box-shadow: none !important;
  border: 1px solid black;
  border-bottom: transparent;
}
</style>