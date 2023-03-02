import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "Index" */ '../pages/Index.vue')
  },
  {
    path: '/cliente/buscar-vehiculos-disponibles',
    name: 'buscar-vehiculos-disponibles',
    component: () => import(/* webpackChunkName: "BuscarVehiculosDisponibles" */ '../pages/cliente/BuscarVehiculosDisponibles.vue')
  },
  {
    path: '/cliente/reservar-vehiculo',
    name: 'reservar-vehiculo',
    component: () => import(/* webpackChunkName: "ReservarVehiculo" */ '../pages/cliente/ReservarVehiculo.vue')
  },
  {
    path: '/cliente/registrarse-como-cliente',
    name: 'registrarse-como-cliente',
    component: () => import(/* webpackChunkName: "RegistrarseComoCliente" */ '../pages/cliente/RegistrarseComoCliente.vue')
  },
  {
    path: '/cliente/actualizar-sus-datos-de-cliente',
    name: 'actualizar-sus-datos-de-cliente',
    component: () => import(/* webpackChunkName: "ActualizarDatosDelCliente" */ '../pages/cliente/ActualizarDatosDelCliente.vue')
  },
  {
    path: '/empleado/registrar-cliente',
    name: 'registrar-cliente',
    component: () => import(/* webpackChunkName: "RegistrarCliente" */ '../pages/empleado/RegistrarCliente.vue')
  },
  {
    path: '/empleado/cliente',
    name: 'cliente',
    component: () => import(/* webpackChunkName: "BuscarCliente.vue" */ '../pages/empleado/BuscarCliente.vue')
  },
  {
    path: '/empleado/ingresar-vehiculo',
    name: 'ingresar-vehiculo',
    component: () => import(/* webpackChunkName: "IngresarVehiculo" */ '../pages/empleado/IngresarVehiculo.vue')
  },
  {
    path: '/empleado/vehiculo',
    name: 'vehiculo',
    component: () => import(/* webpackChunkName: "BuscarVehiculo" */ '../pages/empleado/BuscarVehiculo.vue')
  },
  {
    path: '/empleado/retirar-vehiculo-reservado',
    name: 'retirar-vehiculo-reservado',
    component: () => import(/* webpackChunkName: "RetirarunVehiculoReservado" */ '../pages/empleado/RetirarunVehiculoReservado.vue')
  },
  {
    path: '/empleado/retirar-vehiculo-sin-reserva',
    name: 'retirar-vehiculo-sin-reserva',
    component: () => import(/* webpackChunkName: "RetirarunVehiculoSinReserva" */ '../pages/empleado/RetirarunVehiculoSinReserva.vue')
  },
  {
    path: '/reportes/reservas',
    name: 'reservas',
    component: () => import(/* webpackChunkName: "ReporteReservas" */ '../pages/reportes/ReporteReservas.vue')
  },
  {
    path: '/reportes/clientes-vip',
    name: 'clientes-vip',
    component: () => import(/* webpackChunkName: "ReporteClientesVIP" */ '../pages/reportes/ReporteClientesVIP.vue')
  },
  {
    path: '/reportes/vehiculos-vip',
    name: 'vehiculos-vip',
    component: () => import(/* webpackChunkName: "ReporteVehiculosVIP" */ '../pages/reportes/ReporteVehiculosVIP.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router