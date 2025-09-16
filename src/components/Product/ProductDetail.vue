<template>
    <div>
        <h1>Product Detail</h1>
        <div>
            <div v-if="productId !== undefined">
                <p>Product ID: {{ productId }}</p>
            </div>
            <div v-else>
                <p>No product ID provided.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';


            const route = useRoute();
            const productId = route.params.id;


</script>