<script>
export default {
    data() {
        return {
            listCards: [
                {
                    title: "Siamo sempre a tua disposizione, dalla prenotazione fino al check-out",
                    icon: "fa-solid fa-house",
                    description: "Proin blandit quam non aliquet tempor. Praesent pellentesque scelerisque tristique. Nunc dictum lobortis dolor dignissim dignissim. Mauris cursus velit et justo ullamcorper imperdiet. Fusce quis sapien arcu.",
                },
                {
                    title: "Esperti locali per case vacanse in tutta Europa",
                    icon: "fa-solid fa-headphones",
                    description: "Proin blandit quam non aliquet tempor. Praesent pellentesque scelerisque tristique. Nunc dictum lobortis dolor dignissim dignissim. Mauris cursus velit et justo ullamcorper imperdiet. Fusce quis sapien arcu.",
                },
                {
                    title: "Sistemazioni affidabili per vacanze spesierate",
                    icon: "fa-solid fa-umbrella-beach",
                    description: "Proin blandit quam non aliquet tempor. Praesent pellentesque scelerisque tristique. Nunc dictum lobortis dolor dignissim dignissim. Mauris cursus velit et justo ullamcorper imperdiet. Fusce quis sapien arcu.",
                },
            ],
        };
    },
}
</script>

<template>
    <div class="container pt-2 pb-5">
        <h2 class="pb-2">I nostri punti di forza</h2>
        <div class="row row-cols-md-3 row-cols-1 gy-3">
            <div class="col" v-for="(card, i) in listCards" :key="i">
                <div class="my-card-box p-4">
                    <div>
                        <i :class="card.icon"></i>
                        <h5>{{ card.title }}</h5>
                        <p>{{ card.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.my-card-box {
    background-color: $Eggplant;
    color: $Silver;
    height: 100%;
    width: 100%;
    cursor: pointer;
    transition: transform .5s;
    border-radius: 5px;

    h5 {
        margin: 0;
        padding: 1rem 0;
        font-weight: bold;
        font-size: 1rem;
        color: $Arancione;
    }

    &:hover {
        transform: translateY(-2%);
    }
}
</style>