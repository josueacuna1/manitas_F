<template>
    <nav-component/>
    <h1 class="mt-5">Titulo</h1> <router-link :to="{name:'home'}" class="btn btn-success"> Regresar </router-link>
    <div class="container d-flex">
        <div class="card m-1 col-sm-12 col-md-8 border" style="height: 650px;">
            <div class="card-body flex-column d-flex align-items-center justify-content-center ">
               <h1>Cámara</h1>
            </div>
        </div>
        <div class="card m-1 col-sm-12 col-md-4 border">
            <img src="" class="card-img-top" alt="...">
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import navComponent from '@/components/home/navComponent.vue';
// import data from '@/data/data.json'

let lessonId = ref('')

// const filter = data.filter(item => item.id !== lessonId.value);
// console.log(filter)

onMounted(() => {
    const route = useRoute()
    lessonId.value = route.params.id
})
</script>

<style lang="css" scoped>
.morado {
  background-color: rgba(90,35,62,255);
} 
</style>