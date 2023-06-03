<template>
    <div v-if="listado">
        <div class="container" v-for="(item, index) in listado" :key="index">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img :src="item.images[0]" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p class="card-text fecha">{{ formatDate(item.createdAt) }} - {{ item.user.city }}</p>
                            <h5 class="card-title">{{ item.name }}</h5>
                            <p class="card-text">{{ item.description }}</p>
                            <p class="card-text precio">${{ item.price }}</p>
                            <router-link class="btn btn-primary mt-5" :to="{
                                name:'detalle',
                                params:{
                                    id:item._id
                                }
                            }">Detalle</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p v-else>Cargando...</p>
</template>
<script setup>
import { onMounted, ref } from "vue";
import moment from "moment"; // Librería para cambiar el formato de la fecha
import { listarProductos } from "@/services/marketplace_api.services";

let listado = ref([]);

const formatDate = (date) => {
    return moment(date).format('DD-MM-YYYY');
};

onMounted(async () => {
    listado.value = await listarProductos();
});
</script>

<style>
.container {
    margin-top: 2%;
    margin-bottom: 2%;
}

.card {
    width: 100%;
}

.card img {
    padding: 10%;
}

.fecha {
    font-weight: bold;
}

.card-title {
    font-weight: bold;
    font-size: 30px;
    margin-top: 3%;
    margin-bottom: 2%;
}

.card-body{
    background-color: lightgray;
    height: 100%;
}

.precio {
    margin-top: 8%;
    font-size: 25px;
    font-weight: bold;
    color: #188051;
}
</style>
