const Sequelize = require("sequelize"); 
 
const sequelize = new Sequelize(
 'PERN Card Game',
 'postgres',
 'user',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
) 

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
}); 

// sequelize.close() //closes sequelize connection to database 