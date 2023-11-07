<script>
import ContactForm from '../components/ContactForm.vue'
export default {
    components: {
        ContactForm,
    },
    data() {
        return {

        }
    }
}

</script>


<template>
    <div class="container">
        <!--Banner appartamento-->
        <!--Informazioni Appartamento-->
        <h1>Titolo Appartamento</h1><!---->

        <ContactForm></ContactForm>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
</style>

