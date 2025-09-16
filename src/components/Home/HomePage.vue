<template>
    <div>
        Home Page
    </div>
    <button @click="goToProduct()">Go to Products</button>
</template>


<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function goToProduct() {
    router.push('/products');
}
</script>