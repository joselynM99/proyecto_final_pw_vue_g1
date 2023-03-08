import axios from "axios";

export const registrarClienteFachada = async (body) => {
    return await registrarCliente(body)
}

const registrarCliente = async (body) => {
    axios.post(`http://localhost:8081/API/Reservas/V1/empleados/clientes`, body).then(r => r.data)
}

//Metodos Fachada
export const listaClientesApellido = async (apellido) => {
    return await obtenerClientes(apellido);
}

export const borrarClientePorIdFachada = async (id) => {
    return await borrarClientePorId(id);
}

export const actualizarClienteFachada = async (cliente) => {
    return await actualizarCliente(cliente);
}

export const buscarClientePorIdFachada = async (id) => {
    return await buscarClientePorId(id);
}

//Metodos primarios
const obtenerClientes = async (apellido) => {
    const data = axios.get(`http://localhost:8081/API/Reservas/V1/empleados/listaClientes/${apellido}`).then(r => r.data)
    console.log(data)
    return data
}

const borrarClientePorId = async (id) => {
    const data = axios.delete(`http://localhost:8081/API/Reservas/V1/empleados/clientes/${id}`).then(r => r.data)
    console.log(data)
    return data
}

const actualizarCliente = async (cliente) => {
    const data = axios.put(`http://localhost:8081/API/Reservas/V1/empleados/clientes`, cliente).then(r => r.data)
    console.log(data)
    return data
}

const buscarClientePorId = async (id) => {
    const data = axios.get(`http://localhost:8081/API/Reservas/V1/empleados/clientes/${id}`).then(r => r.data)
    console.log(data)
    return data
}