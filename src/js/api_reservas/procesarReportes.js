import axios from "axios";

export const crearReporteVehiculosFachada = async (fechaInicio, fechaFinal) => {
    return await crearReporteVehiculos(fechaInicio, fechaFinal)
}

const crearReporteVehiculos = async (fechaInicio, fechaFinal) => {
    const data = axios.get(`http://localhost:8081/API/Reservas/V1/reservas?inicio=${fechaInicio}&fin=${fechaFinal}`).then(r => r.data)
    return data
}