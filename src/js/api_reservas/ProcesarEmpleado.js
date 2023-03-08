import axios from "axios";

export const registrarClienteFachada = async (body) => {
    return await registrarCliente(body)
}

const registrarCliente = async (body) => {

    axios.post(`http://localhost:8081/API/Reservas/V1/empleados/clientes`, body).then(r => r.data)

    
}