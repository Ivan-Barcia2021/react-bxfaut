import React from "react";

import PropTypes from "prop-types";
class turno extends React.componet {
constructor (props){
  super(props);
  this.state={
    turno:["mascota","dueño", "Fecha", "hora", "sintomas"],
  };
}
render(){
  return(
    <Menu
mascota={this.state.turno}
dueño={this.state.turno}
Fecha={this.state.turno}
hora={this.state.turno}
sintomas={this.state.turno}
    onAddOption={this.handleAddOption.bind(this)}
  />
  );}
  handleAddOption(){
    this.setState({
      mascota:this.state.turno.concat(["AgregarTurno"]),
      dueño:this.state.turno.concat(["AgregarTurno"]),
      Fecha:this.state.turno.concat(["AgregarTurno"]),
      hora:this.state.turno.concat(["AgregarTurno"]),
      sintomas:this.state.turno.concat(["AgregarTurno"]),
      
    });
  }

}
class Menu extends React.Component {
constructor(props) {
  super(props);
}

render(){
  let mascota=this.props.mascota;
  let dueño=this.props.dueño;
  let Fecha=this.props.Fecha;
  let hora=this.props.hora;
  let sintomas=this.props.sintomas;
  return (
    <div>
      {mascota.map((turno)=>(
      <p>{mascota} </p>
         )   )}
       {dueño.map((turno)=>(
      <p>{dueño} </p>
       ))}
        {Fecha.map((turno)=>(
      <p>{Fecha} </p>
       ))}
        {hora.map((turno)=>(
      <p>{hora} </p>
       ))}
        {sintomas.map((turno)=>(
      <p>{sintomas} </p>
       ))}
       <button onClick={handleAddOption()}>Nueva Opción</button>
      </div>
  )
}}ReactDOM.render(<App />, document.getElementById("App"));