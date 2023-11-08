<script>

export default {

    props: {
        movingCard: {
            type: Boolean
        },
        card: {
            type: Object,
            required: true,
            default: () => ({
                title: "",
                city: "",
                address: "",
            })
        },
        thumbfunction: {
            type: String,
            required: true
        }


    },


}


</script>

<template>
    <div class="card h-100" :class="{ 'slide-active': movingCard }">
        <img :src="thumbfunction" class="card-img-top" :alt="card.title">
        <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
                <h5 class="card-title">{{ card.title }}</h5>
            </div>
            <p class="card-text">{{ card.city }}</p>
            <p class="card-text">{{ card.address }}</p>
            <!-- Servizi -->
            <p class="card-text mb-0 pb-0 fw-bold">Servizi inclusi:</p>
            <ul>
                <li class="card-text" v-for="(service, z) in card.services" :key="z">
                    {{ service.title }}
                </li>
            </ul>
            <!-- Pulsante per visualizzare un appartamento  -->
            <router-link class="btn btn-primary" role="button"
                :to="{ name: 'apartments.show', params: { slug: card.slug } }">
                Scopri di più
            </router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../style/partials/variables' as *;

.card {
    opacity: 1;
    border-color: $primary-color;
    background-color: $partial-secondary-color;
    cursor: pointer;
    transition: all .5s;

    img {
        transition: all .5s;
        height: 200px;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }

    h5 {
        color: $secondary-color;
    }

    p {
        color: $partial-primary-color;
    }

    &:hover {
        transform: translateY(-2%);
        box-shadow: 2px 2px 10px 0px rgb(0, 0, 0, .1);

        img {
            filter: brightness(.8);
        }
    }
}

.slide-active {
    opacity: 0.4;
}
</style>