// Todos os Componentes do React.js, o seu formato de arquivo deve ser em JSx.
import React from "react";
import LogotipoBR from '../images/logotipoBR.jpg';

const LogotipoProjeto = () => {
    return(
        <div>
            <img src={LogotipoBR} alt="Logotipo do Brasil!" title="Logotipo do Brasil!"/>
        </div>
    );
}

// Exporta o Componente React para o consumo das outras camadas do Projeto!
export default LogotipoProjeto;