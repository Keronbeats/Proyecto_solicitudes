<template>
  <div class="form_container">
    <div class="form">
      <div class="form_logo">
        <img src="../assets/icon.png" alt="logo" />
      </div>
      <div class="form_title">
        <h1>Ingreso de Solicitud</h1>
        <div>Ingreso de Solicitud de reclamo o sugerencia</div>
      </div>
        <div class="form_imput">
          <div class="form_item">
            <div>Tipo de Solicitud</div>
            <form class="form_xd">
              <select id="selectxd" class="form-select form-select-sm mb-3" aria-label=".form-select-lg example">
                <option selected>Seleccione el tipo de solicitud...</option>
                <option value="Reclamo">Reclamo</option>
                <option value="Sugerencia">Sugerencia</option>
                <option value="Solicitud">Solicitud</option>
              </select>
              <div class="title_xd">Descripcion</div>
              <textarea name="descripcion" class="descripcion_area" cols="40" rows="5"
                placeholder="Especifique la solicitud..."></textarea>
              <div class="title_xd">Personas involucradas</div>
              <select id="form_xd" class="form-select form-select-sm mb-3" aria-label=".form-select-lg example">
                <option selected>Seleccione la area involucrada...</option>
                <option value="Jefatura de carrera">Jefatura de carrera</option>
              </select>
              <button type="submit">Ingresar</button>
            </form>
          </div>
        </div>

    </div>
  </div>
</template>
<style scoped>
.form_container {
  width: auto !important;
  background: rgba(255, 255, 255, 0.5);
  padding: 4rem;
  border-radius: 10px;
  position: relative;
}

.form_container::before {
  content: "";
  position: absolute;
  background: rgba(255, 255, 255, 0.15);
  inset: 0;
  transform: rotate(-5deg);
  z-index: -1;
}

.form_logo {
  position: relative;
  width: 100px;
  height: 100px;
  top: -50px;
  left: 200px;
  margin-bottom: 1rem;
}

.form_logo,
.form_title,
.form_item button {
  text-align: center;
}

.form_item button {
  background: black;
  color: white;
  padding: 1rem;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: background 0.5s;
}

.form_item button:hover {
  background-color: rgba(0, 0, 0, 0.692);
  cursor: pointer;
}
.form_xd{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.title_xd{
  position: relative;
    top: 15px;
}
.form_title {
  position: relative;
  top: -50px;
}
.form_item {
  position: relative;
}
.descripcion_area{
  width: 500px;
  height: 200px;
  resize: none;
}
.selectxd{

}
</style>