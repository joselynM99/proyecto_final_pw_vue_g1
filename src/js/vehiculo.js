import axios from 'axios'


export const buscarVehiculosPorMarca = async (marca) => {
    return await axios.get(`http://localhost:8081/API/Reservas/V1/empleados/vehiculos/marca/${marca}`).then(r => r.data).catch((error) => {
        console.log(error)
    })
}

export const buscarVehiculoPorId = async (id) => {
    return await axios.get(`http://localhost:8081/API/Reservas/V1/empleados/vehiculos/${id}`).then(r => r.data).catch((error) => {
        console.log(error)
    })
}

export const actualizarVehiculo = async (vehiculo) => {
    axios.put(`http://localhost:8081/API/Reservas/V1/empleados/vehiculos`, vehiculo).then(r => {
        console.log(r.data)
    }).catch((error) => {
        console.log(error)
    })
}

export const borrarVehiculoPorId = async (id) => {
    axios.delete(`http://localhost:8081/API/Reservas/V1/empleados/vehiculos/${id}`).then(r => {
        console.log(r.data)
    }).catch((error) => {
        console.log(error)
    })
}

export const buscarVehiculoPorNumeroDeReserva = async (numero) => {
    return await axios.get(`http://localhost:8081/API/Reservas/V1/empleados/vehiculos/numero/${numero}`).then(r => r.data).catch((error) => {
        console.log(error);
    })
}

export const actualizarEstadoVehiculo = async (numero, body) => {
    axios.put(`http://localhost:8081/API/Reservas/V1/empleados/reservas/${numero}`, body).then(r => r.data).catch((error) => {
        console.log(error);
    })
}