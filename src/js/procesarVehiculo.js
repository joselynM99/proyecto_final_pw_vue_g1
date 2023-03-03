import axios from "axios";

const buscarVehiculoPorMarcaModelo = async (marca, modelo) => {
    const data = axios.get(`http://localhost:8081/API/Reservas/V1/clientes`).then(r => r.data)
    return data
}

export const buscarVehiculoPorMarcaModeloFachada = async (marca, modelo) => {
    return await buscarVehiculoPorMarcaModelo(marca, modelo)
}