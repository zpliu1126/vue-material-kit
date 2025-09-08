<script setup>
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import headerBg from "@/assets/img/bgs/bg1.avif";


//component
import DefaultFooter from "@/components_myself/footer/FooterDefault.vue";

import Header from "@/examples/Header.vue";

const body = document.getElementsByTagName("body")[0];
import { onMounted, onUnmounted } from "vue";
//hooks
</script>

<template>
    <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
            <div class="col-12">
                <NavbarDefault :sticky="true" />
            </div>
        </div>
    </div>
    <Header>
        <div class="page-header min-vh-55" :style="`background-image: url(${headerBg})`" loading="lazy">
            <span class="mask bg-gradient-dark opacity-4"></span>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center mx-auto my-auto">
                        <h1 class="text-white">
                            Achievements<span class="text-white"></span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </Header>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 min-vh-100">

    </div>
    <hr class="horizontal dark my-5" />
    <DefaultFooter />
</template>
