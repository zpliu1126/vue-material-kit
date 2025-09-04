<script setup>
import PersonInfoCard from '@/components_myself/cards/PersonInfoCard.vue'
</script>
<template>
    <section class="pb-5 position-relative bg-gradient-dark mx-n3 mt-2">
        <div class="container">
            <div class="row">
                <div class="col-md-8 text-start mt-3">
                    <h3 class="text-white z-index-1 position-relative"> 团队风采 </h3>
                    <p class="text-white opacity-8 mb-0"> There’s nothing I really wanted to do in life that I wasn’t
                        able to get good at. That’s my skill. </p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-12">
                    <PersonInfoCard image="https://bit.ly/3HCDiqM"
                        :profile="{ name: 'Emma Roberts', link: 'javascript:;' }"
                        :position="{ label: 'UI Designer', color: 'info' }"
                        description="Artist is a term applied to a person who engages in an activity deemed to be an art." />
                </div>
                <div class="col-lg-6 col-12">
                    <PersonInfoCard
                        image="https://demos.creative-tim.com/vue-material-kit-pro/assets/bruce-mars.f4e2d5ca.jpg"
                        :profile="{ name: 'Emma Roberts', link: 'javascript:;' }"
                        :position="{ label: 'UI Designer', color: 'info' }"
                        description="Artist is a term applied to a person who engages in an activity deemed to be an art." />

                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-6 col-12">
                    <PersonInfoCard
                        image="https://demos.creative-tim.com/vue-material-kit-pro/assets/ivana-squares.7a21484a.jpg"
                        :profile="{ name: 'Emma Roberts', link: 'javascript:;' }"
                        :position="{ label: 'UI Designer', color: 'info' }"
                        description="Artist is a term applied to a person who engages in an activity deemed to be an art." />
                </div>
                <div class="col-lg-6 col-12">
                    <PersonInfoCard
                        image="https://demos.creative-tim.com/vue-material-kit-pro/assets/ivana-square.d5f3cb13.jpg"
                        :profile="{ name: 'Emma Roberts', link: 'javascript:;' }"
                        :position="{ label: 'UI Designer', color: 'info' }"
                        description="Artist is a term applied to a person who engages in an activity deemed to be an art." />
                </div>

            </div>
        </div>
    </section>
</template>