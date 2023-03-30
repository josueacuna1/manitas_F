<template lang="">
    <nav class="navbar morado">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src="@/assets/logoManitas.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
            <span class="text-light"> Manitas</span>
            </a>
            <ul class="nav justify-content-end text-light">
                <li class="nav-item">
                    <router-link class="nav-link text-light" to="/" >Lecciones</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-light" to="/">Nosotros</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-light" to="/">Objetivos</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-light" to="/">Documentacion</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navComponent'
}
</script>

<style>
.morado {
  background-color: rgba(90,35,62,255);
} 
</style>