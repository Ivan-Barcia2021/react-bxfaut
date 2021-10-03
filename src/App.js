import React,{Fragment, useState} from 'react';

import './style.css';

export default function App() {


  return (
    <Fragment>
    <div id="root"> 
    <div className="container">
      <h1>Administrador de Pacientes</h1>
      <div className="row">
        <div className="one-half column">
          <h2>Sacar turno</h2>
          <form>
          <label>Nombre Mascota</label>
          <textarea name="mascota" 
              class="u-full-width"></textarea>
              <br></br>
             <label>Nombre Dueño</label>
             <textarea name="dueño" 
              class="u-full-width"></textarea>
              <br></br>
              <label>Fecha</label>
              <br></br>
              <input type="date" name="Fecha" className="u-full-width" />
              
              <br/> <br/>
              <label>hora</label>
              <input type="time" name="hora"
              className="u-full-width"/>
              <br></br>
              <br></br>
              <label>Sintomas</label>
              <br></br>
              <textarea name="sintomas"
              class="u-full-width"></textarea>
               <br></br>
               <button type="submit" name="AgregarTurno" class="u-full-width button-primary">Agregar
              Turno</button>
            </form>

        </div>
        </div>
        <div class="one-half column">
        <h2>Administra tus turnos</h2>
        <div className="cita">
        <p name="mascotaagregada">Mascota: <span>Nina</span></p>
            <p name="dueñoagregado">Dueño:  <span>Pablo</span></p>
            <p name="fechaagregada" >Fecha:  <span>2021-08-05</span></p>
            <p name="horaagregada" >Hora:  <span>08:20</span></p>
            <p name="sintomasagregados"  >Sintomas:<span>Le duele la pierna</span></p><button class="button elimnar u-full-width">Eliminar
              </button>
              <styleMedia> 
      
              </styleMedia>
        </div>
        </div>
      </div>
    </div>
    </Fragment>

    
  );

  }

