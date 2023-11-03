<script>

export default {
    data() {
        return {
            slidePromoList: [
                {
                    title: "Casa 1",
                    img: "https://picsum.photos/50/50?random=1",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet a voluptatem dolore consequatur.",
                },
                {
                    title: "Casa 2",
                    img: "https://picsum.photos/50/50?random=2",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet a voluptatem dolore consequatur.",
                },
                {
                    title: "Casa 3",
                    img: "https://picsum.photos/50/50?random=3",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet a voluptatem dolore consequatur.",
                },
                {
                    title: "Casa 4",
                    img: "https://picsum.photos/50/50?random=4",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet a voluptatem dolore consequatur.",
                },
                {
                    title: "Casa 5",
                    img: "https://picsum.photos/50/50?random=5",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet a voluptatem dolore consequatur.",
                },
                {
                    title: "Casa 6",
                    img: "https://picsum.photos/50/50?random=6",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet a voluptatem dolore consequatur.",
                },
                {
                    title: "Casa 7",
                    img: "https://picsum.photos/50/50?random=7",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet a voluptatem dolore consequatur.",
                },
                {
                    title: "Casa 8",
                    img: "https://picsum.photos/50/50?random=8",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet a voluptatem dolore consequatur.",
                }
            ],
            currentSlide: 0,
            cardsForSlide: 3
        };
    },
    computed: {
        // Calcola le card visibili in base all'indice corrente e al numero di card da dover mostrare
        visibleSlide() {
            return this.slidePromoList.slice(this.currentSlide, this.currentSlide + this.cardsForSlide);
        },
    },
    methods: {
        onPrevClick() {
            if (this.currentSlide > 0) {
                this.currentSlide -= 1;
            }
        },
        onNextClick() {
            if (this.currentSlide + this.cardsForSlide < this.slidePromoList.length) {
                this.currentSlide += 1;
            }
        },
    },
}
</script>

<template>
    <div class="container pt-2 pb-4">
        <h2 class="pb-2">Le nostre migliori strutture</h2>
        <!-- Sezione carosello per dispositivi più grandi di 769px -->
        <div class="slider-container">
            <div class="promo-slider-box">
                <div class="row row-cols-1 row-cols-md-3 gy-4 justify-content-center">
                    <div v-for="(card, i) in visibleSlide" :key="i" class="col">
                        <div class="card">
                            <img :src="card.img" class="card-img-top" :alt="card.title">
                            <div class="card-body">
                                <div class="d-flex align-items-start justify-content-between">
                                    <h5 class="card-title">{{ card.title }}</h5>
                                </div>
                                <p class="card-text">{{ card.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Pulsanti di navigazione -->
                <div class="prev text-center" @click="onPrevClick">
                    <button type="button" class="btn btn-primary">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                </div>
                <div class="next text-center" @click="onNextClick">
                    <button type="button" class="btn btn-primary">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Sezione card per dispositivi più piccoli di 769px -->
        <div class="card-container">
            <div class="row row-cols-1 row-cols-md-3 gy-4 justify-content-center">
                <div v-for="(card, i) in slidePromoList" :key="i" class="col">
                    <div class="card">
                        <img :src="card.img" class="card-img-top" :alt="card.title">
                        <div class="card-body">
                            <div class="d-flex align-items-start justify-content-between">
                                <h5 class="card-title">{{ card.title }}</h5>
                            </div>
                            <p class="card-text">{{ card.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.card {
    border-color: $Silver;
    background-color: $Silver;
    cursor: pointer;
    transition: all .5s;

    img {
        transition: all .5s;
    }

    h5 {
        color: $CarribeanCurrent;
    }

    p {
        color: $Eggplant;
    }

    &:hover {
        transform: translateY(-2%);
        box-shadow: 2px 2px 10px 0px rgb(0, 0, 0, .1);

        img {
            filter: brightness(.8);
        }
    }
}

.promo-slider-box {
    position: relative;

    .prev {
        position: absolute;
        top: 50%;
        left: -60px;
        transform: translate(-50%, -50%);
    }

    .next {
        position: absolute;
        top: 50%;
        right: -90px;
        transform: translate(-50%, -50%);
    }
}

.slider-container {
    display: none;
}

.card-container {
    display: block;
}

@media (min-width: 769px) {
    .slider-container {
        display: block;
    }

    .card-container {
        display: none;
    }
}
</style>