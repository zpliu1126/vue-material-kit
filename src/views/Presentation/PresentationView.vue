<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";

import Header from "../../examples/Header.vue";
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";
import BackgroundBlogCard from "@/examples/cards/blogCards/BackgroundBlogCard.vue";



//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";

// section myself
import PresentationResearch from './Sections/PresentationResearch.vue'
import PresentationNew from './Sections/PresentationNew.vue'
import PresentationTeam from './Sections/PresentationTeam.vue'
import DefaultFooter from "@/components_myself/footer/FooterDefault.vue";
import PresentationShow from "./Sections/PresentationShow.vue";


//images
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import wavesWhite from "@/assets/img/waves-white.svg";
import logoBootstrap from "@/assets/img/logos/bootstrap5.jpg";
import logoTailwind from "@/assets/img/logos/icon-tailwind.jpg";
import logoVue from "@/assets/img/logos/vue.jpg";
import logoAngular from "@/assets/img/logos/angular.jpg";
import logoReact from "@/assets/img/logos/react.jpg";
import logoSketch from "@/assets/img/logos/sketch.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
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
    <div class="page-header min-vh-75" :style="`background-image: url(${vueMkHeader})`" loading="lazy">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 text-center mx-auto position-relative">
            <h1 class="text-white pt-3 mt-n5 me-2" :style="{ display: 'inline-block ' }">
              立志成为国家科技创新的栋梁之材。
            </h1>
            <!-- <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <!-- <PresentationInformation /> -->
    <!-- <PresentationExample :data="data" /> -->
    <!-- <PresentationPages /> -->
    <!-- <BuiltByDevelopers /> -->

    <!-- <div class="container">
    </div> -->
    <PresentationResearch />
    <PresentationNew />
    <!-- <PresentationTeam /> -->
    <PresentationShow />
    <PresentationCounter />
    <!-- <LoseSite/> -->
  </div>
  <DefaultFooter />
</template>
