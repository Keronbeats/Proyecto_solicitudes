<template>

  <div class="login-card-container">
    <div class="login-card">
      <div class="login-card-logo">
        <img src="../assets/icon.png" alt="logo">
      </div>
      <div class="login-card-header">
        <h1>Sign In</h1>
        <div>Porfavor ingresar para usar la plataforma</div>
      </div>
      <form class="login-card-form">
        <div class="form-item">
          <span class="form-item-icon material-symbols-rounded">mail</span>
          <input type="text" placeholder="Ingresar Mail" requiered autofocus>
        </div>
        <div class="form-item">
          <span class="form-item-icon material-symbols-rounded">lock</span>
          <input type="password" placeholder="Ingresar Contraseña" required>
        </div>
        <div class="form-item-other">
          <div class="checkbox">
            <input type="checkbox" id="rememberMeCheckbox">
            <label for="rememberMeCheckbox">Recordar</label>
          </div>
          <a href="#">Olvide mi Contraseña!:(</a>
        </div>
        <button type="submit">Ingresar</button>
      </form>
      <div class="login-card-footer">
        No tienes Cuenta? <a href="#">Crea una Cuenta Gratis</a>
      </div>
    </div>
    <div class="login-card-social">
      <div>Ingresar con</div>
      <div class="login-card-social-btns">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44"
            height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
        </a>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-discord" width="44"
            height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="9" cy="12" r="1" />
            <circle cx="15" cy="12" r="1" />
            <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0" />
            <path d="M7 16.5c3.5 1 6.5 1 10 0" />
            <path
              d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5" />
            <path
              d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>