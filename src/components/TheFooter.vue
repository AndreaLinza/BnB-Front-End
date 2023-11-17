<script>
export default {
    data() {
        return {
            footerList: [
                {
                    title: "Assistenza",
                    link: ["Centro Assistenza", "BoolCover", "Antidiscriminazione", "Supporto alla disabilità", "Opzioni di cancellazione", "Segnala problema nel quartiere"]

                },
                {
                    title: "Ospitare",
                    link: ["Apri un BoolBnB", "BoolCover per gli host", "Risorse per gli host", "Forum della community", "Ospitare responsabilmente"]
                },
                {
                    title: "BoolBnB",
                    link: ["Newsroom", "Nuove funzionalità", "Opportunità di lavoro", "Investitori", "Gift Card", "Soggiorni con Boolbnb.org"]
                }
            ]

        }
    }
}

</script>

<template>
    <footer>
        <div class="container">
            <a href="/"><img class="logo py-4 mb-4" src="../../LogoBnb_white.png" alt="LogoB'n'B" style="width: 150px;"></a>
            <div class="row row-cols-lg-4 justify-content-lg-between">
                <div class="col-12" v-for="list in footerList">
                    <div class="d-flex justify-content-center">
                        <div>
                            <h4 class="fw-bold mt-4">{{ list.title }}</h4>
                            <ul v-for="link in list.link">
                                <li><a href="#">{{ link }}</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr class="d-lg-none m-auto">
                </div>
            </div>
            <hr class="d-none d-lg-block">
            <div class="mt-4">
                <button><i class="fa-solid fa-globe" style="color: #ffffff;"></i><span class="ps-1">Italiano
                        (IT)</span></button>
                <button>€ <span>EUR</span></button>
            </div>
            <div>
                <p class="mt-2">© 2023 Bee'n'Bee, Inc.</p>
            </div>
            <div>
                <ul class="d-flex flex-wrap">
                    <li class="ps-0">Privacy</li>
                    <span><i class="fa-solid fa-circle" style="color: #ffffff; font-size: 2px;"></i></span>
                    <li>Termini</li>
                    <span><i class="fa-solid fa-circle" style="color: #ffffff; font-size: 2px;"></i></span>
                    <li>Mappe del Sito</li>
                    <span><i class="fa-solid fa-circle" style="color: #ffffff; font-size: 2px;"></i></span>
                    <li>Dettagli dell'azienda</li>
                </ul>
            </div>
        </div>
    </footer>
</template>


<style lang="scss" scoped>
@use '../style/partials/variables' as *;

footer {
    color: white;
    padding: 2rem 0;
    margin-top: 4rem;

    .logo {
        margin-left: 50%;
        transform: translateX(-50%);
    }

    ul {
        padding: 0;

        li {
            padding: .3rem .5rem;
            list-style: none;
            cursor: pointer;

            a {
                text-decoration: none;
                color: white;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    button {
        padding-left: 0;
        padding-right: 0.5rem;
        color: white;
        background-color: transparent;
        border: none;

        span:hover {
            text-decoration: underline;
        }
    }
}
</style>