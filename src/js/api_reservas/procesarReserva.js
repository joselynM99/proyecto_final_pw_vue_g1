import MensajeVue from "@/components/Mensaje.vue";
import axios from "axios";

export const reservarFachada = async (body) => {
   return await reservar(body)
}

const reservar = async (body) => {
   try {
      const response = await axios.post(`http://localhost:8081/API/Reservas/V1/reservas`, body);
      return {
         tipoAlerta: "success", mensaje: `Numero de Reserva: ${response.data.numeroReserva} `, adicional: "Se registro de manera exitosa la reserva"
      }
   } catch (error) {
      if (error.response) {
         return {
            tipoAlerta: "danger", mensaje: "No se pudo ingreso la reserva", adicional:`Codigo ${error.response.status}`
         }
      } else if (error.request) {
         return {
            tipoAlerta: "danger", mensaje: 'No se recibió respuesta del servidor'
         }
      } else {
         return {
            tipoAlerta: "danger", mensaje: 'Error al procesar la solicitud', adicional: error.message
         }

      }
      throw error;
   }
}


