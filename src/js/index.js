//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/home"
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

		
//let primerNumero = 0;
//let segundoNumero = 0;
//let tercerNumero = 0;


var contador = 0;

setInterval (()=>{
    contador++
	let primerNumero = Math.floor(contador)%10;
    let segundoNumero = Math.floor(contador/10)%10;
    let tercerNumero =Math.floor(contador/100)%10;
    let cuartoNumero =Math.floor(contador/1000)%10;
    let quintoNumero =Math.floor(contador/10000)%10;
    let sextoNumero =Math.floor(contador/100000)%10;
    
    ReactDOM.render(<Home 
        primerNumero={primerNumero}
        segundoNumero={segundoNumero}
        tercerNumero={tercerNumero}
        cuartoNumero={cuartoNumero}
        quintoNumero={quintoNumero}
        sextoNumero={sextoNumero}
        septimoNumero={sextoNumero}
    />, document.querySelector("#app"));
	
}, 1000)


//render your react application

