<template>
    <div v-for="item in data" :key="item.id" class="mb-1">

        <div class="list-group mx-5 text-start p-1">

            <div class="card card-body" type="button" data-bs-toggle="collapse" :data-bs-target="'#item-' + item.id"
                aria-expanded="false" aria-controls="collapseExample">
                <span class="fw-bolder">Leccion {{ item.id }}</span>
                {{ item.title }}
            </div>

            <div class="collapse" :id="'item-' + item.id">
                <div class="d-flex">
                    <div class="col-ms-12 col-md-8">
                        <div class="card card-body">
                            {{ item.description }}
                        </div>
                        <div class="card card-footer">
                            <p class="btn btn-success">
                                <router-link :to="{ name: 'lesson', params: { id: item.id } }"
                                    class="list-group-item list-group-item-action list-group-item-light my-1 border">
                                    Comensar
                                </router-link>
                            </p>
                        </div>
                    </div>
                    <div class="card col-sm-12 col-md-4">
                        <div class="card-body flex-column d-flex align-items-center justify-content-center">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                                With supporting text below as a natural lead-in to additional
                                content.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script setup>
import data from "@/data/data.json";
import InfoComponent from "./InfoComponent.vue";
</script>

<style lang="css" scoped></style>
