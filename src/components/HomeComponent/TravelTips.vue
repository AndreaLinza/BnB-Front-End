<script>
export default {
    data() {
        // return {
        //     listTraveTips: [
        //         {
        //             title: "Consiglio 1",
        //             img: "",
        //         },
        //         {
        //             title: "Consiglio 2",
        //             img: "https://picsum.photos/50/50?random=2",
        //         },
        //         {
        //             title: "Consiglio 3",
        //             img: "https://picsum.photos/50/50?random=3",
        //         },
        //         {
        //             title: "Consiglio 4",
        //             img: "https://picsum.photos/50/50?random=4",
        //         },
        //     ],
        // };
    },
}
</script>

<template>
    <div class="travel-tips">
        <div class="overlay">
            <div class="container">
                <h2 class="pb-4 text-center text-white fw-bold">Il nostro team</h2>
                <div class="row row-cols-md-2 row-cols-lg-4 row-cols-1 gy-3 justify-content-center">
                    <div class="col">
                        <div class="card-travel lighter-grey">
                            <img src="/images/Fratello1.jpg" alt="card.title">
                            <a href="https://github.com/Pietro-Leone" target="_blank">
                                <h5 class="p-2 secondary">Payeturo <i class="fa-brands fa-github"></i></h5>
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-travel">
                            <img src="/images/Sorella1.jpg" alt="card.title">
                            <a href="https://github.com/giuliacrr" target="_blank">
                                <h5 class="p-2 part-secondary">Solanum <i class="fa-brands fa-github"></i></h5>
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-travel lighter-grey">
                            <img src="/images/Padre1.jpg" alt="card.title">
                            <a href="https://github.com/AndreaLinza" target="_blank">
                                <h5 class="p-2 secondary">DrewDustlin <i class="fa-brands fa-github"></i></h5>
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-travel">
                            <img src="/images/Madre1.jpg" alt="card.title">
                            <a href="https://github.com/ElyPoli" target="_blank">
                                <h5 class="p-2 part-secondary">Grazie, Elisa <i class="fa-brands fa-github"></i></h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables" as *;

a {
    text-decoration: none;
}

.lighter-grey {
    background-color: $primary-color !important;
}

.travel-tips {
    background-image: url("https://pngimg.com/d/world_map_PNG3.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-top: 2px dashed $partial-primary-color;

    .overlay {
        padding: 3rem 0;
        background-color: rgba(255, 255, 255, 0.218);
    }

    .secondary {
        color: $secondary-color;
    }

    .part-secondary {
        color: $partial-secondary-color;
    }



    .card-travel {
        background-color: $grey;
        border-radius: 5px;

        img {
            height: 200px;
            width: 100%;
            object-fit: cover;
            object-position: center;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }

        h5 {
            margin: 0;
            // color: $primary-color;
        }
    }
}
</style>