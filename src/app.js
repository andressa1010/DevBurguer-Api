import express from "express" // Importa o framework Express para criar o servidor
import routes from "./routes.js" // Importa o arquivo com as rotas da aplicação

// Classe principal que configura o aplicativo Express
class App  {
    constructor(){
        this.app = express()  // Inicializa a aplicação Express
        this.middlewares() //Configura os middlewares
        this.routes() // Configura as rotas
    }

    // Método para configurar middlewares
    middlewares(){
        this.app.use(express.json()) //Adiciona suporte para parsing de JSON no corpo das requisições
    }
    routes(){
      this.app.use(routes) // Define o arquivo de rotas importado como base das rotas da aplicação
    }
}


// Exporta uma instância do servidor Express configurado
export default new App().app