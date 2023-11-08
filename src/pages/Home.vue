<script>
import PromoSlider from '../components/HomeComponent/PromoSlider.vue';
import StrengthsSection from '../components/HomeComponent/StrengthsSection.vue';
import TravelTips from '../components/HomeComponent/TravelTips.vue';
import TopOffcanvas from '../components/partials/TopOffcanvas.vue';

export default {
    components: {
        PromoSlider,
        StrengthsSection,
        TravelTips,
        TopOffcanvas
    },
}
</script>

<template>
    
    <TopOffcanvas></TopOffcanvas>
    <PromoSlider></PromoSlider>
    <StrengthsSection></StrengthsSection>

    <!-- Sezione dedicata agli Host -->
    <div class="container pt-2 pb-5">
        <h2 class="pb-2">BoolBnB per gli Host</h2>
        <div class="row row-cols-md-2 row-cols-1 gy-3 justify-content-center text-center">
            <div class="col">
                <div class="h-100 d-flex flex-column justify-content-center align-items-center">
                    <h5 class="pb-2">Pubblica il tuo immobile su BoolBnB!</h5>
                    <p>
                        <i class="fa-solid fa-house"></i>
                        Assicurati più prenotazioni
                    </p>
                    <p>
                        <i class="fa-solid fa-laptop"></i>
                        Gestisci la tua proprietà in modo centralizzato
                    </p>
                    <p>
                        <i class="fa-solid fa-door-open"></i>
                        Accogli i tuoi ospiti al meglio
                    </p>
                    <button type="button" class="btn btn-primary mt-2">
                        Pubblica la tua struttura
                    </button>
                </div>
            </div>
            <div class="col">
                <img class="host-img"
                    src="https://st4.depositphotos.com/4218696/25980/i/450/depositphotos_259803460-stock-photo-young-and-happy-concept.jpg"
                    alt="host">
            </div>
        </div>
    </div>

    <TravelTips></TravelTips>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

// ======OFFCANVAS======
.offcanvas.offcanvas-top {
    height: 60vh;
}

// =====================

.offcanvas-top {
    background-color: transparent;
    border-bottom: none !important;

    .offcanvas-header,
    .offcanvas-body {
        background-color: $secondary-color;
    }

    .btn-close {
        background-image: none;
        color: white;
    }
}



.host-img {
    height: 300px;
    width: 100%;
    object-fit: contain;
    object-position: center;
}
</style>