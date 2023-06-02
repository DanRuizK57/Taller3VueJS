<template>
  <div v-if="usuario">
    <img :src="usuario.photo" alt="Forto de usuario" id="fotoPerfil">
    <h2>{{usuario.name}}</h2>
    <h4>{{usuario.city}}</h4>
    <p>{{usuario.bio}}</p>
    <h3>Reseñas creadas por {{ usuario.name }} ({{reseñas.length}})</h3>
  </div>
  <div v-for="reseña in reseñas" :key="reseña.id" class="reseñas">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="reseña.product.images[0]" class="img-fluid rounded-start" alt="">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ reseña.product.name }}</h5>
            <p class="card-text">{{reseña.review}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { obtenerResenas } from "../services/marketplace_api.services";

export default {
    name: "ReseñasPage",
    data() {
        return {
            reseñas: [],
            usuario: null,
            usuarioId: "",
        };
    },
    async mounted() {
        this.usuarioId = this.$route.params.userid;
        const result = await obtenerResenas(this.usuarioId);
        this.usuario = result.user;
        this.reseñas = result.reviews;
        console.log(result)
    },
};
</script>

<style>
#fotoPerfil {
    height: 300px;
    widows: 300px;
    border: 1px solid black;
    border-radius: 1000px;
    margin-top: 5%;
    margin-bottom: 2%;
}
.reseñas {
    margin-top: 5%;
    display: flex;
    justify-content: center;
}
</style>