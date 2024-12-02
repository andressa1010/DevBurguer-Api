import { Router } from "express"
// Importa o Router do Express, usado para definir rotas na aplicação


// Cria uma nova instância do Router para gerenciar as rotas
const routes= new Router()

// Define uma rota GET para o caminho raiz "/"
routes.get("/", (request, response)=>{
  return response.status(200).json({message: "Wello Word"})

  // Quando esta rota é acessada, retorna uma resposta com:
  // - Status HTTP 200 (sucesso)
  // - Um objeto JSON com a mensagem "Wello Word"
})

// Exporta as rotas definidas para que possam ser usadas em outros arquivos
export default routes