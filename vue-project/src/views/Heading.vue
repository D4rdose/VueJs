<script setup>
    import {useRouter} from 'vue-router';
    import AddChoices from '../components/AddChoices.vue';

    const router = useRouter();
</script>

<template>
    <div class="container">
        <h1>Create Announcement</h1>
        <button @click="router.push(AddChoices)" class="createBtn">+</button>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    align-items: column;
    justify-content: space-between;
    margin: 50px;
    color: orange;
    font-weight: bold;
}
.createBtn {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 7px;
    border: 2px solid orange;
    background-color: black;
    color: orange;
}
h1 {
    font-size: 40px;
}
</style>