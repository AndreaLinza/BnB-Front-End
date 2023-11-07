<script>
import axios from "axios";
import ContactForm from '../components/ContactForm.vue';

export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            apartment: {},
        };
    },
    methods: {
        fetchApartment() {
            axios.get("http://127.0.0.1:8000/api/apartments/" + this.$route.params.slug)
                .then((response) => { this.apartment = response.data });
            console.log(this.apartment);
        },
        fetchImage(apartment) {
            return `http://127.0.0.1:8000/storage/${apartment.thumbnail}`;
        },
    },
    mounted() {
        this.fetchApartment();
        console.log(this.apartment);
    }

}
</script>


<template>
    <div class="container">
        <!--Banner appartamento-->
        <div class="show-img small-pres text-center">
            <img :src="fetchImage(apartment)" class="img-fluid" alt="{{ apartment.slug }}">
        </div>
        <!--Nome appartamento-->
        <div class="infos small-pres">
            <h1>{{ apartment.title }}</h1>
        </div>

        <!--informazioni appartamento-->


        <!--Form di contatto-->
        <ContactForm></ContactForm>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.apt-pres {
    max-height: fit-content;
}

.show-img {
    max-width: 100%;
    object-fit: cover;
    margin-right: 30px;
}
</style>

