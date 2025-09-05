<script setup>
// import SimpleBookCard from '@/components_myself/cards/SimpleBookCard.vue'
import HorizontalNewsCard from "@/components_myself/cards/HorizontalNewsCard.vue";
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
                <HorizontalNewsCard image="https://dummyimage.com/400x400"
                    :profile="{ name: 'Emma Roberts', link: 'javascript:;' }"
                    :position="{ label: 'UI Designer', color: 'info' }"
                    description="Artist is a term applied to a person who engages in an activity deemed to be an art." />
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