'use strict';

/** @type {import('sequelize-cli').Migration} */
/* aqui eu tenho um objeto que exporta dois metodos 
primeiro é up que o metodo de fazer criar tabelas de usuarios no banco de dados 
 
o método down ele desfaz o que eu fiz no up 

*/
module.exports = {
  async up (queryInterface, Sequelize) {
     // aqui eu estou criando uma tabela chamada users
     //e depois eu estou configurando os campos as colunas que tera essa tabela
  await queryInterface.createTable('users', 
    { id: { //coluna id
      primaryKey: true,   // Define que esta coluna será a chave primária vai ter um indentificador unico
      allowNull: false,    // O valor não pode ser nulo
      type: Sequelize.UUID, // Define o tipo de dado como UUID (identificador único universal)
      defaultValue: Sequelize.UUIDV4 // Gera automaticamente um UUID versão 4
    },
     // Coluna 'name': armazena o nome do usuário
     name:{
      type: Sequelize.STRING,
      allowNull: false,
     },
     // Coluna 'email': armazena o email do usuário
     email:{
       type: Sequelize.STRING,
       allowNull: false,
       unique: true,
       password_hash:{ //senha criptrografada do tipo string 
        type: Sequelize.STRING,
        allowNull: false // não pode ser nulo 
       }
     },
     adimin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false 
    },
    created_at:{
      type: Sequelize.DATE,
      allowNull: false
    },
    update_at:{
      type: Sequelize.DATE,
      allowNull: false 
    }
   });
     
  },


  //down para exclusão da tabela 

  async down (queryInterface) {
   await queryInterface.dropTable('users');
    
  }
};
