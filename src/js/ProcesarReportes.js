import axios from "axios";

export const reporteClientesVIPFachada = async (body) => {
    return await reporteClientesVIP(body)
}

const reporteClientesVIP = async () => {

    const data = axios.get(`http://localhost:8081/API/Reservas/V1/reportes/clientesVIP`).then(r => r.data)

    return data
}

