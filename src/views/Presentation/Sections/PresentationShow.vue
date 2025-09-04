<script setup>
import PosterCard from '@/components_myself/cards/PosterCard.vue'
import Pic1 from '@/assets/img/testImg/pic1.jpg'
import Pic3 from '@/assets/img/testImg/pic3.jpg'
import Pic4 from '@/assets/img/testImg/pic4.jpg'
import Pic5 from '@/assets/img/testImg/pic5.jpg'
</script>
<template>
    <section class="pb-5 position-relative bg-gradient-dark mx-n3 mt-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mx-auto mt-3 ">
                    <h2 class="mb-0 text-center text-white z-index-1">团队风采</h2>
                </div>
            </div>
            <div class="row">
                <div class="mt-4 col-lg-9 col-md-12">
                    <div class="row">
                        <div class="card col-lg-4 d-lg-block d-none">
                            <div class="card-body pt-3">
                                <ul>
                                    <li>
                                        <h2>学术汇报</h2>
                                    </li>
                                    <li>
                                        <h2>学术活动</h2>
                                    </li>
                                    <li>
                                        <h2>团建活动</h2>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class=" col-lg-8 col-md-12">
                            <PosterCard :image="Pic4" :title="'取样结束'" />
                        </div>
                        <div class=" col-lg-4 col-md-12 mt-4">
                            <PosterCard :image="Pic1" :title="'田间考察'" />
                        </div>
                        <div class=" col-lg-4 col-md-12 mt-4">
                            <PosterCard :image="Pic5" :title="'仪器培训'" />
                        </div>
                        <div class=" col-lg-4 col-md-12 mt-4">
                            <PosterCard :image="Pic3" :title="'党旗飘飘'" />
                        </div>
                    </div>
                </div>
                <div class="card mt-4 col-lg-3 d-lg-block d-none">
                    <div class="card-body  pt-8">
                        <ul>
                            <li>
                                <h2>aa1</h2>
                            </li>
                            <li>
                                <h2>dddd</h2>
                            </li>
                            <li>
                                <h2>cc</h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>