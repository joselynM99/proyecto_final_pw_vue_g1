import axios from 'axios'
import { buscarReservaPorIdFachada, actualizarReservaFachada } from '@/js/api_reservas/ProcesarReserva'

export const buscarVehiculosPorMarca = async (marca) => {
    return await axios.get(`http://localhost:8081/API/Reservas/V1/vehiculos/marca/${marca}`).then(r => r.data).catch((error) => {
        console.log(error)
    })
}

export const buscarVehiculoPorId = async (id) => {
    return await axios.get(`http://localhost:8081/API/Reservas/V1/vehiculos/${id}`).then(r => r.data).catch((error) => {
        console.log(error)
    })
}

export const actualizarVehiculo = async (vehiculo) => {
    axios.post(`http://localhost:8081/API/Reservas/V1/vehiculos`, vehiculo).then(r => {
        console.log(r.data)
    }).catch((error) => {
        console.log(error)
    })
}

export const borrarVehiculoPorId = async (id) => {
    axios.delete(`http://localhost:8081/API/Reservas/V1/vehiculos/${id}`).then(r => {
        console.log(r.data)
    }).catch((error) => {
        console.log(error)
    })
}

export const buscarVehiculoPorNumeroDeReserva = async (numero) => {
    return await axios.get(`http://localhost:8081/API/Reservas/V1/vehiculos/numero/${numero}`).then(r => r.data).catch((error) => {
        console.log(error);
    })
}

export const actualizarEstadoVehiculo = async (numero) => {
    axios.post(`http://localhost:8081/API/Reservas/V1/vehiculos/estado/numero/${numero}`).then(r => r.data).catch((error) => {
        console.log(error);
    })
}