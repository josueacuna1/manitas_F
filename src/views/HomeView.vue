<template>
    <navComponent/>
    <h1 class="mt-5 fw-bolder">Lecciones</h1>
    <div class="container p-4">
        <div class="row justify-content-center">
            <ListComponent />

        </div>
    </div>
</template>

<script setup>
import ListComponent from '@/components/home/ListComponent.vue';
import InfoComponent from '@/components/home/InfoComponent.vue';
import navComponent from '@/components/home/navComponent.vue';




</script>

<style lang="css" scoped>
.fondo{
    background-color: rgba(251,235,219,255);
}
</style>