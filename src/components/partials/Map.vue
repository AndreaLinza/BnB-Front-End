<script>
import tt from '@tomtom-international/web-sdk-maps';

export default {
  props: {
    location: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      apiKey: 'O8G3nbrrFXgXG05YvxpNGd9inXNQbAJp',
      map: null,
      marker: null,
    };
  },
  methods: {
    initializeMap() {
      tt.setProductInfo('Bee\'n\'Bee', '1.0.0');

      this.map = tt.map({
        key: this.apiKey,
        container: this.$refs.map,
        center: this.location,
        zoom: 17,
      });
        this.marker = new tt.Marker().setLngLat(this.location).addTo(this.map);
    },
  },
  mounted(){
    console.log(this.location);
    this.initializeMap();
  },
  // watch: {
  //   location: function (newLocation) {
  //     if (Array.isArray(newLocation) && newLocation.length === 2 && !isNaN(newLocation[0]) && !isNaN(newLocation[1])) {
  //       // Rimuovi il marker precedente se esiste
  //       if (this.marker) {
  //         this.marker.remove();
  //       }
  //       this.initializeMap();
  //     }
  //   }
  // }
};
</script>

<template>
  <div>
    <div ref="map" class="map" id="map"></div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;

#map {
  width: 100%;
  height: 400px;
}
</style>
