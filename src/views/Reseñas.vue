<template>
  <h1>Reseñas</h1>
  <reseña-item></reseña-item>
  <div v-if="usuario">
    <img :src="usuario.photo" alt="Forto de usuario">
    <h2>{{usuario.name}}</h2>
    <h4>{{usuario.city}}</h4>
    <p>{{usuario.bio}}</p>
    <h3>Reseñas creadas por {{ usuario.name }} ({{reseñas.length}})</h3>
  </div>
  <div>
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="" class="img-fluid rounded-start" alt="">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">product.name</h5>
            <p class="card-text">product.description</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { obtenerResenas } from "../services/marketplace_api.services";
import ReseñaItem from '../components/ReseñaItem.vue'

export default {
    name: "ReseñasPage",
    components: {
        ReseñaItem,
    },
    data() {
        return {
            reseñas: [],
            usuario: null,
        };
    },
    async mounted() {
        const result = await obtenerResenas("647178286edc199bff73e81f");
        this.usuario = result.user;
        this.reseñas = result.reviews;
        console.log(result)
    },
};
</script>

<style>

</style>