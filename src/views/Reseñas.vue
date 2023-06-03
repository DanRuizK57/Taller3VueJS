<template>
  <div v-if="usuario">
    <img :src="usuario.photo" alt="Forto de usuario" id="fotoPerfil">
    <h2>{{ usuario.name }}</h2>
    <h4>{{ usuario.city }}</h4>
    <p>{{ usuario.bio }}</p>
    <h3>Reseñas creadas por {{ usuario.name }} ({{ reseñas.length}})</h3>
  </div>
  <div v-for="(reseña, index) in reseñas" :key="index" class="reseñas">
    <ReseñaItem 
    :img="reseña.product.images[0]"
    :name="reseña.product.name"
    :descripcion="reseña.review">
      </ReseñaItem>
    
  </div>
</template>

<script>
import { obtenerResenas } from "../services/marketplace_api.services";
import ReseñaItem from '../components/ReseñaItem.vue';

export default {
    name: "ReseñasPage",
    components: {
      ReseñaItem,
    },
    data() {
        return {
            reseñas: [],
            usuario: Object,
            usuarioId: "",
        };
    },
    async mounted() {
        this.usuarioId = this.$route.params.userid;
        const result = await obtenerResenas(this.usuarioId);

        this.reseñas = result.reviews;
        this.usuario = result.user;

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