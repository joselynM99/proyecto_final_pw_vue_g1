import axios from "axios";

export const listaVehiculosVip=async(inicio)=>{
    return await obtenerVehiculosVip(inicio);
}

const obtenerVehiculosVip=async(inicio)=>{
    const data=axios.get(`http://localhost:8081/API/Reservas/V1/reportes/VehiculoVip?fechaInicio=${inicio}`).then(r => r.data)
    console.log(data)
    return data
}