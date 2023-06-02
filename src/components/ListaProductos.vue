<template>
    <div v-if="listado">
        <div class="container" v-for="(item, index) in listado" :key="index">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img :src="item.images[0]" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.name }}</h5>
                            <p class="card-text">{{ item.description }}</p>
                            <p class="card-text">{{ item.user.city }}</p>
                            <p class="card-text"> agregado el {{ item.createdAt }}</p>
                            <p class="card-text"><small class="text-body-secondary">${{ item.price }}</small></p>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p v-else>cargando...</p>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { listarProductos } from '@/services/marketplace_api.services'

let listado = ref([])

// let imagen = listado.value.images

onMounted(async () => {
    listado.value = await listarProductos()
})

</script>

<style></style>