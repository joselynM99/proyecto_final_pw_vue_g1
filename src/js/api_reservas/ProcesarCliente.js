import axios from "axios";

export const registrarClienteFachada = async (body) => {
    return await registrarCliente(body)
}

export const actualizarClienteFachada = async (id, body) => {
    return await actualizarCliente(id,body)
}

export const buscarClienteFachada = async (id, body) => {
    return await buscarCliente(id,body)
}


const registrarCliente = async (body) => {

    axios.post(`http://localhost:8081/API/Reservas/V1/clientes`, body).then(r => r.data)

    
}

const actualizarCliente = async (id, body) => {

    axios.put(`http://localhost:8081/API/Reservas/V1/clientes/${id}`, body).then(r => r.data)

   
}

const buscarCliente = async (cedula) => {

    const data = axios.get(`http://localhost:8081/API/Reservas/V1/clientes/${cedula}`).then(r => r.data)

    return data
}
