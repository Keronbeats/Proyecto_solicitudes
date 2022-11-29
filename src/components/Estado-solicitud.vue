<template>
    <div class="estado_container">

        <div class="estado_titulo">
            <div>Estado de Solicitudes</div>
        </div>
        <div class="estado_table">
            <table class="table_estado">
                <tr>
                    <th>Numero Solicitud</th>
                    <th>Estado</th>
                    <th>Fecha de Actualizacion</th>
                </tr>
                <tr>
                    <td>1919</td>
                    <td>Visto por el encargado</td>
                    <td>21-10-2022</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<style scoped>
.estado_container{
    width: auto !important;
    background: rgba(255, 255, 255, 0.5);
    padding: 4rem;
    border-radius: 10px;
    position: relative;
}
.estado_container::before{
    content: "";
    position: absolute;
    background: rgba(255, 255, 255, 0.15);
    inset: 0;
    transform: rotate(-5deg);
    z-index: -1;
}
.estado_titulo{
    text-align: center;
    font-size:x-large;
    position: relative;
    top: -25px;
}
.estado_table{

}
/* Tabla css*/
.table_estado {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 15px;
  width: 300px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>