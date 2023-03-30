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
                           <p class="text-justify">{{ item.description }}</p>
                        </div>
                        <div class="card card-footer">
                            <div class="text-center">
                                <button class="btn">
                                <router-link :to="{ name: 'lesson', params: { id: item.id } }"
                                    class="list-group-item list-group-item-action my-1">
                                    Comenzar
                                </router-link>
                            </button>
                            </div>
                        </div>
                    </div>
                    <div class="card col-sm-12 col-md-4">
                        <div class="card-body flex-column d-flex align-items-center justify-content-center">
                            <h5 class="card-title">
                                <div v-if="item.id == 1">
                                    <img class="img-fluid" src="@/assets/intro.jpg" alt="Imagen" />
                                </div>
                                <div v-else-if="item.id == 2">
                                    <img class="img-fluid" src="@/assets/manual.jpg" alt="Imagen" />
                                </div>
                                <div v-else-if="item.id == 3">
                                    <img class="img-fluid" src="@/assets/A.jpg" alt="Imagen" />
                                </div>
                                <div v-else-if="item.id == 4">
                                    <img class="img-fluid" src="@/assets/D.jpg" alt="Imagen" />
                                </div>
                                <div v-else-if="item.id == 5">
                                    <img class="img-fluid" src="@/assets/G.jpg" alt="Imagen" />
                                </div>
                                <div v-else-if="item.id == 6">
                                    <img class="img-fluid" src="@/assets/J.jpg" alt="Imagen" />
                                </div>
                                <div v-else-if="item.id == 7">
                                    <img class="img-fluid" src="@/assets/M.jpg" alt="Imagen" />
                                </div>
                                <div v-else-if="item.id == 8">
                                    <img class="img-fluid" src="@/assets/O.jpg" alt="Imagen" />
                                </div>
                                <div v-else-if="item.id == 9">
                                    <img class="img-fluid" src="@/assets/R.jpg" alt="Imagen" />
                                </div>
                                <div v-else-if="item.id == 10">
                                    <img class="img-fluid" src="@/assets/U.jpg" alt="Imagen" />
                                </div>
                                <div v-else-if="item.id == 11">
                                    <img class="img-fluid" src="@/assets/X.jpg" alt="Imagen" />
                                </div>
                            </h5>                         
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

<script>
export default {
  data() {
    return {
      imageUrl: '@/assets/1.jpg'
    }
  }
}
</script>

<style lang="css" scoped></style>
