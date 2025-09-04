<script setup>
defineProps({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        requierd: true,
    },
    description: {
        type: String,
        required: true,
    },
    action: {
        type: Object,
        route: String,
        label: String,
        color: String,
        // requierd:true,
        default: () => ({
            route: "javascript:;",
            label: "Read more",
            color: "green",
        }),
    },
});
</script>
<template>
    <div class="card mt-6">
        <div class="card-header p-0 mx-3 mt-n4 position-relative z-index-2"><a class="d-block blur-shadow-image"><img
                    :src="image" alt="img-blur-shadow" class="img-fluid border-radius-lg" loading="lazy"></a></div>
        <div class="card-body pt-3">
            <p class="text-dark mb-2 text-sm">Private Room • 1 Guest • 1 Sofa</p><a href="javascript:;">
                <h5>{{ title }}</h5>
            </a>
            <p>{{ description }}</p>
            <a :href="action.route" class="text-sm icon-move-right" :class="`text-${action.color}`"><button
                    class="btn btn-sm mb-0 btn-outline-success">{{ action.label }}</button>
            </a>
        </div>
    </div>
</template>
