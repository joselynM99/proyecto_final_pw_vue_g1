import axios from "axios";

export const crearReporteVehiculosFachada = async (fechaInicio, fechaFinal) => {
    return await crearReporteVehiculos(fechaInicio, fechaFinal)
}

const crearReporteVehiculos = async (fechaInicio, fechaFinal) => {
    const data = axios.get(`http://localhost:8081/API/Reservas/V1/reportes/reservas?inicio=${fechaInicio}&fin=${fechaFinal}`).then(r => r.data)
    return data
}

export const reporteClientesVIPFachada = async (body) => {
    return await reporteClientesVIP(body)
}

const reporteClientesVIP = async () => {

    const data = axios.get(`http://localhost:8081/API/Reservas/V1/reportes/clientesVIP`).then(r => r.data)

    return data
}

export const listaVehiculosVip=async(inicio)=>{
    return await obtenerVehiculosVip(inicio);
}

const obtenerVehiculosVip=async(inicio)=>{
    const data=axios.get(`http://localhost:8081/API/Reservas/V1/reportes/VehiculoVip?fechaInicio=${inicio}`).then(r => r.data)
    console.log(data)
    return data
}