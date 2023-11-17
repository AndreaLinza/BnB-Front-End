<script>
import Jumbosection from '../components/HomeComponent/Jumbosection.vue';
import PromoSlider from '../components/HomeComponent/PromoSlider.vue';
import StrengthsSection from '../components/HomeComponent/StrengthsSection.vue';
import TravelTips from '../components/HomeComponent/TravelTips.vue';
import TopOffcanvas from '../components/partials/TopOffcanvas.vue';

export default {
    created() {
        window.scrollTo(0, 0);
    },
    components: {
        PromoSlider,
        StrengthsSection,
        TravelTips,
        TopOffcanvas,
        Jumbosection
    },
}
</script>

<template>
    <TopOffcanvas></TopOffcanvas>
    <Jumbosection></Jumbosection>
    <PromoSlider></PromoSlider>
    <StrengthsSection></StrengthsSection>

    <!-- Sezione dedicata agli Host -->
    <div class="container custom-cont mb-5 pt-4 pb-4">
        <div class="row row-cols-md-2 row-cols-1 gy-3 justify-content-center text-center">
            <div class="col">
                <div class="h-100 d-flex flex-column justify-content-center align-items-center pt-2 pb-3">
                    <h2 class="mb-3 text-white">BoolBnB per gli Host</h2>
                    <h5 class="pb-2 text-white">Pubblica il tuo immobile su <span
                            class="fw-bold bnb-cc-write">BoolBnB</span>!</h5>
                    <p class=" text-white">
                        <i class="fa-solid fa-house"></i>
                        Assicurati più prenotazioni
                    </p>
                    <p class=" text-white">
                        <i class="fa-solid fa-laptop"></i>
                        Gestisci la tua proprietà in modo centralizzato
                    </p>
                    <p class=" text-white">
                        <i class="fa-solid fa-door-open"></i>
                        Accogli i tuoi ospiti al meglio
                    </p>
                    <a href="http://127.0.0.1:8000/api/user" type="button" class="btn fw-bold publish-btn">
                        Pubblica la tua struttura
                    </a>
                </div>
            </div>
            <div class="col">
                <div class="host-img pe-md-3">
                    <img src="https://st4.depositphotos.com/4218696/25980/i/450/depositphotos_259803460-stock-photo-young-and-happy-concept.jpg"
                        alt="host">
                </div>
            </div>
        </div>
    </div>

    <TravelTips></TravelTips>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.custom-cont {
    background-color: rgba(255, 255, 255, 0.12);
    border-radius: 20px;
    border: 2px dashed white;
}

.publish-btn {
    color: white;
    padding: 5px 15px;
    margin-top: 10px;
    background-color: $partial-secondary-color;
    border: 2px solid transparent;

    &:hover {
        color: $secondary-color;
        background-color: white;
        border-color: $partial-primary-color;
    }
}

.bnb-cc-write {
    color: $partial-secondary-color;

}

.fa-solid {
    color: $partial-secondary-color;
    margin-right: .5rem;
}

.host-img {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 300px;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
}
</style>