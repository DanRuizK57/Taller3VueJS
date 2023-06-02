<template>
    <div>
        <div class="container mt-5" v-if="producto">
            <CardDetalle 
            :img="producto.product.images"
            :producto="producto.product"
            :usuario="producto.product.user"
            ></CardDetalle>
        </div>
        <p v-else>cargando</p>

    </div>
</template>
<script setup>
import { detalleProducto } from '@/services/marketplace_api.services'
import CardDetalle from '@/components/CardDetalle.vue'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'

let producto = ref(null)


onMounted(async () => {
    const route = useRoute()

    producto.value = await detalleProducto(route.params.id)
})

</script>

<style></style>