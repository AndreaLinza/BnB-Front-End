<script>
export default {
    data() {
        return {
            listCards: [
                {
                    title: "Siamo sempre a tua disposizione, dalla prenotazione fino al check-out",
                    icon: "fa-solid fa-house",
                    description: "Pianifica la tua vacanza con tranquillità! Il nostro team è a tua disposizione in ogni fase, dalla prenotazione fino al check-out. Siamo qui per rendere il tuo soggiorno il più piacevole possibile, risolvendo ogni tua esigenza e garantendo una vacanza senza preoccupazioni.",
                },
                {
                    title: "Esperti locali per case vacanze in tutta Europa",
                    icon: "fa-solid fa-headphones",
                    description: "Esplora l'Europa con la sicurezza di un vero insider. Le nostre case vacanze sono selezionate con cura e gestite da esperti locali che conoscono i segreti di ogni destinazione. Affitta con fiducia e scopri autentiche gemme nascoste attraverso gli occhi di chi le conosce meglio.",
                },
                {
                    title: "Sistemazioni affidabili per vacanze spensierate",
                    icon: "fa-solid fa-umbrella-beach",
                    description: "Pianifica le tue vacanze senza preoccupazioni! Offriamo sistemazioni affidabili, garantendo che il tuo soggiorno sia privo di stress e pieno di momenti indimenticabili. Scegli la tranquillità per le tue vacanze, con alloggi attentamente selezionati che offrono comfort e sicurezza in ogni destinazione.",
                },
            ],
        };
    },
}
</script>

<template>
    <div class="container pt-5 pb-5">
        <h2 class="pb-4 pb-md-2 text-white fw-bold text-center">I nostri punti di forza</h2>
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
@use "../../style/partials/variables" as *;

.my-card-box {
    background-color: $partial-primary-color;
    color: $primary-color;
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
        color: $partial-secondary-color;
    }

    &:hover {
        transform: translateY(-2%);
    }

    p {
        color: $grey;
    }

    i {
        color: $secondary-color;
    }
}
</style>