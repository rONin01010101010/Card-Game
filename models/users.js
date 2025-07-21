'use strict';
const {
  Model
} = require('sequelize'); 

const Moves = require('./GameMove'); 
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.HasMany(Moves); 
      Moves.belongsTo(Users , {
          foreignKey: 'UserId'
      }); 
    }
  
   //define relationship with User and number of Games which it has 
  }
  Users.init({
    Id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    score: DataTypes.INTEGER,
    email: DataTypes.STRING,
    isLoggedin: DataTypes.BOOLEAN,
    Card: DataTypes.BOOLEAN, 
    NumberOfCards: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};