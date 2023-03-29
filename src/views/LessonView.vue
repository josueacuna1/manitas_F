<template>
    <nav-component/>
    <div class="d-none">
        <h1 class="mt-5">{{ lessonId }} - {{ newData }} <router-link :to="{ name: 'home' }" class="btn btn-success">
                Regresar
            </router-link></h1>
        <div class="container d-flex">
            <div class="card m-1 col-sm-12 col-md-8 border" style="height: 650px;">
                <div class="card-body flex-column d-flex align-items-center justify-content-center ">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
            <div class="card m-1 col-sm-12 col-md-4 border">
                <img src="" class="card-img-top" alt="...">
            </div>
        </div>
    </div>
    <div v-for="item in newData" :key="item.id">
        <h1 class="mt-5">{{ item.title }} <router-link :to="{ name: 'home' }" class="btn btn-success">
                Regresar
            </router-link></h1>
        <div class="container d-flex">
            <div class="card m-1 col-sm-12 col-md-8 border" style="height: 650px;">
                <div class="card-body flex-column d-flex align-items-center justify-content-center ">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">{{ item.description }}</p>
                    <router-link :to="{name:'camera'}" class="btn btn-success"> Cámara </router-link>
                </div>
            </div>
            <div class="card m-1 col-sm-12 col-md-4 border">
                <img src="" class="card-img-top" alt="...">
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import data from '@/data/data.json'
import navComponent from '@/components/home/navComponent.vue';

let lessonId = ref('')
let newData = ref('')



onMounted(() => {
    const route = useRoute()
    lessonId.value = route.params.id
    console.log(lessonId)
    newData = data.filter((el) => el.id === lessonId.value);
    console.log(newData)
})
</script>

<style lang="css" scoped></style>