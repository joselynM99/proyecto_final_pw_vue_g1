<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand me-5" to="/">AVIS</router-link>
      <div class="dropdown me-4">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Clientes
        </a>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
          <li>
            <router-link class="dropdown-item" to="/cliente/buscar-vehiculos-disponibles">Vehículos disponibles</router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/cliente/reservar-vehiculo">Reservar vehículo</router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/cliente/registrarse-como-cliente">Registrarse</router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/cliente/actualizar-sus-datos-de-cliente">Actualizar datos</router-link>
          </li>
        </ul>
      </div>
      <div class="dropdown me-4">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Empleados
        </a>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
          <li>
            <router-link class="dropdown-item" to="/empleado/registrar-cliente">Registrar cliente</router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/empleado/cliente">Cliente</router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/empleado/ingresar-vehiculo">Ingresar un vehículo</router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/empleado/vehiculo">Vehículo</router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/empleado/retirar-vehiculo-reservado">Retirarun vehículoreservado</router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/empleado/retirar-vehiculo-sin-reserva">Retirarun vehículo sin reserva</router-link>
          </li>
        </ul>
      </div>
      <div class="dropdown me-auto">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Reportes
        </a>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
          <li>
            <router-link class="dropdown-item" to="/reportes/reservas">Reporte de Reservas</router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/reportes/clientes-vip">Reporte de Clientes VIP</router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/reportes/vehiculos-vip">Reporte de Vehículos VIP</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {};
</script>

<style></style>