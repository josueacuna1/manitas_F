<template>
    <nav-component />
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
        <h1 class="mt-5">{{ item.title }} <router-link :to="{ name: 'home' }" class="mx-5 color-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#f88879"
                    class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                    <path
                        d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
                </svg>
            </router-link></h1>
        <div class="container d-flex">
            <div class="card m-1 col-sm-12 col-md-8 border">
                <div class="card-body flex-column d-flex align-items-center justify-content-center ">
                    <!-- <h5 class="card-title">{{ item.title }}</h5> -->

                    <div v-for="a in item.contenido" :key="a.id">
                        <div v-if="a.id == 1 && item.id == 3">
                            <img class="img-fluid" src="@/assets/A.jpg" alt="Imagen" />
                        </div>
                        <div v-else-if="a.id == 2 && item.id == 3">
                            <img class="img-fluid" src="@/assets/B.jpg" alt="Imagen" />
                        </div>
                        <div v-else-if="a.id == 3 && item.id == 3">
                            <img class="img-fluid" src="@/assets/C.jpg" alt="Imagen" />
                        </div>
                        <div v-if="a.id == 1 && item.id == 4">
                            <img class="img-fluid" src="@/assets/D.jpg" alt="Imagen" />
                        </div>
                        <div v-else-if="a.id == 2 && item.id == 4">
                            <img class="img-fluid" src="@/assets/E.jpg" alt="Imagen" />
                        </div>
                        <div v-else-if="a.id == 3 && item.id == 4">
                            <img class="img-fluid" src="@/assets/F.jpg" alt="Imagen" />
                        </div>
                        <div v-if="a.id == 1 && item.id == 5">
                            <img class="img-fluid" src="@/assets/G.jpg" alt="Imagen" />
                        </div>
                        <div v-else-if="a.id == 2 && item.id == 5">
                            <img class="img-fluid" src="@/assets/H.jpg" alt="Imagen" />
                        </div>
                        <div v-else-if="a.id == 3 && item.id == 5">
                            <img class="img-fluid" src="@/assets/I.jpg" alt="Imagen" />
                        </div>
                        <div v-if="a.id == 1 && item.id == 6">
                            <img class="img-fluid" src="@/assets/J.jpg" alt="Imagen" />
                        </div>
                        <div v-else-if="a.id == 2 && item.id == 6">
                            <img class="img-fluid" src="@/assets/K.jpg" alt="Imagen" />
                        </div>
                        <div v-else-if="a.id == 3 && item.id == 6">
                            <img class="img-fluid" src="@/assets/L.jpg" alt="Imagen" />
                        </div>
                        <div v-if="a.id == 1 && item.id == 7">
                            <img class="img-fluid" src="@/assets/M.jpg" alt="Imagen" />
                        </div>
                        <div v-else-if="a.id == 2 && item.id == 7">
                            <img class="img-fluid" src="@/assets/N.jpg" alt="Imagen" />
                        </div>
                        <div v-else-if="a.id == 3 && item.id == 7">
                            <img class="img-fluid" src="@/assets/Ñ.jpg" alt="Imagen" />
                        </div>
                        <div v-if="a.id == 1 && item.id == 8">
                            <img class="img-fluid" src="@/assets/O.jpg" alt="Imagen" />
                        </div>
                        <div v-else-if="a.id == 2 && item.id == 8">
                            <img class="img-fluid" src="@/assets/P.jpg" alt="Imagen" />
                        </div>
                        <div v-else-if="a.id == 3 && item.id == 8">
                            <img class="img-fluid" src="@/assets/Q.jpg" alt="Imagen" />
                        </div>
                        <div v-if="a.id == 1 && item.id == 9">
                            <img class="img-fluid" src="@/assets/R.jpg" alt="Imagen" />
                        </div>
                        <div v-else-if="a.id == 2 && item.id == 9">
                            <img class="img-fluid" src="@/assets/S.jpg" alt="Imagen" />
                        </div>
                        <div v-else-if="a.id == 3 && item.id == 9">
                            <img class="img-fluid" src="@/assets/T.jpg" alt="Imagen" />
                        </div>
                        <div v-if="a.id == 1 && item.id == 10">
                            <img class="img-fluid" src="@/assets/U.jpg" alt="Imagen" />
                        </div>
                        <div v-else-if="a.id == 2 && item.id == 10">
                            <img class="img-fluid" src="@/assets/V.jpg" alt="Imagen" />
                        </div>
                        <div v-else-if="a.id == 3 && item.id == 10">
                            <img class="img-fluid" src="@/assets/W.jpg" alt="Imagen" />
                        </div>
                        <div v-if="a.id == 1 && item.id == 11">
                            <img class="img-fluid" src="@/assets/X.jpg" alt="Imagen" />
                        </div>
                        <div v-else-if="a.id == 2 && item.id == 11">
                            <img class="img-fluid" src="@/assets/Y.jpg" alt="Imagen" />
                        </div>
                        <div v-else-if="a.id == 3 && item.id == 11">
                            <img class="img-fluid" src="@/assets/Z.jpg" alt="Imagen" />
                        </div>
                        <p class="text-start">
                            {{ a.texto }}
                        </p>

                    </div>

                    <router-link :to="{ name: 'camera' }" class="px-2 backgroun-camara">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#f88879"
                            class="bi bi-camera-video" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
                        </svg>
                    </router-link>
                </div>
            </div>
            <div class="card m-1 col-sm-12 col-md-4 border align-items-center justify-content-center">
                <div v-for="motivacion in item.motivacion" :key="motivacion.id">
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-action">
                            <span class="fw-bolder">tip {{ motivacion.id }}</span>
                            <p> {{ motivacion.texto }} </p>
                        </li>
                    </ul>
                </div>
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

<style lang="css" scoped>
.backgroun-camara{
    background-color: antiquewhite;
    border-radius: 15%;
}
.backgroun-camara:hover{
background-color: rgb(248, 196, 128);
}
</style>