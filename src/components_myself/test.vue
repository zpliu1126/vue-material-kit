<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
onMounted(() => {
    console.log(axios.get('/api/user'))
})
</script>
<template>
    <h1>test</h1>
</template>