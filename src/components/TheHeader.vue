<script>


export default {
    components: {

    },
}

</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg shadow-lg">
            <div class="container">
                <!-- Logo -->
                <a class="navbar-brand" href="/"><img src="../../public/LogoBnb_white.png" alt="LogoB'n'B"
                        style="width: 80px;"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="h-100"><img src="../../public/navicon.png" style="width:40px" alt=""></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">


                    <!-- SearchBar -->

                    <form class="d-flex input-group w-50 mx-auto search-bar" role="search">
                        <button class="btn btn-outline-personal" type="submit"><i
                                class="fa-solid fa-magnifying-glass"></i></button>
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>
                    </form>


                    <!--  -->
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
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
                                <li><a class="dropdown-item" href="#">Login</a></li>
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

        &:hover {
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
        background-color: white;
        border: var(--bs-border-width) solid white;


        &:focus {
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.705)
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