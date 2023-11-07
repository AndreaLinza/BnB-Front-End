<script>
import { store, fetchApartments } from "../store";

export default {
    components: {

    },
    data() {
        return {
            store,
            searchPage: {
                title: "search",
                route: "search",
            },
            filter: {
                city: '',
            },
        }
    },
    methods: {
        submitResearch() {
            fetchApartments(this.filter)
            this.$router.push({ name: 'search', route: "search" });
        }
    },
}

</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg shadow-lg">
            <div class="container">
                <!-- Logo -->
                <router-link class="navbar-brand" :to='{ name: "home" }'><img src="../../LogoBnb_white.png"
                        alt="LogoB'n'B" style="width: 80px;"></router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="h-100"><img src="../../navicon-white.png" style="width:40px" alt="navico"></span>
                    <span class="h-100"><img class="d-none" src="../../navicon-orange.png" style="width:40px" alt="navico"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">


                    <!-- SearchBar -->

                    <form class="d-flex input-group w-50 mx-lg-auto search-bar" action="POST"
                        @submit.prevent="submitResearch()" role="search">
                        <button class="btn btn-outline-personal" type="submit">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search"
                            v-model="filter.city">
                        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                            <div class="trans-icon">
                                <img 
                                src="../../transition-navicon.png" alt="navicon" style="width: 30px;">
                            </div>
                        </button>
                    </form>


                    <!--  -->
                    <ul class="navbar-nav mb-2 mb-lg-0 flex-shrink-0">
                        <li class="nav-item">
                            <router-link class="nav-link active " aria-current="page"
                                :to='{ name: "home" }'>Home</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Chi Siamo</a>
                        </li>


                        <!-- DropDown Menu -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Account
                            </a>
                            <ul class="dropdown-menu dropdown-menu-lg-end dd-bg">
                                <li><a class="dropdown-item" href="http://127.0.0.1:8000/login">Login</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
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
    .search-bar {
        border-bottom: 2px solid white;

        button {
            background-color: transparent !important;
            border-color: transparent;
            border: none;

            &:hover {
                color: $partial-secondary-color;
            }

            .trans-icon {
                width: 30px;
                height: 30px;
                overflow: hidden;

                img{
                    transform: translateY(-50%);
                    transition: ease-in-out .5s;
                    &:hover{
                        transform: translateY(0);
                    transition: ease-in-out .5s;
                    }
                }
            }
        }

        .form-control {
            background-color: transparent !important;
            border-color: transparent;
            color: white;

            &::placeholder {
                color: white;
            }


        }

        .form-control:focus {
            box-shadow: none;
        }
    }

    position: fixed;
    width: 100%;
    z-index: 100;
    background-color: $secondary-color !important;

    a {
        color: white !important;
        font-weight: bold;

        &:hover,
        &:active {
            color: $partial-secondary-color !important;
        }
    }

    .dd-bg {
        background-color: $secondary-color;
        border-color: white;

        & a {
            font-weight: lighter;
        }

        & a:hover {
            background-color: $partial-secondary-color !important;
            color: white !important;
        }
    }

    .navbar-toggler {
        padding: 0.2rem 0.6rem;
        background-color: $secondary-color;
        border: var(--bs-border-width) solid white;

        &:focus {
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.705)
        }

        span{
            &:hover{
                img{
                    display: block !important;
                }
            }
        }
    }


    .btn-outline-personal {

        --bs-btn-color: #ffffff;
        --bs-btn-border-color: white;
        --bs-btn-hover-color: #000000;
        --bs-btn-hover-bg: #ffffff;
        --bs-btn-hover-border-color: #ffffff;
        --bs-btn-focus-shadow-rgb: 25, 135, 84;
        --bs-btn-active-color: #fff;
        --bs-btn-active-bg: #16697a;
        --bs-btn-active-border-color: white;
        --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        --bs-gradient: none;

        &:hover {
            border-right-color: #000;
        }

        &:active {
            border-right-color: #fff;

        }
    }

}
</style>