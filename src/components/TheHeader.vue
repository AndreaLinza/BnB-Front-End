<script>
import { store } from "../store";

export default {
    data() {
        return {
            store,
        }
    },
    mounted() {
        document.addEventListener('DOMContentLoaded', () => {
            let navbar = document.getElementById("navbar");
            let underbar = document.querySelector(".underbar");
            let navlinks = document.querySelectorAll(".nav-link")


            window.onscroll = function () {
                if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
                    navbar.classList.add("navbar-scrolled");
                    underbar.classList.add('underbar-scrolled')
                    navlinks.forEach(navlink => {
                        navlink.classList.add('nav-link-scrolled')

                    })


                } else {
                    navbar.classList.remove("navbar-scrolled");
                    underbar.classList.remove('underbar-scrolled')

                    navlinks.forEach(navlink =>{
                        navlink.classList.remove('nav-link-scrolled')

                    })


                }
            };
        });
    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg shadow-lg" id="navbar">
            <div class="container">
                <!-- Logo -->
                <router-link class="navbar-brand" :to='{ name: "home" }'><img src="../../LogoBnb_white.png" alt="LogoB'n'B"
                        style="width: 80px;"></router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="h-100"><img class="img-nav" src="../../navicon-white.png" style="width:40px" alt="navicon">
                        <img class="d-none img-nav-hover" src="../../navicon-blue.png" style="width:40px" alt="navicon">
                    </span>
                </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">


                    <!-- SearchBar -->
                    <div class="fake-searchbar">
                        <div class="underbar">
                            <button class="btn d-flex" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                                <div class="all-left">
                                    <i class="icon fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div class="middle-one">
                                    <div class="text-white"><span>Cerca qui!</span></div>
                                </div>
                                <div class="all-right">
                                    <img class="d-none d-lg-block" src="../../transition-navicon-blue.png" alt="navicon"
                                        style="width: 30px;">
                                </div>
                            </button>
                        </div>
                    </div>

                    <!-- Link -->
                    <ul class="navbar-nav mb-2 mb-lg-0 flex-shrink-0 text-center text-start-lg">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page"
                                :to='{ name: "home" }'>Home</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Chi Siamo</a>
                        </li>

            <li class="nav-item">
              <a class="nav-link" href="http://127.0.0.1:8000/api/user">Area Personale</a>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>




<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.navbar {

    position: fixed;
    width: 100%;
    z-index: 100;
    // background-color: rgba(22, 105, 122, 0.795) !important;
    background-color: transparent !important;
    transition: ease-out .5s;

    &.navbar-scrolled {
        background-color: $secondary-color !important;

    }

    .fake-searchbar {
        display: flex;
        flex-grow: 1;
        justify-content: center;

        .underbar {
            transition: .5s;
            border-bottom: 2px solid white;

            &:hover {
                border-color: $secondary-color;

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
                    .icon {
                        color: #fff;
                        transition: .5s;

                    }
                }

                &:hover {
                    .icon {
                        transition: .5s;
                        color: $secondary-color;
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

            //Classi che si attivano quando c'è lo scroll della pagina
            &.underbar-scrolled:hover {
                transition: .5s;
                border-bottom: 2px solid $partial-secondary-color;

                .icon {
                    transition: .5s ease-out;
                    color: $partial-secondary-color !important;
                }


            }

        }

    }

    //===============Right-Section-Navbar====================//
    .nav-link {
        color: white !important;
        font-weight: bold;

        &:hover,
        &:active {
            color: $secondary-color !important;
        }
        &.nav-link-scrolled:hover {
            transition: .5s;
            color: $partial-secondary-color !important;
        }
        

    }
    .navbar-toggler {
        padding: 0.2rem 0.6rem;
        background-color: transparent;
        border: var(--bs-border-width) solid white;

    &:focus {
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.705)
    }

    &:hover {

            transition: .5s;
            border-color: $secondary-color;

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