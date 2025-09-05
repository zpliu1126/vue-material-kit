<template>
    <div class="page-header min-vh-100">
        <!-- <span class="mask bg-gradient-dark opacity-1"></span> -->
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 d-flex justify-content-center flex-column">
                    <img :src="img404" alt="">
                    <h1 class="mb-2">Look like you're lost</h1>
                    <div class="mt-3">
                        <h2 class="h2">the page you are looking for not avalible!</h2>
                        <RouterLink :to="{ name: 'presentation' }"
                            class="btn btn-sm bg-gradient-success mt-2 mb-0 ms-auto">
                            <span>Go to Home</span>
                        </RouterLink>
                        <!-- <el-button type="success" @click="handlegoHome">Go to Home</el-button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import img404 from '@/assets/img/404.gif'
</script>
