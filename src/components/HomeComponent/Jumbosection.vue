<script>

export default {
    data() {
        return {

        }
    },

}

</script>


<template>
    <section>

        <div class="jumbo">
            <div class="container ">
                <h3>Benvenuti sul nostro sito</h3>
            </div>
        </div>
        <img src="../../../img/pexels-binyamin-mellish-106399.jpg" alt="">


    </section>
</template>


<style lang="scss" scoped>
@use '../../style/partials/variables' as *;

section {
    height: 700px;
    width: 100%;
    position: relative;

    .jumbo {
        position: absolute;
        z-index: 5;
        background: rgb(229, 88, 18);
        background: linear-gradient(138deg, rgba(229, 88, 18, 0.58) 0%, rgba(22, 105, 122, 0.53) 35%, rgba(214, 211, 200, 0.24) 100%);
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        display: inline-block;
        overflow: hidden;


        h3 {
            margin-top: 25%;
        }


    }

    img {
        width: 100%;
        height: 700px;
        min-height: 100%;
        object-fit: cover;

    }
}
</style>