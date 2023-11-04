<script>

export default {

  data() {
    return {

    }
  }
}
</script>


<template>
  <form action="">
    <div class="container">
      <div class="d-flex flex-wrap">
        <!--Numero di stanze-->
        <div class="radio-dist">
          <div class="d-flex align-items-center ">
            <span class="text-white fw-bold ms-2 ">Quantità di stanze</span>
            <div class="deco-line"></div>
          </div>
          <div class="radio-input">
            <label>
              <input value="stanze-1" name="stanze" id="stanze-1" type="radio" checked="">
              <span class="fw-bold">Nessuna</span>
            </label>
            <label>
              <input value="stanze-2" name="stanze" id="stanze-2" type="radio">
              <span class="fw-bold">1</span>
            </label>
            <label>
              <input value="stanze-3" name="stanze" id="stanze-3" type="radio">
              <span class="fw-bold">2</span>
            </label>
            <label>
              <input value="stanze-4" name="stanze" id="stanze-4" type="radio">
              <span class="fw-bold">3 +</span>
            </label>
            <span class="selection"></span>
          </div>
        </div>
        <!--Numero di letti-->
        <div class="radio-dist">
          <div class="d-flex align-items-center ">
            <span class="text-white fw-bold ms-2 ">Quantità di letti</span>
            <div class="deco-line"></div>
          </div>
          <div class="radio-input">
            <label>
              <input value="letti-1" name="letti" id="letti-1" type="radio" checked="">
              <span class="fw-bold">Nessuna</span>
            </label>
            <label>
              <input value="letti-2" name="letti" id="letti-2" type="radio">
              <span class="fw-bold">1</span>
            </label>
            <label>
              <input value="letti-3" name="letti" id="letti-3" type="radio">
              <span class="fw-bold">2</span>
            </label>
            <label>
              <input value="letti-4" name="letti" id="letti-4" type="radio">
              <span class="fw-bold">3 +</span>
            </label>
            <span class="selection"></span>
          </div>
        </div>
        <!--Numero di  Bagni-->
        <div class="radio-dist">
          <div class="d-flex align-items-center ">
            <span class="text-white fw-bold ms-2 ">Quantità di bagni</span>
            <div class="deco-line"></div>
          </div>
          <div class="radio-input">
            <label>
              <input value="bagni-1" name="bagni" id="bagni-1" type="radio" checked="">
              <span class="fw-bold">Nessuna</span>
            </label>
            <label>
              <input value="bagni-2" name="bagni" id="bagni-2" type="radio">
              <span class="fw-bold">1</span>
            </label>
            <label>
              <input value="bagni-3" name="bagni" id="bagni-3" type="radio">
              <span class="fw-bold">2</span>
            </label>
            <label>
              <input value="bagni-4" name="bagni" id="bagni-4" type="radio">
              <span class="fw-bold">3 +</span>
            </label>
            <span class="selection"></span>
          </div>
        </div>
        <!--Distanza dal centro-->
        <div class="radio-dist">
          <div class="d-flex align-items-center ">
            <span class="text-white fw-bold ms-2 ">Distanza centro</span>
            <div class="deco-line"></div>
          </div>
          <div class="radio-input">
            <label>
              <input value="dista-1" name="dista" id="dista-1" type="radio" checked="">
              <span class="fw-bold">Centro</span>
            </label>
            <label>
              <input value="dista-2" name="dista" id="dista-2" type="radio">
              <span class="fw-bold">2-5km</span>
            </label>
            <label>
              <input value="dista-3" name="dista" id="dista-3" type="radio">
              <span class="fw-bold">5-20km</span>
            </label>
            <label>
              <input value="dista-4" name="dista" id="dista-4" type="radio">
              <span class="fw-bold">10-20km</span>
            </label>
            <span class="selection"></span>
          </div>
        </div>
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
    <div class="text-center"><button class="general-btn fw-bold">Cerca</button></div>
  </form>
</template>


<style lang="scss" scoped>
@use '../../style/partials/variables' as *;

.deco-line {
  height: 2px;
  background-color: $partial-secondary-color;
  width: 100px;
  margin-top: 4px;
  margin-left: 5px;
}

.radio-dist {
  width: calc((100% / 4) - 10px);
  margin-left: 5px;
  margin-right: 5px;
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

// ====================
// ========RADIO========
.radio-input input {
  display: none;
}

.radio-input {
  --container_width: 300px;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 9999px;
  background-color: #fff;
  color: $grey;
  width: var(--container_width);
  overflow: hidden;
  border: 2px solid $partial-secondary-color;
}

.radio-input label {
  width: 100%;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-weight: 600;
  letter-spacing: -1px;
  font-size: 14px;
}

.selection {
  display: none;
  position: absolute;
  height: 100%;
  width: calc(var(--container_width) / 4);
  z-index: 0;
  left: 0;
  top: 0;
  transition: .15s ease;
}

.radio-input label:has(input:checked) {
  color: #fff;
}

.radio-input label:has(input:checked)~.selection {
  background-color: $partial-secondary-color;
  display: inline-block;
}

.radio-input label:nth-child(1):has(input:checked)~.selection {
  transform: translateX(calc(var(--container_width) * 0/4));
}

.radio-input label:nth-child(2):has(input:checked)~.selection {
  transform: translateX(calc(var(--container_width) * 1/4));
}

.radio-input label:nth-child(3):has(input:checked)~.selection {
  transform: translateX(calc(var(--container_width) * 2/4));
}

.radio-input label:nth-child(4):has(input:checked)~.selection {
  transform: translateX(calc(var(--container_width) * 3/4));
}

// =====================
</style>