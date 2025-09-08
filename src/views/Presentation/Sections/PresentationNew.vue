<script setup>
// import SimpleBookCard from '@/components_myself/cards/SimpleBookCard.vue'
import HorizontalNewsCard from "@/components_myself/cards/HorizontalNewsCard.vue";
import NewSemester2025 from "@/assets/img/header/hezhao.jpg";
</script>
<template>
    <div class="container">
        <div class="row mt-2">
            <div class="col-lg-6 mx-auto text-center">
                <h2 class="mb-0">新闻动态</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-12">
                <HorizontalNewsCard :image="NewSemester2025" :profile="{ name: '2025年新生培训会', link: 'javascript:;' }"
                    :position="{ label: '2025/09/07', color: 'info' }"
                    description="2025年，开展了工作站第一次新生培训会。围绕实验室日常管理、实验室安全等开展培训活动。" />
            </div>
            <div class="col-lg-12 col-12">
                <HorizontalNewsCard image="https://dummyimage.com/400x400"
                    :profile="{ name: 'Emma Roberts', link: 'javascript:;' }"
                    :position="{ label: 'UI Designer', color: 'info' }"
                    description="Artist is a term applied to a person who engages in an activity deemed to be an art." />
            </div>
        </div>
        <!-- <hr class="horizontal dark my-5" /> -->
    </div>
</template>