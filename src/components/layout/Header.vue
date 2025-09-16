<template>
    <div class="header">
        <div class="logo">
            <h1>My Vue App</h1>
        </div>
        <div class="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/contact">Contact</router-link>
            <div class="dropdown" @click="toggleDropdown">
                <button class="dropdown-btn">Menu ▼</button>
                <ul v-if="showDropdown" class="dropdown-list">
                    <li><router-link to="/products">Product List</router-link></li>
                    <li><router-link to="/products/123">Product Details</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const showDropdown = ref(false);
function toggleDropdown() {
    showDropdown.value = !showDropdown.value;
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f8f9fa;
}

.logo h1 {
    margin: 0;
    font-size: 1.5rem;
}

.nav {
    display: flex;
    gap: 1rem;
}

.nav a {
    text-decoration: none;
    color: #007bff;
}

.nav a:hover {
    text-decoration: underline;
}

.dropdown {
    position: relative;
    display: inline-block;
}
.dropdown-btn {
    background: none;
    border: none;
    color: #007bff;
    cursor: pointer;
    font-size: 1rem;
}
.dropdown-list {
    position: absolute;
    right: 0;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    list-style: none;
    padding: 0.5rem 0;
    margin: 0;
    z-index: 1000;
    min-width: 150px;
}
.dropdown-list li {
    padding: 0.5rem 1rem;
    font-size: .8rem;
}
.dropdown-list li:hover {
    background-color: #f1f1f1;
}
.active {
    background-color: red;
}
</style>