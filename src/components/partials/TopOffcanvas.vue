<script>
import Filters from './filters.vue';


export default {
    data() {
        return {};
    },
    components: { Filters }
}

</script>

<template>
    <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div class="offcanvas-header container">
            <h5 class="offcanvas-title text-white mx-3" id="offcanvasTopLabel">Filtri avanzati</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i
                    class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="offcanvas-body container d-flex flex-wrap">
            <Filters></Filters>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../style/partials/variables' as *;

.offcanvas.offcanvas-top {
    height: 60vh;
}

// =====================

.offcanvas-top {
    background-color: transparent;
    border-bottom: none !important;


    .offcanvas-header{
        background-color: $secondary-color;

    }
    .offcanvas-body {
        background-color: $secondary-color;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }

    .btn-close {
        background-image: none;
        color: white;
    }
}
</style>