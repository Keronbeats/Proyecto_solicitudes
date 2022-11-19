<template>
    <div class="sidebar">
        <div class="logo_content">
            <div class="logo">
                <i class='bx bx-support'></i>
                <div class="logo_name">HOLASoylogo</div>
            </div>
            <i class='bx bx-menu' id="btn" ></i>
        </div>
        <ul class="nav_list">
          <li>
              <i class='bx bx-search'></i>
              <input type="text" placeholder="Search...">
              <span class="tooltip">Search</span>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-grid-alt' ></i>
              <span class="links_name">Dashboard</span>
            </a>
              <span class="tooltip">Dashboard</span>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-mail-send' ></i>
              <span class="links_name">Nueva Solicitud</span>
            </a>
              <span class="tooltip">Nueva Solicitud</span>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-envelope' ></i>
              <span class="links_name">Estado De Solicitudes</span>
            </a>
              <span class="tooltip">Estado De Solicitudes</span>
          </li>
        </ul>
    </div>
    <div class="home_content">
      <div class="text">Home Content</div>
    </div>
    
    <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/crear">Crear</router-link>
      <router-link to="/editar">Editar</router-link>
      <router-link to="/listar">Listar</router-link>
      <router-link to="/Ingreso">Ingreso</router-link>
      <router-link to="/Estado">Estado</router-link>
      <router-link to="/listar">Listar</router-link>
      <router-link to="/">home</router-link>
    </div>
    <router-view/>
  </template>