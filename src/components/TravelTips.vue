<script>
export default {
    data() {
        return {
            listTraveTips: [
                {
                    title: "Consiglio 1",
                    img: "https://picsum.photos/50/50?random=1",
                },
                {
                    title: "Consiglio 2",
                    img: "https://picsum.photos/50/50?random=2",
                },
                {
                    title: "Consiglio 3",
                    img: "https://picsum.photos/50/50?random=3",
                },
                {
                    title: "Consiglio 4",
                    img: "https://picsum.photos/50/50?random=4",
                },
            ],
        };
    },
}
</script>

<template>
    <div class="travel-tips">
        <div class="overlay">
            <div class="container">
                <h2 class="pb-4 text-center">Suggerimenti di viaggio</h2>
                <div class="row row-cols-md-2 row-cols-lg-4 row-cols-1 gy-3 justify-content-center">
                    <div class="col" v-for="(card, i) in listTraveTips" :key="i">
                        <div class="card-travel">
                            <img :src="card.img" :alt="card.title">
                            <h5 class="p-2">{{ card.title }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.travel-tips {
    background-image: url("https://www.shambix.com/wp-content/uploads/2019/09/google-maps-world-smartsync-at-for-google-world-map.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .overlay {
        padding: 3rem 0;
        background-color: rgba(229, 88, 18, 0.3);
    }

    .card-travel {
        background-color: $CarribeanCurrent;
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
            color: $Silver;
        }
    }
}
</style>