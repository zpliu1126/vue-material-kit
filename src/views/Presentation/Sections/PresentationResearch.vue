<script setup>
import SimpleBookCard from '@/components_myself/cards/SimpleBookCard.vue'
</script>
<template>
    <div class="container overflow-auto">
        <div class="row mt-2">
            <div class="col-lg-6 mx-auto text-center">
                <h2 class="mb-0">最新研究</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <SimpleBookCard
                    :image="'https://demos.creative-tim.com/vue-material-kit-pro/assets/product-2-min.6821648f.jpg'"
                    :title="'Lovely and cosy apartment'" :description="`Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers
                            to turn on or off their television, change inputs, fast forward.`" />
            </div>
            <div class="col-lg-4 col-md-6">
                <SimpleBookCard
                    :image="'https://demos.creative-tim.com/vue-material-kit-pro/assets/product-2-min.6821648f.jpg'"
                    :title="'Single room in the center of the city'"
                    :description="`As Uber works through a huge amount of internal management turmoil, the company is also consolidating more of its international business.`" />
            </div>
            <div class="col-lg-4 col-md-6">
                <SimpleBookCard
                    :image="'https://demos.creative-tim.com/vue-material-kit-pro/assets/product-2-min.6821648f.jpg'"
                    :title="'Independent house bedroom kitchen'"
                    :description="`Music is something that every person has his or her own specific opinion about. Different people have different taste, and various types of music.`" />
            </div>
        </div>
        <hr class="horizontal dark my-5" />
    </div>
</template>