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
            <div class="container content">
                <h2 class="fw-bold display-3 text-center">
                    <span class="text-uppercase">Bee'n'Bee</span><br>
                    <span class="fs-1">Dove il tuo soggiorno diventa un'avventura!</span>
                </h2>
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
        background: linear-gradient(180deg, rgba(229, 88, 18, 0.58) 0%, rgba(22, 105, 122, 0.53) 85%, rgba(214, 211, 200, 0.24) 100%);
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        display: inline-block;
        overflow: hidden;

        .content{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            h2{
                color: rgba(255, 255, 255, 0.699);
            }
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