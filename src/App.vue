<template>
  <div class="sidebar">
    <div class="logo_content">
      <div class="logo">
        <i class='bx bx-support'></i>
        <div class="logo_name">Reclamos CFT</div>
      </div>
      <i class='bx bx-menu' id="btn"></i>
    </div>

    <ul class="nav_list">
      <li>
        <a href="/Home" class="sidebar-box-container">
          <i class='bx bx-home'></i>
          <router-link to="/Home" class="links_name">Inicio</router-link>
        </a>
        <span class="tooltip">Inicio</span>
      </li>
      <li>
        <a href="/Ingreso" class="sidebar-box-container" >
          <i class='bx bx-mail-send'></i>
          <router-link to="/Ingreso" class="links_name">Nueva Solicitud</router-link>
        </a>
        <span class="tooltip">Nueva Solicitud</span>
      </li>
      <li>
        <a href="/Estado" class="sidebar-box-container">
          <i class='bx bx-envelope'></i>
          <router-link to="/Estado" class="links_name">Estado De Solicitudes</router-link>
        </a>
        <span class="tooltip">Estado De Solicitudes</span>
      </li>
      <li class="nav_down">
        <a href="/login" class="sidebar-box-container">
          <i class='bx bx-log-in'></i>
          <router-link to="/login" class="links_name">Login</router-link>
        </a>
        <span class="tooltip">Login</span>
      </li>
      <li class="nav_down">
        <a href="/login" class="sidebar-box-container">
          <i class='bx bx-log-out'></i>
          <router-link to="/login" class="links_name">Log-out</router-link>
        </a>
        <span class="tooltip">Log-out</span>
      </li>
    </ul>

  </div>
  <!--<div class="home_content">
    <div class="text">Home Content</div>
  </div>-->

  <!--<div id="nav">
    <router-link to="/login">Login</router-link> 
    <router-link to="/crear">Crear</router-link>
    <router-link to="/editar">Editar</router-link>
    <router-link to="/listar">Listar</router-link>
  </div>-->
  <router-view /> 
</template> 


<style scoped>
.nav_down{
  position: relative;
  top: 600px;
}

</style>