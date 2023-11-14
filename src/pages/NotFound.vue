<script>
import TopOffcanvas from "../components/partials/TopOffcanvas.vue";

export default {
    components: {
    TopOffcanvas
  }
}

</script>

<template>
    <TopOffcanvas></TopOffcanvas>

    <div class="container margin-top-custom">
        <h1 class="pt-5 text-center fs-4">Oops! Sembra che tu abbia smarrito la strada. Torna alla home e riprova!</h1>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.margin-top-custom {
    margin-top: 150px;
}

.container {
    margin-bottom: 5rem;
}
</style>