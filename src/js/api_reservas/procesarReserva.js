import MensajeVue from "@/components/Mensaje.vue";
import axios from "axios";

export const reservarFachada = async (body) => {
   return await reservar(body)
}

const reservar = async (body) => {
   try {
      const response = await axios.post(`http://localhost:8081/API/Reservas/V1/reservas`, body);
      return {
         tipoAlerta: "success", mensaje: `El numero de su reserva es: ${response.data.numeroReserva} `, adicional: "Se registro de manera exitosa la reserva"
      }

   } catch (error) {
      if (error.response) {
         console.log(`Error en la solicitud POST: ${error.response.status}`);
         return {
            tipoAlerta: "danger", mensaje: "No se pudo ingreso la reserva", adicional: error.response.status
         }
      } else if (error.request) {
         console.log('No se recibió respuesta del servidor');
      } else {
         console.log(`Error al procesar la solicitud: ${error.message}`);
      }
      throw error;
   }
}


