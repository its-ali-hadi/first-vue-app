<template>
    <div>
        <h1>Product List</h1>
        <p>Here is the product list:</p>
        <ul>
            <li v-for="product in products" :key="product.id">
                <router-link :to="`/products/${product.id}`">{{ product.name }}</router-link>
            </li>
        </ul>
    </div>
    <button @click="$router.go(-1)">Go back</button>
</template>


<script setup>
import { ref } from 'vue';

const products = ref([
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' }
]);
</script>