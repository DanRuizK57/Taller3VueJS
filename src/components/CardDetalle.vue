<template>
    <div class="contenedor">
        <div v-if="img.length < 2">
            <div v-if="producto">
                <p class="fecha" id="fechaDetalle">{{ formatDate(producto.createdAt) }}</p>
                <img :src="imagen" class="card-img-top" alt="..." />
                <div>
                    <p class="card-title inicio">{{ producto.name }}</p>
                    <p class="inicio">{{ producto.description }}</p>
                    <p class="precio inicio">$ {{ producto.price }}</p>
                </div>
            </div>
        </div>
        <div v-else class="w-52">
            <div v-if="producto" id="carouselExample" class="carousel carousel-dark slide">
                <p class="fecha" id="fechaDetalle">{{ formatDate(producto.createdAt) }}</p>
                <div class="carousel-inner">
                    <div v-for="(imagen, index) in img" :key="index" class="carousel-item active">
                        <img :src="imagen" class="d-block" alt="Imagen del producto" />
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

                <p class="card-title inicio">{{ producto.name }}</p>
                <p class="inicio">{{ producto.description }}</p>
                <p class="precio precioCarrusel inicio">$ {{ producto.price }}</p>
            </div>
        </div>
        <div class="mt-2" v-if="usuario">
            <div>
                <img :src="usuario.photo" class="card-img-top img-perfil rounded-circle" alt="Foto Perfil Usuario" />
                <div>
                    <p class="nombreUsuario">{{ usuario.name }}</p>
                    <p class="ciudadUsuario">{{ usuario.city }}</p>
                    <router-link class="btn btn-perfil" :to="{
                                name:'resenas',
                                params:{
                                    userid: usuario._id
                                }
                            }">Perfil</router-link>
                </div>
            </div>
        </div>
    </div>
    <h1>Reseñas del producto ({{ reseñas.length }})</h1>
    <div v-for="(item, index) in reseñas" :key="index" class="reseñas">
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
import moment from "moment";

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

const formatDate = (date) => {
    return moment(date).format('DD-MM-YYYY');
};

</script>

<style>
.contenedor {
    display: flex;
    justify-content: space-between;
}

.perfil {
    align-items: end;
}

#fechaDetalle {
    text-align: start;
    font-size: larger;
}

.inicio{
    text-align: start;
}

.img-perfil {
    width: 18rem;
    height: 300px;
    margin-top: 10%;
    margin-bottom: 10%;
}

.nombreUsuario { 
    font-size: 40px;
    font-weight: bold;
}

.ciudadUsuario {
    font-size: 30px;
    font-weight: bold;
    color: gray;
}

.btn-perfil {
    background-color: #2eb87a;
    color: white;
    font-weight: bold;
}

.btn-perfil:hover {
    background-color: #0f4d31;
    color: white;
    font-weight: bold;
}

.precioCarrusel {
    font-size: 30px;
    margin-top: 2%;
}

.reseñas {
    display: flex;
}
</style>
