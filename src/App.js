// Importação IMPORTANTE da base de dados dos estados (Biblioteca).
import { useState } from 'react';

// Importando a API desenvolvida.
import api from './api/api';

// Importando a Biblioteca de Icones React.
import { FiSearch } from 'react-icons/fi';

// Importando o Logotipo do Governo Federal.
import LogotipoBR from './images/logotipoBR.jpg';

// Importando o Arquivo CSS para Formatação.
import './css/App.css';


function App() {

  // Inserção da Biblioteca Estados.
  const [input, setInput] = useState('');

  // Cria um Objeto vazio, porem pronto para receber os dados JSON da API para renderizar na Tela.
  const [cep, setCEP] = useState({});

  // Função do tipo assíncrono, para realizar o monitoramento de performance e execução do consmo dos dados pela API.
  async function handleSearch() {
    
    // Realiza a pesquisa via API.
    if(input === ''){
      alert("Digite um CEP válido!");
      return false;
    }

    // Caso o Usuário digite o CEP com o traço (-), será removido para a realização da pesquisa!
    const cepLimpo = input.replace(/\D/g, '');

    try{
      // Esta Variável constante, realiza uma reqisição na API, de como pegar o valor digitado no input e realizar a consulta!.
      const retorno = await api.get(`${cepLimpo}/json`);

      // set - Entrada de Dados.
      // get - Saída de Dados.

      setCEP(retorno.data);
      setInput("");
    
    }catch{
      alert("CEP não encontrado!");
      setInput("");
    }
  }

  return (
    <div className="boxPage">
      <header className="topTitle">
        <h1>Pesquise seu CEP!</h1>
        <h4>Aqui você pode encontrar qualquer localização do Brasil, basta realizar uma pesquisa de CEP.</h4>
      </header>

      <main className="container">
        <h3>Pesquise seu CEP:</h3>
        <section className="boxForm">
          <input type="text" placeholder="Digite seu CEP aqui..." value={input} onChange={(event) => setInput(event.target.value)}/>
          <button className="btnPesquisar"><FiSearch size={20} color="#ffffff" onClick={handleSearch}/></button>
        </section>
      </main>
      
        {/* Só vai executar a section, quando houver resultado, se não, nada vai aparecer */}
        {Object.keys(cep).length > 0 && (
          <section className="bodyResult">
            <h2>CEP: {cep.cep}</h2>

            <strong>Endereço: {cep.logradouro}{cep.complemento ? ` - ${cep.complemento }` : ''} </strong>

            <strong>Bairro: {cep.bairro} </strong>

            <strong>Região: {cep.regiao} </strong>

            <strong>Cidade: {cep.localidade} </strong>

            <strong>DDD: {cep.ddd} </strong>

            <strong>Estado: {cep.estado} </strong>
          </section>
        )}

      <footer className="end">
        <img src={LogotipoBR} alt="Logotipo BR!" title="Logotipo BR!" className="logotipoBR" />
        <span>Todos os Direitos reservados 2025.</span>
      </footer>
    </div>
  );
}

export default App;
