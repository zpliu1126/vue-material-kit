<script setup>
import equipment1 from '../../assets/img/equipment/equipment1_1.png';
import equipment2 from '../../assets/img/equipment/equipment2_1.png';
import equipment3 from '../../assets/img/equipment/equipment3_1.png';
import equipment4 from '../../assets/img/equipment/equipment4_1.png';
import equipment5 from '../../assets/img/equipment/equipment5_1.png';
import equipment6 from '../../assets/img/equipment/equipment6_1.png';
import equipment7 from '../../assets/img/equipment/equipment7_1.png';
import equipment8 from '../../assets/img/equipment/equipment8_1.png';
import equipment9 from '../../assets/img/equipment/equipment9_1.png';
import equipment10 from '../../assets/img/equipment/equipment10_1.png';
import equipment11 from '../../assets/img/equipment/equipment11_1.png';
import equipment12 from '../../assets/img/equipment/equipment12_1.png';
import equipment13 from '../../assets/img/equipment/equipment13_1.png';
import equipment14 from '../../assets/img/equipment/equipment14_1.png';
import equipment15 from '../../assets/img/equipment/equipment15_1.png';
import equipment16 from '../../assets/img/equipment/equipment16_1.png';
import equipment17 from '../../assets/img/equipment/equipment17_1.png';
import equipment18 from '../../assets/img/equipment/equipment18_1.png';
import equipment20 from '../../assets/img/equipment/equipment20.png';
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import cottonHeader from "@/assets/img/header/hezhao.jpg";


//component
import DefaultFooter from "@/components_myself/footer/FooterDefault.vue";

import Header from "@/examples/Header.vue";

const body = document.getElementsByTagName("body")[0];
import { onMounted, onUnmounted } from "vue";
//hooks
import Typed from "typed.js";
onMounted(() => {

    if (document.getElementById("typed")) {
        // eslint-disable-next-line no-unused-vars
        var typed = new Typed("#typed", {
            stringsElement: "#typed-strings",
            typeSpeed: 90,
            backSpeed: 90,
            backDelay: 200,
            startDelay: 500,
            loop: true,
        });
    }
});

// onUnmounted(() => {
//     body.classList.remove("about-us");
//     body.classList.remove("bg-gray-200");
// });
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
        <div class="page-header min-vh-85" :style="`background-image: url(${cottonHeader})`" loading="lazy">
            <span class="mask bg-gradient-dark opacity-4"></span>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center mx-auto my-auto">
                        <h1 class="text-white">
                            欢迎加入<span class="text-white" id="typed"></span>
                        </h1>
                        <div id="typed-strings">
                            <h1>棉花组大家庭~</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Header>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mx-auto mt-3  text-center mb-5">
                    <h2 class="mb-0 text-center z-index-1">Explore our laboratory environment</h2>
                </div>
            </div>
            <div class="row ">
                <div class="col-lg-6 col-md-12 align-content-around">
                    <img :src="equipment14" class="img-fluid border-radius-lg shadow" />
                    <h5 class="badge badge-success  text-title">
                        植物活体成像仪
                    </h5>
                </div>
                <div class="row col-lg-6 col-md-12">
                    <div class="col-lg-12 col-md-12 align-content-around">
                        <img :src="equipment17" class="img-fluid border-radius-lg shadow" />
                        <h5 class="badge badge-success  text-title">
                            蔡司石蜡切片机
                        </h5>
                    </div>
                    <div class="col-lg-12 col-md-12 align-content-around">
                        <img :src="equipment12" class="img-fluid border-radius-lg shadow" />
                        <h5 class="badge badge-success  text-title">
                            毛细管电泳仪
                        </h5>
                    </div>
                </div>
            </div>
            <div class="row ">
                <div class="col-lg-6 col-md-12 mb-sm-0 mb-3">
                    <img :src="equipment4" class="img-fluid border-radius-lg shadow" />
                    <h5 class="badge badge-success mb-2 text-title">
                        真空干燥箱
                    </h5>
                </div>
                <div class="col-lg-6 col-md-12 mb-sm-0 mb-3">
                    <img :src="equipment3" class="img-fluid border-radius-lg shadow" />
                    <h5 class="badge badge-success mb-2 text-title">
                        高速冷冻离心机
                    </h5>
                </div>
                <div class="col-lg-6 col-md-12 mb-sm-0 mb-3">
                    <img :src="equipment5" class="img-fluid border-radius-lg shadow" />
                    <h5 class="badge badge-success mb-2 text-title">
                        全自动核酸提取仪
                    </h5>
                </div>
                <div class="col-lg-6 col-md-12 mb-sm-0 mb-3">
                    <img :src="equipment10" class="img-fluid border-radius-lg shadow" />
                    <h5 class="badge badge-success mb-2 text-title">
                        荧光定量PCR仪
                    </h5>
                </div>
            </div>
            <!-- <div class="row justify-content-center">
                <div class="col-lg-4 col-md-12 mb-sm-0 mb-3">
                    <img :src="equipment7" class="img-fluid border-radius-lg shadow" />
                    <h5 class="badge badge-success mb-2 text-title">
                        测浓度
                    </h5>
                </div>
                <div class="col-lg-12 col-md-12 mb-sm-0 mb-3">
                    <img :src="equipment18" class="img-fluid border-radius-lg shadow" />
                    <h5 class="badge badge-success mb-2 text-title">
                        纯水仪
                    </h5>
                </div>
            </div> -->
            <div class="row ">

                <div class="col-lg-6 col-md-12 mb-sm-0 mb-3">
                    <img :src="equipment11" class="img-fluid border-radius-lg shadow" />
                    <h5 class="badge badge-success mb-2 text-title">
                        落地高速冷冻离心机
                    </h5>
                </div>

                <div class="col-lg-6 col-md-12 mb-sm-0 mb-3">
                    <img :src="equipment13" class="img-fluid border-radius-lg shadow" />
                    <h5 class="badge badge-success mb-2 text-title">
                        冷冻研磨仪
                    </h5>
                </div>
            </div>
            <div class="row ">

                <div class="row  col-lg-6 justify-content-center">
                    <div class="col-lg-12  col-md-12 mb-sm-0 mb-3">
                        <img :src="equipment15" class="img-fluid border-radius-lg shadow" />
                        <h5 class="badge badge-success mb-2 text-title">
                            蔡司倒置显微镜
                        </h5>
                    </div>
                    <div class="col-lg-12 col-md-12 mb-sm-0 mb-3">
                        <img :src="equipment9" class="img-fluid border-radius-lg shadow" />
                        <h5 class="badge badge-success mb-2 text-title">
                            凝胶成像仪
                        </h5>
                    </div>
                </div>
                <div class="row  col-lg-6 justify-content-center">
                    <div class="col-lg-12 col-md-12 mb-sm-0 mb-3">
                        <img :src="equipment16" class="img-fluid border-radius-lg shadow" />
                        <h5 class="badge badge-success mb-2 text-title">
                            尼康体视显微镜
                        </h5>
                    </div>

                </div>
            </div>

            <div class="row ">
                <div class="col-lg-4 col-md-12 mb-sm-0 mb-3">
                    <img :src="equipment20" class="img-fluid border-radius-lg shadow" />
                    <h5 class="badge badge-success mb-2 text-title">
                        快速育种室
                    </h5>
                </div>
                <div class="col-lg-4 col-md-12 mb-sm-0 mb-3">
                    <img :src="equipment2" class="img-fluid border-radius-lg shadow" />
                    <h5 class="badge badge-success mb-2 text-title">
                        超净工作台
                    </h5>
                </div>
                <div class="col-lg-4 col-md-12 mb-sm-0 mb-3">
                    <img :src="equipment8" class="img-fluid border-radius-lg shadow" />
                    <h5 class="badge badge-success mb-2 text-title">
                        -80冰箱
                    </h5>
                </div>
            </div>
        </div>
        <hr class="horizontal dark my-5" />
        <DefaultFooter />
    </div>
</template>
<style lang="scss" scoped>
.text-title {
    position: relative;
    top: -15%;
    left: 10%;
}

.badge-success {
    color: #339537;
    background-color: #bce2be;
    font-size: 16px
}
</style>