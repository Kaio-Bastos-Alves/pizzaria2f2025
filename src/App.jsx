import { useState } from "react";
import poke from './assets/pokeapi_256.png'
function App() {

  
  //var nome = "Abacate";

  const Formulario = (props) => {
    
    const [nome, setNome] = useState ("Memphis")

    return(

      <div>

      <input
      type="text" 
      name = "nome"
      onChange={(e)=>{setNome(e.target.value)}}
      className="nome"
      placeholder={props.sombra != null ? props.sombra : "Texto Padrão"}
      />

      <button 
      className="botao"
      onClick={()=>{alert(nome)}}
      > 
        Clique Aqui
      </button>
      </div>
    )
  }

  function somarValores(valor1, valor2)
  {
      let soma = valor1 + valor2;
      alert(soma);
  }
  
  window.onload=function(){
      let botaoSomar = document.getElementById("somar");
  
      botaoSomar.onclick = function () { 
          somarValores(10,5) ;
      };
  }
  return (
    <div>

      <h3>Pizzaria2f</h3>
      <p>AAA</p>
      <img src={poke} style={{width:250, height:200}}/>
      <img src={poke} style={{width:250, height:200}}/>
      <Formulario sombra="Digite seu nome..."/>
      <Formulario sombra="Digite seu email..."/>
      <Formulario sombra="(11)99999-9999"/>
      <Formulario/>
      <Formulario/>
      <Formulario/> 
      

    </div>

  )
}

export default App