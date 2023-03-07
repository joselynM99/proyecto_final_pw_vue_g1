import axios from "axios";

export const reservarFachada = async (body) => {
   await reservar(body)
}
const reservar = async (body) => {
   const data = axios.post(`http://localhost:8081/API/Reservas/V1/reservas`, body).then(r => r.status)
   console.log(data);
}