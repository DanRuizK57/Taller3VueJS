<template>
    <div>
        <div v-if="img.length < 2">
            <div v-if="producto" class="card" style="width: 18rem">
                <img :src="imagen" class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text">{{ producto.name }}</p>
                    <p class="card-text">{{ producto.description }}</p>
                    <p class="card-text">$ {{ producto.price }}</p>
                    <p class="card-text">{{ producto.createdAt }}</p>
                </div>
            </div>
        </div>
        <div v-else>
            <div v-if="producto" id="carouselExample" class="carousel slide w-50">
                <div class="carousel-inner">
                    <div v-for="(imagen, index) in img" :key="index" class="carousel-item active">
                        <img :src="imagen" class="d-block" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

                <p class="card-text">{{ producto.name }}</p>
                <p class="card-text">{{ producto.description }}</p>
                <p class="card-text">$ {{ producto.price }}</p>
                <p class="card-text">{{ producto.createdAt }}</p>
            </div>
        </div>
        <div class="container mt-2" v-if="usuario">
            <div class="card" style="width: 18rem">
                <img :src="usuario.photo" class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text">{{ usuario.name }}</p>
                    <p class="card-text">{{ usuario.city }}</p>
                    <router-link class="btn btn-primary mt-5" :to="{}">ver perfil</router-link>
                </div>
            </div>
        </div>
    </div>
    <div v-for="(item, index) in reseñas" :key="index">
        <ReseñaItem 
        :img="item.user.photo"
        :name="item.user.name"
        :descripcion="item.review"
        />
        
    </div>

</template>
<script setup>
import { defineProps, ref } from "vue";
import ReseñaItem from '@/components/ReseñaItem.vue'

const props = defineProps({
    img: [],
    producto: Object,
    usuario: Object,
    review: []
});

const reseñas = ref(props.review) 
const imagen = ref(props.img);
const producto = ref(props.producto);
const usuario = ref(props.usuario);
</script>

<style></style>
