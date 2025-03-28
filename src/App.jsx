import { useState } from "react";
function App() {

  const [nome, setNome] = useState ("Memphis")
  //var nome = "Abacate";

  const Formulario = () => {
    return(
      <div>

      <input
      type="text" 
      name = "nome"
      onChange={(e)=>{setNome(e.target.value)}}
      className="nome"
      placeholder="Digite um nome..."
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

  return (
    <div>

      <h3>Pizzaria 2F</h3>
      <Formulario/>
      <Formulario/>
      <Formulario/>
     
    </div>

  )
}

export default App