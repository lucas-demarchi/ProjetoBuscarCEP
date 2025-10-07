// Importação do Axios para o funcionamento API e busca de CEPs.
import axios from 'axios';


// Referência de URL para a API.
// https://viacep.com.br/ws/01001000/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});


// Exportar essa API para o uso da Aplicação!
export default api;