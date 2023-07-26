import React from "react";
//include images into your bundle
//create your first component




function Home(props){
    console.log(props)
    return (
       <div className= "Home">
        <div class="container text-center bg-black text-white mt-4" >
  <div className="row align-items-center">
    <div className="col hora" ><i class="fas fa-clock"></i></div>
    <div className="col hora" > {props.sextoNumero}</div>
    <div className="col hora" > {props.quintoNumero}</div>
    <div className="col hora" > {props.cuartoNumero}</div>
    <div className="col hora" > {props.tercerNumero}</div>
    <div className="col hora" > {props.segundoNumero}</div>
    <div className="col hora" > {props.primerNumero}</div>
    </div>
    </div>
    </div>


);
}

export default Home;

        //</div>
        //</div>  
           // <header className ="Home-header">
              //  <div className = "hora" > {props.primerNumero}</div>
               // <div className = "hora" > {props.segundoNumero}</div>
                //<div className = "hora" > {props.tercerNumero}</div>
                //<div className = "hora" > {props.cuartoNumero}</div>
                //<div className = "hora" > {props.quintoNumero}</div>
                //<div className = "hora" > {props.sextoNumero}</div>
           // </header>
        ///</div>
        //</div>


  
