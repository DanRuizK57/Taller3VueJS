<template>
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="imagen" class="img-fluid rounded-circle" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ name }}</h5>
                    <p class="card-text">{{ descripcion }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
    img: String,
    name: String,
    descripcion: String,

});

const imagen = ref(props.img)
const name = ref(props.name)
const descripcion = ref(props.descripcion)


</script>

<style></style>
