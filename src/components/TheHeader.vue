<script>
import { store } from "../store";

export default {
    components: {

    },
    data() {
        return {
            store,
        }
    },
}

</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg shadow-lg">
            <div class="container">
                <!-- Logo -->
                <router-link class="navbar-brand" :to='{ name: "home" }'><img src="../../LogoBnb_white.png" alt="LogoB'n'B"
                        style="width: 80px;"></router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="h-100"><img class="img-nav" src="../../navicon-white.png" style="width:40px" alt="navicon">
                        <img class="d-none img-nav-hover" src="../../navicon-orange.png" style="width:40px"
                            alt="navicon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">


                    <!-- SearchBar -->
                    <div class="fake-searchbar">
                        <div class="underbar">
                            <button class="btn d-flex" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                                <div class="all-left">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div class="middle-one">
                                    <div class="text-white"><span>Cerca qui!</span></div>
                                </div>
                                <div class="all-right">
                                    <img class="d-none d-lg-block" src="../../transition-navicon.png" alt="navicon"
                                        style="width: 30px;">
                                </div>
                            </button>
                        </div>
                    </div>

                    <!-- Link -->
                    <ul class="navbar-nav mb-2 mb-lg-0 flex-shrink-0 text-center text-start-lg">
                        <li class="nav-item">
                            <router-link class="nav-link active " aria-current="page"
                                :to='{ name: "home" }'>Home</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Chi Siamo</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="http://127.0.0.1:8000/login">Login</a>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>




<style lang="scss" scoped>
@use "../style/partials/variables" as *;

nav {

    position: fixed;
    width: 100%;
    z-index: 100;
    background-color: $secondary-color !important;

    .fake-searchbar {
        display: flex;
        flex-grow: 1;
        justify-content: center;

        .underbar {
            border-bottom: 2px solid white;

            &:hover {
                border-color: #e55812;


            }

            button {
                width: 100%;
                margin-bottom: -5px;
                background-color: transparent !important;
                border-color: transparent;
                border: none;

                img {
                    transform: translateY(-60%);
                    transition: ease-in-out .5s;
                }

                .all-left {
                    i {
                        color: #fff;
                    }
                }

                &:hover {
                    i {
                        transition: .5s ease-out;
                        color: #e55812;
                    }

                    img {

                        transform: translateY(0);
                        transition: ease-in-out .5s;
                    }
                }

                .middle-one {
                    width: 360px;

                    span {
                        opacity: .5;

                    }
                }

                .all-right {
                    width: 35px;
                    height: 30px;
                    overflow: hidden;

                }
            }
        }

    }


    a {
        color: white !important;
        font-weight: bold;

        &:hover,
        &:active {
            color: $partial-secondary-color !important;
        }
    }

    .navbar-toggler {
        padding: 0.2rem 0.6rem;
        background-color: $secondary-color;
        border: var(--bs-border-width) solid white;

        &:focus {
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.705)
        }

        &:hover {

            transition: .5s;
            border-color: $partial-secondary-color;

            .img-nav {
                transition: .5s;
                display: none;
            }

            .img-nav-hover {
                transition: .5s;
                display: block !important;
            }
        }

    }


}
</style>