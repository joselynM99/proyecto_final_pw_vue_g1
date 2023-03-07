import axios from "axios";

export const buscarVehiculoPorMarcaModeloFachada = async (marca, modelo) => {
    return await buscarVehiculoPorMarcaModelo(marca, modelo)
}
export const obtenerTodasMarcasFachada = async () => {
    return await obtenerTodasMarcas()
}
export const obtenerTodosModelosFachada = async () => {
    return await obtenerTodosModelos()
}
export const revisarDisponibilidadFachada = async (placa, fechaInicio, fechaFinal) => {
    return await revisarDisponibilidad(placa, fechaInicio, fechaFinal)
}

const buscarVehiculoPorMarcaModelo = async (marca, modelo) => {
    const data = axios.get(`http://localhost:8081/API/Reservas/V1/vehiculos?marca=${marca}&modelo=${modelo}`).then(r => r.data)
    return data
}

const obtenerTodasMarcas = async () => {
    const data = axios.get(`http://localhost:8081/API/Reservas/V1/vehiculos/marcas`).then(r => r.data)
    return data
}

const obtenerTodosModelos = async () => {
    const data = axios.get(`http://localhost:8081/API/Reservas/V1/vehiculos/modelos`).then(r => r.data)
    return data
}

const revisarDisponibilidad = async (placa, fechaInicio, fechaFinal) => {
    const data = axios.get(`http://localhost:8081/API/Reservas/V1/vehiculos/porPlaca/${placa}?inicio=${fechaInicio}&fin=${fechaFinal}`).then(r => r.data)
    return data
}
