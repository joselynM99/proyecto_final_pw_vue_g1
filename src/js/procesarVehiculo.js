import axios from "axios";

export const registrarVehiculoFachada=async(body)=>{
    return await registrarVehiculoAxios(body);
}


export const buscarVehiculoPorMarcaModeloFachada = async (marca, modelo) => {
    return await buscarVehiculoPorMarcaModelo(marca, modelo)
}
export const obtenerTodasMarcasFachada = async () => {
    return await obtenerTodasMarcas()
}
export const obtenerTodosModelosFachada = async () => {
    return await obtenerTodosModelos()
}

const buscarVehiculoPorMarcaModelo = async (marca, modelo) => {
    const data = axios.get(`http://localhost:8081/API/Reservas/V1/vehiculos?marca=${marca}&modelo=${modelo}`).then(r => r.data)
    return data
}

const obtenerTodasMarcas = () => {
    const data = axios.get(`http://localhost:8081/API/Reservas/V1/vehiculos/marcas`).then(r => r.data)
    return data
}

const obtenerTodosModelos = () => {
    const data = axios.get(`http://localhost:8081/API/Reservas/V1/vehiculos/modelos`).then(r => r.data)
    return data
}

//Post
const registrarVehiculoAxios=async(body)=>{
    const data=axios.post(`http://localhost:8081/API/Reservas/V1/empleados/vehiculoNuevo`,body).then(r=>r.data)
    console.log(data)
    return data
}