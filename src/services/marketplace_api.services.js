import axios from 'axios';

const BASE_URL = 'http://ec2-54-163-208-73.compute-1.amazonaws.com:8080';

function obtenerResenas(userid) {
  return axios
    .get(`${BASE_URL}/users/${userid}/reviews`)
    .then((result) => {
      return result.data;
    });
}

function listarProductos(){
    return axios.get(`${BASE_URL}/products`).then((result)=>{
        return result.data
    })
}

function detalleProducto(id){
    return axios.get(`${BASE_URL}/products/${id}/reviews`).then((result)=>{
        return result.data
    })
}

export {listarProductos , detalleProducto, obtenerResenas}
