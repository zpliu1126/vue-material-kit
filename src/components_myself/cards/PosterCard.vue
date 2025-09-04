<script setup>
defineProps({
    image: {
        type: String,
        required: false,
        default: 'https://demos.creative-tim.com/vue-material-kit-pro/assets/blog2.fe63ab0e.jpg'
    },
    title: {
        type: String,
        required: false,
        default: "活动ing"
    },
    date: {
        type: String,
        required: false,
        default: "2025/09/01"
    }
});
</script>
<template>
    <div class="card card-background align-items-start">
        <div class="full-background" :style="`background-image:  url(${image});`"></div>
        <!-- <img :src="image" alt=""> -->
        <div class="card-body z-index-3"><i class="material-icons text-white text-3xl">import_contacts</i></div>
        <div class="card-footer pb-3 pt-8 z-index-3">
            <h5 class="text-white mb-1 cursor-pointer transparent">{{ title }}</h5>
            <p class="text-white text-xs font-weight-bolder text-uppercase opacity-7">{{ date }}</p>
        </div>
    </div>
</template>